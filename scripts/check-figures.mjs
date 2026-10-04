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
  ["revenue total",        `$${(REVENUE / 1000).toFixed(2)}T`],
  ["spending total",       `$${(SPEND / 1000).toFixed(2)}T`],
  ["surplus",              `+$${SURPLUS}B`],
  ["revenue sources",      `>${P.funding.length}<`],
  ["spending policies",    `>${spendPolicies.length}<`],
  ["cabinet seats",        `>${P.cabinet.length}<`],
  ["current-law revenue",  T(CURRENT)],
  ["flat 20% revenue",     T(FLAT20)],
  ["flat 15% revenue",     T(FLAT15)],
  ["flat-tax shortfall",   `$${Math.round(CURRENT - FLAT15)}B`],
];

let failed = 0;
for (const [label, needle] of checks) {
  const ok = html.includes(needle);
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"}  ${label.padEnd(22)} expected ${needle} in index.html`);
}

if (failed) {
  console.error(`\n${failed} homepage figure(s) no longer match the data. Update index.html.`);
  process.exit(1);
}
console.log(`\nAll ${checks.length} homepage figures match the platform data.`);
