/* =========================================================
   Guards the hand-written figures on the homepage against the
   data they claim to summarise.

   index.html states totals inline rather than importing 240KB of
   policy data at runtime. That is a deliberate performance choice,
   but it means the page can silently drift from the platform. This
   recomputes every headline number from the real sources and fails
   if the HTML disagrees.

   Run: npm run check
   ========================================================= */
import { readFileSync } from "node:fs";

const read = (f) => readFileSync(new URL(`../${f}`, import.meta.url), "utf8");
const load = (f, key) => {
  const g = { window: {} };
  new Function("window", read(f))(g.window);
  return g.window[key];
};

const P = load("data/policies.js", "PLATFORM");
const D = load("data/income-distribution.js", "TAXDATA");
const html = read("index.html");
const llms = read("llms.txt");
const faq  = read("faq.html");

/* ---- platform ledger ---- */
const spendPolicies = P.policies.filter((p) => p.costType === "spend");
const REVENUE = P.funding.reduce((s, f) => s + f.amt, 0);
const SPEND = spendPolicies.reduce((s, p) => s + p.cost, 0);
const SURPLUS = REVENUE - SPEND;

/* ---- tax model: the same maths scripts/tax.js runs ---- */
const taxFor = (inc, br) => {
  let t = 0;
  for (let i = 0; i < br.length; i++) {
    const lo = br[i].min;
    if (inc <= lo) break;
    const hi = i + 1 < br.length ? br[i + 1].min : Infinity;
    t += (Math.min(inc, hi) - lo) * (br[i].rate / 100);
  }
  return t;
};
const raw = (br) =>
  D.BINS.reduce((s, b) => s + taxFor(Math.max(0, b.avgAGI - D.CURRENT_STD_DEDUCTION), br) * b.returns * 1e6, 0) / 1e9;
const FACTOR = D.ACTUAL_CURRENT_REVENUE / raw(D.CURRENT_BRACKETS);
const rev = (br) => raw(br) * FACTOR;

const CURRENT = rev(D.CURRENT_BRACKETS);
const FLAT20 = rev([{ min: 0, rate: 20 }]);
const FLAT15 = rev([{ min: 0, rate: 15 }]);

const T = (b) => `$${(b / 1000).toFixed(2)}T`;

const checks = [
  // [label, needle, file, source]
  ["revenue total",       `$${(REVENUE / 1000).toFixed(2)}T`, html, "index.html"],
  ["spending total",      `$${(SPEND / 1000).toFixed(2)}T`,   html, "index.html"],
  ["surplus",             `+$${SURPLUS}B`,                    html, "index.html"],
  ["revenue sources",     `>${P.funding.length}<`,            html, "index.html"],
  ["spending policies",   `>${spendPolicies.length}<`,        html, "index.html"],
  ["cabinet seats",       `>${P.cabinet.length}<`,            html, "index.html"],
  ["debt headline",       `$${Math.round(P.fiscal.debtToday / 1000)}T`, html, "index.html"],
  ["debt payoff years",   `${Math.ceil(P.fiscal.debtToday / SURPLUS)} years`, html, "index.html"],
  ["current-law revenue", T(CURRENT),                         html, "index.html"],
  ["flat 20% revenue",    T(FLAT20),                          html, "index.html"],
  ["flat 15% revenue",    T(FLAT15),                          html, "index.html"],
  ["flat-tax shortfall",  `$${Math.round(CURRENT - FLAT15)}B`, html, "index.html"],

  // The AI-readable summary restates the headline figures, so it can drift too.
  ["llms revenue",        `$${(REVENUE / 1000).toFixed(2)} trillion`, llms, "llms.txt"],
  ["llms spending",       `$${(SPEND / 1000).toFixed(2)} trillion`,   llms, "llms.txt"],
  ["llms surplus",        `$${SURPLUS} billion`,                      llms, "llms.txt"],
  ["llms policy count",   `${P.policies.length} policies`,            llms, "llms.txt"],
  ["llms cabinet",        `${P.cabinet.length} seats`,                llms, "llms.txt"],

  // The FAQ quotes the totals in prose and feeds the FAQPage schema.
  ["faq revenue",         `~$${(REVENUE / 1000).toFixed(2)}T/yr`, faq, "faq.html"],
  ["faq spending",        `~$${(SPEND / 1000).toFixed(2)}T/yr`,   faq, "faq.html"],
  ["faq surplus",         `~$${SURPLUS}B`,                        faq, "faq.html"],
];

let failed = 0;
for (const [label, needle, haystack, file] of checks) {
  const ok = haystack.includes(needle);
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"}  ${label.padEnd(20)} expected ${String(needle).padEnd(16)} in ${file}`);
}

if (failed) {
  console.error(`\n${failed} homepage figure(s) no longer match the data. Update index.html.`);
  process.exit(1);
}
console.log(`\nAll ${checks.length} published figures match the platform data.`);
