/* =========================================================
   The Budget page — spending vs. revenue, the surplus, and
   how the surplus tackles the national deficit & debt.
   Reads window.PLATFORM (policies + funding + fiscal).
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const money = (b) => (b >= 1000 ? "$" + (b / 1000).toFixed(b % 1000 === 0 ? 0 : 2) + "T" : "$" + b + "B");
  const costShort = (p) =>
    p.costType === "revenue" ? `<span class="revenue">+${money(p.cost)}</span>`
      : p.costType === "neutral" ? `<span class="neutral">≈ $0</span>`
        : `<span class="spend">${money(p.cost)}</span>`;
  // a funding line: emoji + (link to its policy)
  const fline = (f) => `${f.icon ? f.icon + " " : ""}${f.id ? `<a href="issues.html#${f.id}">${esc(f.label)}</a>` : esc(f.label)}`;

  const FUNDING = P.funding;
  const TOTAL_REVENUE = FUNDING.reduce((s, f) => s + f.amt, 0);
  const TOTAL_SPEND = P.policies.filter((p) => p.costType === "spend").reduce((s, p) => s + p.cost, 0);
  const SURPLUS = TOTAL_REVENUE - TOTAL_SPEND;
  const DEFICIT_TODAY = P.fiscal.deficitToday;   // $B
  const DEBT_TODAY = P.fiscal.debtToday;         // $B
  const RATE = P.fiscal.interestRate;            // e.g. 0.03

  /* ---- split tables + the math ---- */
  (function renderSummary() {
    const el = document.getElementById("budgetSummary");
    if (!el) return;
    const benefitRows = P.policies.filter((p) => p.costType !== "revenue").map((p) =>
      `<tr><td class="sum-policy"><a href="issues.html#${p.id}"><span class="sum-ic">${p.icon}</span> ${esc(p.title)}</a></td>
        <td class="sum-cost">${costShort(p)}</td></tr>`).join("");
    const taxRows = FUNDING.map((f) =>
      `<tr><td class="sum-policy">${fline(f)}</td>
        <td class="sum-cost"><span class="revenue">+${money(f.amt)}</span></td></tr>`).join("");
    const scaleMax = Math.max(TOTAL_SPEND, TOTAL_REVENUE);

    el.innerHTML = `
      <div class="center" style="max-width:760px">
        <span class="eyebrow" data-reveal>How it adds up</span>
        <h2 class="section-title" data-reveal>Spending on the left. Revenue on the right.</h2>
        <p class="section-lead" data-reveal>Every benefit we'd fund, and every dollar that funds it — each revenue line links to the policy behind it. The headline: we raise <em>more than we spend</em>, so the plan runs a surplus instead of a deficit.</p>
      </div>
      <div class="split-tables" data-reveal>
        <div class="summary-wrap">
          <table class="summary-table">
            <thead><tr><th>Spending policies — what we invest in</th><th class="sum-cost">Cost / yr</th></tr></thead>
            <tbody>${benefitRows}</tbody>
            <tfoot><tr><td>Total new spending</td><td class="sum-cost"><span class="spend">${money(TOTAL_SPEND)}</span></td></tr></tfoot>
          </table>
        </div>
        <div class="summary-wrap">
          <table class="summary-table">
            <thead><tr><th>Revenue policies — how we pay</th><th class="sum-cost">Revenue / yr</th></tr></thead>
            <tbody>${taxRows}</tbody>
            <tfoot><tr><td>Total new revenue</td><td class="sum-cost"><span class="revenue">+${money(TOTAL_REVENUE)}</span></td></tr></tfoot>
          </table>
        </div>
      </div>
      <div class="math-summary" data-reveal>
        <div class="ms-row"><i>We spend</i><span class="track"><span class="fill spend" style="width:${(TOTAL_SPEND / scaleMax * 100).toFixed(1)}%"></span></span><b>${money(TOTAL_SPEND)}</b></div>
        <div class="ms-row"><i>We raise</i><span class="track"><span class="fill rev" style="width:${(TOTAL_REVENUE / scaleMax * 100).toFixed(1)}%"></span></span><b>${money(TOTAL_REVENUE)}</b></div>
        <div class="ms-surplus">Income beats spending by <b>+${money(SURPLUS)} / yr</b> — a surplus we put straight toward the national deficit.</div>
      </div>`;
  })();

  /* ---- the full revenue plan + a pointer to the Deficit page ---- */
  (function renderPlan() {
    const el = document.getElementById("budgetDeficit");
    if (!el) return;
    const fundRows = FUNDING.map((f) => `<tr><td>${fline(f)}</td><td class="num rev">+${money(f.amt)}</td></tr>`).join("");
    el.innerHTML = `
      <details class="method" data-reveal open>
        <summary>The full revenue plan, line by line</summary>
        <table class="budget-table" style="margin-top:12px"><thead><tr><th>Funding source</th><th class="num">Revenue / yr</th></tr></thead>
          <tbody>${fundRows}</tbody>
          <tfoot>
            <tr><td>Total new revenue</td><td class="num rev">+${money(TOTAL_REVENUE)}</td></tr>
            <tr><td>Less: total new spending</td><td class="num">−${money(TOTAL_SPEND)}</td></tr>
            <tr><td><strong>Annual surplus to the deficit</strong></td><td class="num rev"><strong>+${money(SURPLUS)}</strong></td></tr>
          </tfoot>
        </table>
        <p style="color:var(--muted);font-size:0.9rem;margin-top:12px">All figures are simplified, rounded, illustrative estimates for education — not official budget scores.</p>
      </details>
      <div class="center" style="margin-top:30px">
        <p class="section-lead" data-reveal style="margin-inline:auto">That <strong>+${money(SURPLUS)}/yr surplus</strong> goes straight at the national debt. See exactly how fast it pays off — with an interest-aware burndown chart and amortization table.</p>
        <a href="deficit.html" class="btn btn--navy btn--lg" data-reveal>The Deficit &amp; Debt <span class="arrow">→</span></a>
      </div>`;
  })();

  /* ---- reveal injected nodes ---- */
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = [...document.querySelectorAll("[data-reveal]:not(.in)")];
  if (prefersReduced || !("IntersectionObserver" in window)) reveals.forEach((el) => el.classList.add("in"));
  else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
    reveals.forEach((el) => io.observe(el));
  }
})();
