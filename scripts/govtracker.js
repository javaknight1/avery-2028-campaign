/* =========================================================
   GovTracker — a live, public dashboard of the federal
   government: a ticking debt clock (real U.S. Treasury data),
   fiscal vitals, where money goes & comes from, the live
   Humanity Score, and a states-opt-in compact.
   The campaign's prototype of the transparency site Avery
   would build for real.  Reads window.PLATFORM.
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s);
  const moneyB = (b) => (b >= 1000 ? "$" + (b / 1000).toFixed(b % 1000 === 0 ? 1 : 2) + "T" : "$" + Math.round(b) + "B");
  const commaUSD = (d) => "$" + Math.floor(d).toLocaleString("en-US");
  const POP = 335_000_000;          // ~US population
  const GDP_B = 29_000;             // ~$29T GDP, in $B (1T = 1000B)

  /* ---------- Illustrative federal budget (real ballpark, $B/yr) ---------- */
  const SPENDING = [
    { label: "Social Security", amt: 1450, icon: "👵" },
    { label: "Medicare", amt: 1050, icon: "🏥" },
    { label: "Interest on the debt", amt: 950, icon: "🏦" },
    { label: "Medicaid & other health", amt: 850, icon: "💊" },
    { label: "National defense", amt: 850, icon: "🛡️" },
    { label: "Income security (SNAP, unemployment…)", amt: 700, icon: "🤝" },
    { label: "Veterans' benefits", amt: 320, icon: "🎖️" },
    { label: "Education & training", amt: 200, icon: "🎓" },
    { label: "Transportation & infrastructure", amt: 150, icon: "🛣️" },
    { label: "Science, energy & environment", amt: 100, icon: "🔬" },
    { label: "Everything else", amt: 130, icon: "📦" },
  ];
  const REVENUE = [
    { label: "Individual income taxes", amt: 2450, icon: "🧾" },
    { label: "Payroll taxes (Social Security & Medicare)", amt: 1700, icon: "💼" },
    { label: "Corporate income taxes", amt: 450, icon: "🏢" },
    { label: "Excise, customs & other", amt: 250, icon: "🚢" },
    { label: "Misc. (Fed remittances, fees)", amt: 150, icon: "🪙" },
  ];
  const TOTAL_SPEND = SPENDING.reduce((s, r) => s + r.amt, 0);
  const TOTAL_REV = REVENUE.reduce((s, r) => s + r.amt, 0);
  const DEFICIT_B = TOTAL_SPEND - TOTAL_REV;            // ~1750 ($B/yr)

  /* ---------- Live debt clock (U.S. Treasury, with fallback) ---------- */
  (function clock() {
    const numEl = $("gtClockNum"), subEl = $("gtClockSub"), srcEl = $("gtClockSrc");
    if (!numEl) return;
    let baseDebtB = P.fiscal.debtToday;                 // $B, fallback
    const perSecB = DEFICIT_B / 31_557_600;             // debt growth per second ($B)
    let t0 = null;

    const fmtPerPerson = (debtB) => commaUSD((debtB * 1e9) / POP);
    function frame(ts) {
      if (t0 === null) t0 = ts;
      const secs = (ts - t0) / 1000;
      const debtB = baseDebtB + perSecB * secs;
      numEl.textContent = commaUSD(debtB * 1e9);
      if (subEl) subEl.textContent = fmtPerPerson(debtB) + " per person · climbing ~" + commaUSD(perSecB * 1e9) + "/sec";
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    // upgrade to live figure
    const API = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/";
    const url = API + "debt_to_penny?fields=record_date,tot_pub_debt_out_amt&sort=-record_date&page%5Bsize%5D=1";
    (async () => {
      try {
        const ctrl = new AbortController();
        const to = setTimeout(() => ctrl.abort(), 7000);
        const j = await (await fetch(url, { signal: ctrl.signal })).json();
        clearTimeout(to);
        const liveB = parseFloat(j.data[0].tot_pub_debt_out_amt) / 1e9;
        if (isFinite(liveB) && liveB > 0) {
          baseDebtB = liveB; t0 = null;                 // re-anchor the clock to the live number
          const [y, m, d] = j.data[0].record_date.split("-").map(Number);
          const MO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          if (srcEl) {
            srcEl.classList.add("live");
            srcEl.innerHTML = `📡 <strong>Live</strong> from the U.S. Treasury — "Debt to the Penny," as of ${MO[m - 1]} ${d}, ${y}. <a href="https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/" target="_blank" rel="noopener">Source ↗</a>`;
          }
        }
      } catch (_) { if (srcEl) srcEl.textContent = "Showing an illustrative figure — live U.S. Treasury feed unavailable right now."; }
    })();
  })();

  /* ---------- Fiscal vitals ---------- */
  (function vitals() {
    const el = $("gtVitals");
    if (!el) return;
    const interestB = P.fiscal.debtToday * P.fiscal.interestRate;
    const cards = [
      { k: "National debt", v: moneyB(P.fiscal.debtToday), s: "total public debt" },
      { k: "Annual deficit", v: moneyB(DEFICIT_B), s: "spending over revenue, this year" },
      { k: "Debt per person", v: commaUSD((P.fiscal.debtToday * 1e9) / POP), s: "every man, woman & child" },
      { k: "Interest / year", v: moneyB(interestB), s: "just to service the debt" },
      { k: "Debt-to-GDP", v: Math.round((P.fiscal.debtToday / GDP_B) * 100) + "%", s: "debt vs. the whole economy" },
      { k: "Spent / second", v: commaUSD((TOTAL_SPEND * 1e9) / 31_557_600), s: "federal outlays, every second" },
    ];
    el.innerHTML = cards.map((c) => `
      <div class="gt-vital" data-reveal>
        <div class="gt-vital-v">${c.v}</div>
        <div class="gt-vital-k">${esc(c.k)}</div>
        <div class="gt-vital-s">${esc(c.s)}</div>
      </div>`).join("");
  })();

  /* ---------- Where the money goes / comes from (Rocket-Money style) ---------- */
  function flow(elId, rows, total, cls, note) {
    const el = $(elId);
    if (!el) return;
    const max = Math.max(...rows.map((r) => r.amt));
    el.innerHTML = rows.map((r) => {
      const pct = (r.amt / total) * 100;
      return `<div class="gt-line ${cls}" data-reveal>
        <span class="gt-ic">${r.icon}</span>
        <span class="gt-lab">${esc(r.label)}</span>
        <span class="gt-bar"><span class="gt-fill" style="width:${(r.amt / max * 100).toFixed(1)}%"></span></span>
        <span class="gt-amt">${moneyB(r.amt)}</span>
        <span class="gt-pct">${pct.toFixed(0)}%</span>
      </div>`;
    }).join("") + `<div class="gt-total ${cls}">${note}<b>${moneyB(total)}</b></div>`;
  }

  /* ---------- Live Humanity Score ---------- */
  (function humanity() {
    const el = $("gtHumanity");
    if (!el || !P.humanityScore) return;
    const slices = P.humanityScore.slices;
    const wsum = slices.reduce((s, x) => s + x.value, 0);
    const overall = Math.round(slices.reduce((s, x) => s + x.score * x.value, 0) / wsum);
    const bars = slices.slice().sort((a, b) => b.score - a.score).map((s) => `
      <div class="gt-hm-row">
        <span class="gt-hm-lab">${esc(s.label)}</span>
        <span class="gt-hm-bar"><span class="gt-hm-fill" style="width:${s.score}%;background:${s.color}"></span></span>
        <span class="gt-hm-num">${s.score}</span>
      </div>`).join("");
    el.innerHTML = `
      <div class="gt-hm-score" data-reveal>
        <div class="gt-hm-big">${overall}<small>/100</small></div>
        <p>National Humanity Score — a live read on how people are <em>actually</em> doing: health, security, opportunity, environment, trust. The number every policy is ultimately judged against.</p>
        <a href="issues.html#humanity-first" class="btn btn--navy">How it's measured <span class="arrow">→</span></a>
      </div>
      <div class="gt-hm-bars" data-reveal>${bars}</div>`;
  })();

  /* ---------- States opt-in compact (interactive) ---------- */
  (function states() {
    const el = $("gtStates");
    if (!el) return;
    const ALL = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
    const joined = new Set(["CA","TX","NY","WA","CO","MI","PA","GA","AZ","NC","OH","MN","VA","OR","NV","UT","WI","NM"]);
    const head = $("gtStatesCount");
    const paint = () => { if (head) head.textContent = joined.size; };
    el.innerHTML = ALL.map((s) => `<button type="button" class="gt-state${joined.has(s) ? " on" : ""}" data-s="${s}">${s}</button>`).join("");
    paint();
    el.addEventListener("click", (e) => {
      const b = e.target.closest(".gt-state"); if (!b) return;
      const s = b.dataset.s;
      if (joined.has(s)) { joined.delete(s); b.classList.remove("on"); }
      else { joined.add(s); b.classList.add("on"); }
      paint();
    });
  })();

  /* ---------- What GovTracker would include ---------- */
  (function features() {
    const el = $("gtFeatures");
    if (!el) return;
    const F = [
      { i: "💵", h: "Every dollar, tracked", p: "Every federal contract, grant, and payment — searchable down to the line item." },
      { i: "🗳️", h: "Every vote & bill", p: "How your representatives voted, what bills do, in plain English." },
      { i: "📊", h: "Budget vs. actual", p: "Each agency's promised budget against what it really spent." },
      { i: "🔎", h: "Follow the money", p: "Lobbying and campaign cash, linked to the votes they shaped." },
      { i: "🧾", h: "Your tax receipt", p: "Exactly where your tax dollar went, personalized to you." },
      { i: "❤️", h: "The Humanity Score, live", p: "Are people actually better off? Updated every month, in the open." },
      { i: "🔌", h: "Open API & open source", p: "All of it free for journalists, researchers, and anyone to build on." },
      { i: "📜", h: "FOIA by default", p: "Public by default; secret only by narrow, justified exception." },
      { i: "⏱️", h: "Live debt & deficit clock", p: "The real numbers, ticking, for the whole country to watch." },
      { i: "🗣️", h: "Plain language", p: "No 600-page mysteries. If you can't explain it, you can't pass it." },
    ];
    el.innerHTML = F.map((f) => `
      <div class="gt-feat" data-reveal>
        <span class="gt-feat-i">${f.i}</span>
        <h4>${esc(f.h)}</h4>
        <p>${esc(f.p)}</p>
      </div>`).join("");
  })();

  // render the two budget flows
  flow("gtSpending", SPENDING, TOTAL_SPEND, "spend", "Total federal spending ");
  flow("gtRevenue", REVENUE, TOTAL_REV, "rev", "Total federal revenue ");

  /* ---------- reveal ---------- */
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (prefersReduced || !("IntersectionObserver" in window)) nodes.forEach((n) => n.classList.add("in"));
  else {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
    nodes.forEach((n) => io.observe(n));
  }
})();
