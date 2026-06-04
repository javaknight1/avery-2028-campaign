/* =========================================================
   Issues page — renders the platform from window.PLATFORM,
   grouped into Spending Policies and Revenue Policies.
   Sticky TOC + Q&A accordion + Humanity Score pie +
   a fixed slide-panel that highlights the current issue.
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const money = (b) => (b >= 1000 ? "$" + (b / 1000).toFixed(b % 1000 === 0 ? 0 : 2) + "T" : "$" + b + "B");

  // group every policy into one of the two buckets by its costType
  const bucket = (p) => (p.costType === "revenue" ? "revenue" : "spending");

  function costBadge(p) {
    if (p.costType === "revenue") return `<span class="cost-badge rev">+${money(p.cost)}/yr<small>revenue</small></span>`;
    if (p.costType === "neutral") return `<span class="cost-badge neutral">≈ $0<small>no net cost</small></span>`;
    return `<span class="cost-badge spend">${money(p.cost)}/yr<small>cost</small></span>`;
  }

  function aisleCol(cls, name, items) {
    const list = (items || []).map((it) =>
      `<li><p class="concern">${esc(it.c)}</p><p class="rebuttal"><b>Our answer:</b> ${esc(it.r)}</p></li>`).join("");
    return `<div class="aisle-col ${cls}"><h4>${name}</h4><ul class="concern-list">${list}</ul></div>`;
  }

  function policyHTML(p) {
    const plan = p.plan.map((x) => `<li><b>${esc(x.b)}</b> ${esc(x.t)}</li>`).join("");
    const detail = p.detail.map((x) => `<div class="detail"><h4>${esc(x.h)}</h4><p>${esc(x.p)}</p></div>`).join("");
    const qa = p.qa.map((x) =>
      `<div class="qa-item"><button class="qa-q" aria-expanded="false">${esc(x.q)} <span class="pm">+</span></button>
        <div class="qa-a"><div><p>${esc(x.a)}</p></div></div></div>`).join("");
    const humanity = p.component === "humanity" ? humanityBlock() : "";
    return `<section class="policy" id="${p.id}" data-cat="${bucket(p)}">
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
      <div class="humanity-top">
        <div class="humanity-chart">
          <svg id="humanityPie" viewBox="0 0 220 220" role="img" aria-label="Humanity Score composition"></svg>
          <div class="humanity-center"><span class="hc-val" id="hcVal">—</span><span class="hc-lbl" id="hcLbl">Humanity Score</span></div>
        </div>
        <div class="humanity-side">
          <p class="hs-asof" id="hsAsOf"></p>
          <p class="hs-headline" id="hsHeadline"></p>
          <div class="humanity-legend" id="humanityLegend"></div>
        </div>
      </div>
      <h4 class="hm-title">How the score is measured — the actual stats, and where they come from</h4>
      <div class="humanity-metrics" id="humanityMetrics"></div>
    </div>`;
  }

  /* ---- render policies, grouped into the two buckets ---- */
  const root = document.getElementById("issuesRoot");
  let html = "";
  P.categories.forEach((cat, i) => {
    const inCat = P.policies.filter((p) => bucket(p) === cat.id);
    html += `<div class="cat-header" id="cat-${cat.id}" data-cat="${cat.id}">
      <div class="container">
        <span class="cat-kicker" data-reveal>Part ${i + 1} of ${P.categories.length} · ${inCat.length} policies</span>
        <h2 class="cat-title" data-reveal>${esc(cat.name)}</h2>
        <p data-reveal>${esc(cat.blurb)}</p>
      </div></div>`;
    inCat.forEach((p) => { html += policyHTML(p); });
  });
  root.innerHTML = html;

  /* ---- sticky TOC ---- */
  const toc = document.getElementById("toc");
  toc.innerHTML = P.categories.map((c) =>
    `<a href="#cat-${c.id}" data-target="cat-${c.id}">${c.id === "revenue" ? "💰" : "🏛️"} ${esc(c.name)}</a>`).join("") +
    `<a class="toc-ext" href="budget.html">💸 The Budget &amp; Deficit →</a>`;

  /* ---- fixed slide panel (rail) that highlights the current issue ---- */
  buildRail();
  function buildRail() {
    const railItems = P.categories.map((cat) => {
      const links = P.policies.filter((p) => bucket(p) === cat.id).map((p) =>
        `<a href="#${p.id}" data-rail="${p.id}"><span class="ri-ic">${p.icon}</span><span class="ri-t">${esc(p.title)}</span></a>`).join("");
      return `<div class="rail-cat">${esc(cat.name)}</div>${links}`;
    }).join("");

    const wrap = document.createElement("div");
    wrap.innerHTML = `
      <button class="rail-fab" id="railFab" aria-expanded="false" aria-controls="issueRail">
        <span class="rf-ic">☰</span><span class="rf-label"><small>You're viewing</small><b id="railCurrent">The Issues</b></span>
      </button>
      <div class="rail-backdrop" id="railBackdrop" aria-hidden="true"></div>
      <aside class="issue-rail" id="issueRail" aria-label="Jump to an issue">
        <div class="rail-top"><strong>The Issues</strong><button class="rail-close" id="railClose" aria-label="Close panel">×</button></div>
        <nav class="rail-list" id="railList">${railItems}</nav>
      </aside>`;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

    const fab = document.getElementById("railFab");
    const rail = document.getElementById("issueRail");
    const backdrop = document.getElementById("railBackdrop");
    const close = document.getElementById("railClose");
    const list = document.getElementById("railList");

    const setOpen = (open) => {
      document.body.classList.toggle("rail-open", open);
      fab.setAttribute("aria-expanded", String(open));
    };
    fab.addEventListener("click", () => setOpen(!document.body.classList.contains("rail-open")));
    close.addEventListener("click", () => setOpen(false));
    backdrop.addEventListener("click", () => setOpen(false));
    list.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    // scroll-spy: highlight the policy currently in view (rail + fab label)
    const current = document.getElementById("railCurrent");
    const railLinks = new Map([...list.querySelectorAll("a")].map((a) => [a.dataset.rail, a]));
    const policies = [...document.querySelectorAll(".policy[id]")];
    if ("IntersectionObserver" in window && policies.length) {
      let activeId = null;
      const spy = new IntersectionObserver((entries) => {
        // choose the entry nearest the top of the viewport that is intersecting
        const vis = entries.filter((e) => e.isIntersecting);
        if (!vis.length) return;
        vis.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = vis[0].target.id;
        if (id === activeId) return;
        activeId = id;
        railLinks.forEach((a) => a.classList.remove("active"));
        const a = railLinks.get(id);
        const pol = P.policies.find((p) => p.id === id);
        if (a) { a.classList.add("active"); a.scrollIntoView({ block: "nearest" }); }
        if (pol && current) current.textContent = pol.title;
      }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
      policies.forEach((s) => spy.observe(s));
    }
  }

  /* ---- Q&A accordion (delegated) ---- */
  root.addEventListener("click", (e) => {
    const q = e.target.closest(".qa-q");
    if (!q) return;
    const item = q.closest(".qa-item");
    const open = item.classList.toggle("open");
    q.setAttribute("aria-expanded", String(open));
  });

  /* ---- reveal newly-injected nodes ---- */
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

  /* ---- TOC scroll-spy (category level) ---- */
  const tocLinks = [...toc.querySelectorAll("a[data-target]")];
  const tmap = new Map(tocLinks.map((a) => [a.dataset.target, a]));
  const cats = [...document.querySelectorAll(".cat-header[id]")];
  if ("IntersectionObserver" in window && cats.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.remove("active"));
        const a = tmap.get(en.target.id);
        if (a) a.classList.add("active");
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    cats.forEach((s) => spy.observe(s));
  }

  /* ---- Humanity Score donut ---- */
  drawHumanityPie();

  /* ---- deep-link scroll (content is injected after load) ---- */
  if (location.hash && location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => requestAnimationFrame(() => target.scrollIntoView()));
  }

  function gradeFor(score) {
    if (score >= 80) return { word: "Thriving", cls: "g-good" };
    if (score >= 65) return { word: "Doing OK", cls: "g-ok" };
    if (score >= 50) return { word: "Struggling", cls: "g-mid" };
    return { word: "In trouble", cls: "g-bad" };
  }

  function drawHumanityPie() {
    const svg = document.getElementById("humanityPie");
    const legend = document.getElementById("humanityLegend");
    if (!svg || !P.humanityScore) return;
    const slices = P.humanityScore.slices;

    const overall = Math.round(slices.reduce((s, x) => s + x.value * x.score, 0) / 100);
    const grade = gradeFor(overall);

    const cx = 110, cy = 110, r = 78, sw = 36;
    const C = 2 * Math.PI * r;
    let offset = 0, circles = "";
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

    const hcVal = document.getElementById("hcVal");
    const hcLbl = document.getElementById("hcLbl");
    hcVal.innerHTML = `${overall}<small>/100</small>`;
    hcLbl.textContent = "Humanity Score";

    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const asOf = document.getElementById("hsAsOf");
    const headline = document.getElementById("hsHeadline");
    if (asOf) asOf.innerHTML = `As of <strong>${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}</strong> · <span class="hs-grade ${grade.cls}">${grade.word}</span>`;
    if (headline) headline.innerHTML = `GDP says the country is winning. The Humanity Score — <strong>${overall} out of 100</strong> — says most Americans are treading water. Hover a slice for the metrics behind it; the full sourcing is in the table below.`;

    const prefers = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sliceEls = [...svg.querySelectorAll(".pie-slice")];
    const paint = () => sliceEls.forEach((el) => { el.style.strokeDasharray = `${el.dataset.arc} ${(C - el.dataset.arc).toFixed(2)}`; });
    if (prefers) paint();
    else {
      let started = false;
      const trigger = () => { if (started) return; started = true; requestAnimationFrame(() => requestAnimationFrame(paint)); };
      if ("IntersectionObserver" in window) {
        const o = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { trigger(); o.disconnect(); } }), { threshold: 0.3 });
        o.observe(svg);
      } else trigger();
    }

    legend.innerHTML = slices.map((s, i) =>
      `<button class="leg-item" data-i="${i}">
        <span class="leg-dot" style="background:${s.color}"></span>
        <span class="leg-label">${esc(s.label)}</span>
        <span class="leg-weight">${s.value}%</span>
        <span class="leg-bar"><span class="leg-fill" style="width:${s.score}%;background:${s.color}"></span></span>
      </button>`).join("");

    const focus = (i) => {
      sliceEls.forEach((el, j) => el.classList.toggle("dim", i != null && j !== i));
      legend.querySelectorAll(".leg-item").forEach((el, j) => el.classList.toggle("on", i != null && j === i));
      if (i == null) { hcVal.innerHTML = `${overall}<small>/100</small>`; hcLbl.textContent = "Humanity Score"; }
      else { hcVal.innerHTML = `${slices[i].score}<small>/100</small>`; hcLbl.textContent = slices[i].label; }
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

    const mEl = document.getElementById("humanityMetrics");
    if (mEl) {
      mEl.innerHTML = `<table class="hm-table">
        <thead><tr><th>Dimension</th><th class="hm-num">Weight</th><th class="hm-num">Now</th><th>What we measure — current value (source)</th></tr></thead>
        <tbody>${slices.map((s) => `<tr>
          <td class="hm-dim"><span class="hm-dot" style="background:${s.color}"></span>${esc(s.label)}</td>
          <td class="hm-num">${s.value}%</td>
          <td class="hm-num"><span class="hm-score">${s.score}</span></td>
          <td><ul class="hm-metrics">${s.metrics.map((m) =>
            `<li><b>${esc(m.name)}</b> — ${esc(m.value)} <span class="hm-src">${esc(m.source)}</span></li>`).join("")}</ul></td>
        </tr>`).join("")}</tbody>
      </table>
      <p class="hm-note">Weights set how much each dimension counts toward the score; the “Now” column is America's current standing on that dimension (0–100), and the overall score is their weighted average. Figures are recent, rounded, and illustrative — sourced from the agencies named, and published transparently so anyone can audit the math.</p>`;
    }
  }
})();
