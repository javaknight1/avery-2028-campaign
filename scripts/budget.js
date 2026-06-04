/* =========================================================
   The Budget page — spending vs. revenue, the surplus, and
   how the surplus tackles the national deficit.
   Renders from window.PLATFORM (data/policies.js).
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

  /* ---- the revenue plan (no UBI, no VAT) ---- */
  const FUNDING = [
    { label: "Tax the ultra-rich — wealth tax, top rates, loopholes", amt: 500, id: "tax-rich" },
    { label: "Higher top income-tax rates on incomes over $400k", amt: 500 },
    { label: "Corporate tax reform & global minimum tax", amt: 450 },
    { label: "Close the tax gap — fund IRS enforcement", amt: 400 },
    { label: "Health savings recaptured — lower total U.S. health spending", amt: 700 },
    { label: "Carbon fee on big polluters", amt: 200 },
    { label: "The AI tax", amt: 150, id: "ai-tax" },
    { label: "The financial-transaction tax", amt: 80, id: "ftt" },
    { label: "Economic growth — a wider tax base from a healthier, trained, housed workforce", amt: 400 },
  ];
  const TOTAL_REVENUE = FUNDING.reduce((s, f) => s + f.amt, 0);
  const TOTAL_SPEND = P.policies.filter((p) => p.costType === "spend").reduce((s, p) => s + p.cost, 0);
  const SURPLUS = TOTAL_REVENUE - TOTAL_SPEND;
  const DEFICIT_TODAY = 1800; // illustrative current annual federal deficit ($B)
  const DEBT_TODAY = 36;      // illustrative national debt ($T)
  const link = (id, label) => (id ? `<a href="issues.html#${id}">${label}</a>` : label);

  /* ---- split tables + the math ---- */
  (function renderSummary() {
    const el = document.getElementById("budgetSummary");
    if (!el) return;
    const benefitRows = P.policies.filter((p) => p.costType !== "revenue").map((p) =>
      `<tr><td class="sum-policy">${link(p.id, `<span class="sum-ic">${p.icon}</span> ${esc(p.title)}`)}</td>
        <td class="sum-cost">${costShort(p)}</td></tr>`).join("");
    const taxRows = FUNDING.map((f) =>
      `<tr><td class="sum-policy">${link(f.id, esc(f.label))}</td>
        <td class="sum-cost"><span class="revenue">+${money(f.amt)}</span></td></tr>`).join("");
    const scaleMax = Math.max(TOTAL_SPEND, TOTAL_REVENUE);

    el.innerHTML = `
      <div class="center" style="max-width:760px">
        <span class="eyebrow" data-reveal>How it adds up</span>
        <h2 class="section-title" data-reveal>Spending on the left. Revenue on the right.</h2>
        <p class="section-lead" data-reveal>Every benefit we'd fund, and every dollar that funds it. The headline: we raise spending — and we raise <em>more than that</em> in revenue, so the plan runs a surplus instead of a deficit.</p>
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

  /* ---- the deficit ---- */
  (function renderDeficit() {
    const el = document.getElementById("budgetDeficit");
    if (!el) return;
    const afterYr1 = DEFICIT_TODAY - SURPLUS;
    const scaleD = Math.max(DEFICIT_TODAY, SURPLUS, 1);
    const fundRows = FUNDING.map((f) =>
      `<tr><td>${link(f.id, esc(f.label))}</td><td class="num rev">+${money(f.amt)}</td></tr>`).join("");
    // how long to clear the whole debt at a steady surplus
    const payoffYears = Math.round((DEBT_TODAY * 1000) / SURPLUS);
    const targetYear = new Date().getFullYear() + payoffYears;

    el.innerHTML = `
      <div class="center" style="max-width:760px">
        <span class="eyebrow" data-reveal>The hard part, head-on</span>
        <h2 class="section-title" data-reveal>The deficit — and how we solve it</h2>
        <p class="section-lead" data-reveal>Washington already runs a deficit of about <strong>$${(DEFICIT_TODAY / 1000).toFixed(1)} trillion a year</strong> on top of a <strong>$${DEBT_TODAY} trillion</strong> national debt. Bolting on a big agenda without paying for it would make that worse. So we don't — our plan raises more than it spends, and the surplus goes to work on the debt.</p>
      </div>
      <div class="deficit-steps" data-reveal>
        <div class="dstep"><span class="dnum">1</span><div><h4>Fully fund the agenda — with room to spare</h4><p>New revenue (<strong>${money(TOTAL_REVENUE)}</strong>) beats new spending (<strong>${money(TOTAL_SPEND)}</strong>), so the platform itself runs a <strong>+${money(SURPLUS)}/yr surplus</strong> instead of adding a dollar of new debt.</p></div></div>
        <div class="dstep"><span class="dnum">2</span><div><h4>Dedicate that surplus to the deficit</h4><p>The +${money(SURPLUS)}/yr goes straight at today's ~$${(DEFICIT_TODAY / 1000).toFixed(1)}T deficit — cutting it by roughly a third in year one.</p></div></div>
        <div class="dstep"><span class="dnum">3</span><div><h4>Close the rest with growth &amp; lower costs</h4><p>A healthier, better-educated, better-housed workforce widens the tax base; universal healthcare bends the biggest long-term cost curve down; and collecting the tax gap brings in what's already owed — together putting the budget on a path to <strong>balance within a decade</strong>.</p></div></div>
        <div class="dstep"><span class="dnum">4</span><div><h4>Then pay the debt down</h4><p>Once balanced, the same surplus pays down principal instead of interest, and a growing economy shrinks the debt as a share of GDP, year after year.</p></div></div>
      </div>
      <div class="deficit-vis" data-reveal>
        <div class="dv-row"><i>Deficit today</i><span class="track"><span class="fill bad" style="width:${(DEFICIT_TODAY / scaleD * 100).toFixed(1)}%"></span></span><b>$${(DEFICIT_TODAY / 1000).toFixed(1)}T</b></div>
        <div class="dv-row"><i>Our surplus, applied</i><span class="track"><span class="fill good" style="width:${(SURPLUS / scaleD * 100).toFixed(1)}%"></span></span><b>+${money(SURPLUS)}</b></div>
        <div class="dv-row"><i>Remaining (year 1)</i><span class="track"><span class="fill mid" style="width:${(afterYr1 / scaleD * 100).toFixed(1)}%"></span></span><b>$${(afterYr1 / 1000).toFixed(1)}T</b></div>
        <div class="dv-note">…then closed over roughly a decade by growth, healthcare savings, and collecting the tax gap — after which surpluses pay the $${DEBT_TODAY}T debt down.</div>
      </div>

      <div class="debt-clear" data-reveal>
        <div class="dc-num">≈&nbsp;${payoffYears}<small>years</small></div>
        <div class="dc-body">
          <h4>So how long until the entire debt is paid off?</h4>
          <p>If the budget never changed and we simply put the <strong>+${money(SURPLUS)}/yr surplus</strong> toward the principal, the whole <strong>$${DEBT_TODAY} trillion</strong> national debt would be cleared in about <strong>${payoffYears} years</strong> — debt-free by roughly <strong>${targetYear}</strong>.</p>
          <p class="dc-math">$${DEBT_TODAY}T&nbsp;÷&nbsp;${money(SURPLUS)}/yr&nbsp;≈&nbsp;${payoffYears}&nbsp;years</p>
          <p class="dc-note">A deliberately simple figure: it holds the surplus steady and ignores interest and growth. In reality we balance the budget first (steps above), and as the economy grows the surplus rises — so the real payoff comes sooner. The point stands: this is a plan that pays the debt <em>down</em>, not up.</p>
        </div>
      </div>

      <details class="method" data-reveal>
        <summary>The full revenue plan, line by line</summary>
        <table class="budget-table" style="margin-top:12px"><thead><tr><th>Funding source</th><th class="num">Revenue / yr</th></tr></thead>
          <tbody>${fundRows}</tbody>
          <tfoot>
            <tr><td>Total new revenue</td><td class="num rev">+${money(TOTAL_REVENUE)}</td></tr>
            <tr><td>Less: total new spending</td><td class="num">−${money(TOTAL_SPEND)}</td></tr>
            <tr><td><strong>Annual surplus to the deficit</strong></td><td class="num rev"><strong>+${money(SURPLUS)}</strong></td></tr>
          </tfoot>
        </table>
        <p style="color:var(--muted);font-size:0.9rem;margin-top:12px">All figures are simplified, rounded, illustrative estimates for education — not official budget scores. We'd publish detailed, independently-scored costings for every line, and phase the agenda in as the revenue comes online.</p>
      </details>`;
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
