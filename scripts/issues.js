/* =========================================================
   Issues page — renders the full platform from window.PLATFORM
   Sections + sticky TOC + Q&A accordion + scroll-spy
   + Humanity Score pie chart + The Honest Budget.
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);

  /* ---- cost formatting ---- */
  const money = (b) => (b >= 1000 ? "$" + (b / 1000).toFixed(b % 1000 === 0 ? 0 : 2) + "T" : "$" + b + "B");
  function costBadge(p) {
    if (p.costType === "revenue") return `<span class="cost-badge rev">+${money(p.cost)}/yr<small>revenue</small></span>`;
    if (p.costType === "neutral") return `<span class="cost-badge neutral">≈ $0<small>no net cost</small></span>`;
    return `<span class="cost-badge spend">${money(p.cost)}/yr<small>cost</small></span>`;
  }
  function costShort(p) {
    if (p.costType === "revenue") return `<span class="revenue">+${money(p.cost)}</span>`;
    if (p.costType === "neutral") return `<span class="neutral">≈ $0</span>`;
    return `<span class="spend">${money(p.cost)}</span>`;
  }

  /* ---- one party's concerns + rebuttals ---- */
  function aisleCol(cls, name, items) {
    const list = (items || []).map((it) =>
      `<li><p class="concern">${esc(it.c)}</p><p class="rebuttal"><b>Our answer:</b> ${esc(it.r)}</p></li>`).join("");
    return `<div class="aisle-col ${cls}"><h4>${name}</h4><ul class="concern-list">${list}</ul></div>`;
  }

  /* ---- render one policy ---- */
  function policyHTML(p) {
    const plan = p.plan.map((x) => `<li><b>${esc(x.b)}</b> ${esc(x.t)}</li>`).join("");
    const detail = p.detail.map((x) => `<div class="detail"><h4>${esc(x.h)}</h4><p>${esc(x.p)}</p></div>`).join("");
    const qa = p.qa.map((x) =>
      `<div class="qa-item"><button class="qa-q" aria-expanded="false">${esc(x.q)} <span class="pm">+</span></button>
        <div class="qa-a"><div><p>${esc(x.a)}</p></div></div></div>`).join("");
    const humanity = p.component === "humanity" ? humanityBlock() : "";
    return `<section class="policy" id="${p.id}" data-cat="${p.cat}">
      <div class="container">
        <div class="policy-head" data-reveal>
          <span class="policy-icon">${p.icon}</span>
          <div class="policy-headings"><h2>${esc(p.title)}</h2><p class="tagline">${esc(p.tagline)}</p></div>
          ${costBadge(p)}
        </div>
        <p class="policy-lead" data-reveal>${esc(p.lead)}</p>
        ${humanity}
        <div class="policy-block" data-reveal><h3>The Plan</h3><ul class="plan-list">${plan}</ul></div>
        <div class="policy-block" data-reveal><h3>How it works</h3><div class="detail-grid">${detail}</div></div>
        <div class="policy-block" data-reveal><h3>Common questions &amp; concerns</h3><div class="qa">${qa}</div></div>
        <div class="policy-block" data-reveal><h3>Across the aisle</h3>
          <p class="aisle-intro">The most common concerns from each side — and our honest answer to each.</p>
          <div class="aisle">
            ${aisleCol("rep", "Republicans", p.aisle.rep)}
            ${aisleCol("dem", "Democrats", p.aisle.dem)}
            ${aisleCol("ind", "Independents", p.aisle.ind)}
          </div>
          <div class="aisle-response"><h4>Rob's take</h4><p>${esc(p.aisle.response)}</p></div>
        </div>
      </div>
    </section>`;
  }

  function humanityBlock() {
    return `<div class="humanity-wrap" data-reveal>
      <div class="humanity-chart">
        <svg id="humanityPie" viewBox="0 0 220 220" role="img" aria-label="Humanity Score composition"></svg>
        <div class="humanity-center"><span class="hc-val" id="hcVal">Humanity</span><span class="hc-lbl" id="hcLbl">Score</span></div>
      </div>
      <div class="humanity-legend" id="humanityLegend"></div>
    </div>`;
  }

  /* ---- render everything ---- */
  const root = document.getElementById("issuesRoot");
  let html = "";
  P.categories.forEach((cat, i) => {
    html += `<div class="cat-header" id="cat-${cat.id}" data-cat="${cat.id}">
      <div class="container">
        <span class="cat-kicker" data-reveal>Section ${i + 1} of ${P.categories.length}</span>
        <h2 class="cat-title" data-reveal>${esc(cat.name)}</h2>
        <p data-reveal>${esc(cat.blurb)}</p>
      </div></div>`;
    P.policies.filter((p) => p.cat === cat.id).forEach((p) => { html += policyHTML(p); });
  });
  root.innerHTML = html;

  /* ---- Summary table (all policies at a glance) ---- */
  renderSummary();
  function renderSummary() {
    const el = document.getElementById("summaryRoot");
    if (!el) return;
    const catName = Object.fromEntries(P.categories.map((c) => [c.id, c.name]));
    const rows = P.policies.map((p) =>
      `<tr>
        <td class="sum-policy"><a href="#${p.id}"><span class="sum-ic">${p.icon}</span> ${esc(p.title)}</a>
          <span class="sum-tag">${esc(p.tagline)}</span></td>
        <td class="sum-cat">${esc(catName[p.cat])}</td>
        <td class="sum-cost">${costShort(p)}</td>
      </tr>`).join("");
    el.innerHTML = `
      <div class="center" style="max-width:700px">
        <span class="eyebrow" data-reveal>At a glance</span>
        <h2 class="section-title" data-reveal>The whole platform, on one page</h2>
        <p class="section-lead" data-reveal>${P.policies.length} policies, each with a transparent price tag. Click any row to jump to the full plan, the questions, and where each party stands.</p>
      </div>
      <div class="summary-wrap" data-reveal>
        <table class="summary-table">
          <thead><tr><th>Policy</th><th>Section</th><th class="sum-cost">Cost / yr</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  /* ---- TOC ---- */
  const toc = document.getElementById("toc");
  toc.innerHTML = `<a href="#summary" data-target="summary">📋 Summary</a>` +
    P.categories.map((c) =>
      `<a href="#cat-${c.id}" data-target="cat-${c.id}">${esc(c.name)}</a>`).join("") +
    `<a href="#budget" data-target="budget">💸 The Budget</a>`;

  /* ---- Humanity pie ---- */
  drawHumanityPie();

  /* ---- Budget ---- */
  renderBudget();

  /* ---- deep-link scroll: content is injected after load, so honor #hash now ---- */
  if (location.hash && location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => requestAnimationFrame(() => target.scrollIntoView()));
  }

  /* ---- Q&A accordion (delegated) ---- */
  root.addEventListener("click", (e) => {
    const q = e.target.closest(".qa-q");
    if (!q) return;
    const item = q.closest(".qa-item");
    const open = item.classList.toggle("open");
    q.setAttribute("aria-expanded", String(open));
  });

  /* ---- reveal (re-observe newly injected nodes) ---- */
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = [...document.querySelectorAll("[data-reveal]:not(.in)")];
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
    reveals.forEach((el) => io.observe(el));
  }

  /* ---- TOC scroll-spy ---- */
  const tocLinks = [...toc.querySelectorAll("a")];
  const map = new Map(tocLinks.map((a) => [a.dataset.target, a]));
  const anchors = [...document.querySelectorAll("#summary, .cat-header[id], #budget")];
  if ("IntersectionObserver" in window && anchors.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.remove("active"));
        const a = map.get(en.target.id);
        if (a) { a.classList.add("active"); a.scrollIntoView({ block: "nearest", inline: "nearest" }); }
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    anchors.forEach((s) => spy.observe(s));
  }

  /* =======================================================
     Humanity Score donut
     ======================================================= */
  function drawHumanityPie() {
    const svg = document.getElementById("humanityPie");
    const legend = document.getElementById("humanityLegend");
    if (!svg || !P.humanityScore) return;
    const slices = P.humanityScore.slices;
    const cx = 110, cy = 110, r = 78, sw = 36;
    const C = 2 * Math.PI * r;
    let offset = 0;
    let circles = "";
    slices.forEach((s, i) => {
      const arc = (s.value / 100) * C;
      circles += `<circle class="pie-slice" data-i="${i}" cx="${cx}" cy="${cy}" r="${r}" fill="none"
        stroke="${s.color}" stroke-width="${sw}"
        stroke-dasharray="0 ${C.toFixed(2)}" data-arc="${arc.toFixed(2)}"
        stroke-dashoffset="${(-offset).toFixed(2)}"
        transform="rotate(-90 ${cx} ${cy})"/>`;
      offset += arc;
    });
    svg.innerHTML = circles;

    // animate draw-in
    const prefers = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sliceEls = [...svg.querySelectorAll(".pie-slice")];
    const paint = () => sliceEls.forEach((el) => {
      const arc = el.dataset.arc;
      el.style.strokeDasharray = `${arc} ${(C - arc).toFixed(2)}`;
    });
    if (prefers) paint();
    else {
      let started = false;
      const trigger = () => { if (started) return; started = true; requestAnimationFrame(() => requestAnimationFrame(paint)); };
      if ("IntersectionObserver" in window) {
        const o = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { trigger(); o.disconnect(); } }), { threshold: 0.3 });
        o.observe(svg);
      } else trigger();
    }

    // legend
    legend.innerHTML = slices.map((s, i) =>
      `<button class="leg-item" data-i="${i}">
        <span class="leg-dot" style="background:${s.color}"></span>
        <span class="leg-label">${esc(s.label)}</span>
        <span class="leg-val">${s.value}%</span>
        <span class="leg-note">${esc(s.note)}</span>
      </button>`).join("");

    const hcVal = document.getElementById("hcVal");
    const hcLbl = document.getElementById("hcLbl");
    const focus = (i) => {
      sliceEls.forEach((el, j) => el.classList.toggle("dim", i != null && j !== i));
      legend.querySelectorAll(".leg-item").forEach((el, j) => el.classList.toggle("on", i != null && j === i));
      if (i == null) { hcVal.textContent = "Humanity"; hcLbl.textContent = "Score"; }
      else { hcVal.textContent = slices[i].value + "%"; hcLbl.textContent = slices[i].label; }
    };
    const wire = (el) => {
      const i = Number(el.dataset.i);
      el.addEventListener("mouseenter", () => focus(i));
      el.addEventListener("focus", () => focus(i));
      el.addEventListener("mouseleave", () => focus(null));
      el.addEventListener("blur", () => focus(null));
    };
    sliceEls.forEach(wire);
    legend.querySelectorAll(".leg-item").forEach(wire);
  }

  /* =======================================================
     The Honest Budget
     ======================================================= */
  function renderBudget() {
    const el = document.getElementById("budgetRoot");
    if (!el) return;

    const spendPolicies = P.policies.filter((p) => p.costType === "spend").sort((a, b) => b.cost - a.cost);
    const totalSpend = spendPolicies.reduce((s, p) => s + p.cost, 0);

    // Identified funding (the three tax planks + additional honest levers).
    const FUNDING = [
      { label: "A broad-based Value-Added Tax (10%) — funds the dividend", amt: 1300 },
      { label: "Tax the ultra-rich (wealth tax + top rates + loopholes)", amt: 500 },
      { label: "Corporate tax reform & loophole closure", amt: 250 },
      { label: "The AI tax", amt: 150 },
      { label: "Carbon fee on big polluters", amt: 150 },
      { label: "Health savings recaptured (lower total U.S. health spending)", amt: 600 },
      { label: "The financial-transaction tax", amt: 80 },
    ];
    const totalFunding = FUNDING.reduce((s, f) => s + f.amt, 0);
    const gap = Math.max(0, totalSpend - totalFunding);
    const scaleMax = Math.max(totalSpend, totalFunding);

    const rows = spendPolicies.map((p) =>
      `<tr><td>${p.icon} ${esc(p.title)}</td><td class="num">${money(p.cost)}</td>
        <td class="note">${esc(p.costNote)}</td></tr>`).join("");
    const fundRows = FUNDING.map((f) =>
      `<tr><td>${esc(f.label)}</td><td class="num rev">+${money(f.amt)}</td></tr>`).join("");

    el.innerHTML = `
      <div class="center" style="max-width:720px">
        <span class="eyebrow" data-reveal>Total Transparency</span>
        <h2 class="section-title" data-reveal>The Honest Budget</h2>
        <p class="section-lead" data-reveal>We won't pretend any of this is free. Here is the full price of every plank, what we've found to pay for it, and the gap we'd close through phase-in, growth, and the money you already spend that this replaces. Most campaigns hide this page. We lead with it.</p>
      </div>

      <div class="budget-score" data-reveal>
        <div class="bscore-row"><i>Full annual cost of every plank</i>
          <span class="track"><span class="fill spend" style="width:${(totalSpend / scaleMax * 100).toFixed(1)}%"></span></span>
          <b>${money(totalSpend)}</b></div>
        <div class="bscore-row"><i>Funding we've identified</i>
          <span class="track"><span class="fill rev" style="width:${(totalFunding / scaleMax * 100).toFixed(1)}%"></span></span>
          <b>${money(totalFunding)}</b></div>
        <div class="bscore-gap">Gap to close through phase-in, growth & savings: <b>${money(gap)}/yr</b></div>
      </div>

      <div class="budget-tables">
        <div class="budget-card" data-reveal>
          <h3>What it costs</h3>
          <table class="budget-table"><thead><tr><th>Policy</th><th class="num">Cost / yr</th><th>Transparency note</th></tr></thead>
            <tbody>${rows}</tbody>
            <tfoot><tr><td>Total new spending</td><td class="num">${money(totalSpend)}</td><td class="note">at full scale</td></tr></tfoot>
          </table>
          <p class="budget-foot">Planks marked “≈ $0” elsewhere — term limits, the $15 wage, worker power, Social Security (self-funded by lifting the payroll cap) — add no net federal cost and aren't listed here.</p>
        </div>

        <div class="budget-card" data-reveal>
          <h3>How we pay for it</h3>
          <table class="budget-table"><thead><tr><th>Funding source</th><th class="num">Revenue / yr</th></tr></thead>
            <tbody>${fundRows}</tbody>
            <tfoot><tr><td>Total identified funding</td><td class="num rev">+${money(totalFunding)}</td></tr></tfoot>
          </table>
          <p class="budget-foot"><strong>The honest part:</strong> at full scale this platform still runs a gap. We close it by phasing planks in over multiple terms, by counting the premiums and benefits people already pay that universal healthcare and the dividend replace, and through the growth a healthier, better-educated, better-housed country produces. Want to try? <a href="tax-lab.html">Build the income-tax piece yourself in the Tax Lab →</a></p>
        </div>
      </div>

      <p class="budget-disclaimer" data-reveal>All figures are simplified, rounded, illustrative estimates for education — not official budget scores. Big numbers hide big assumptions; we'd publish detailed, independently-scored costings for every plank.</p>`;
  }
})();
