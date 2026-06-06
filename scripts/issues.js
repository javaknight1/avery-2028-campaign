/* =========================================================
   Issues page — renders the platform from window.PLATFORM.
   Two top categories (Spending / Revenue), each with the
   original thematic subsections under it. An always-visible
   lightweight TOC sidebar highlights the current issue
   (and becomes a drawer on small screens).
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const money = (b) => (b >= 1000 ? "$" + (b / 1000).toFixed(b % 1000 === 0 ? 0 : 2) + "T" : "$" + b + "B");
  const bucket = (p) => (p.costType === "revenue" ? "revenue" : "spending");
  const THEMES = P.themes || [{ id: "care", name: "Care" }];

  const LINK_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l2-2a5 5 0 0 0-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.07 0l-2 2a5 5 0 0 0 7.07 7.07l1.5-1.5"/></svg>`;
  const CHECK_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
  const miniDots = (n) => `<span class="sc-dots tdots" aria-hidden="true">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;
  const costCell = (p) => p.costType === "neutral" ? { t: "≈ $0", c: "neutral" }
    : (p.costType === "revenue" ? { t: "+" + money(p.cost), c: "rev" } : { t: money(p.cost), c: "spend" });

  const CAB = {}; (P.cabinet || []).forEach((c) => { CAB[c.key] = c; });
  const ROUTES = {
    congress: { label: "Act of Congress", needs: ["A majority in the House of Representatives", "60 votes in the Senate to overcome a filibuster", "The President's signature"] },
    reconciliation: { label: "Act of Congress · budget reconciliation", needs: ["A simple majority in the House", "51 votes in the Senate — tax & spending can move through reconciliation, dodging the filibuster", "The President's signature"] },
    amendment: { label: "Constitutional amendment", needs: ["Two-thirds of the House", "Two-thirds of the Senate", "Ratified by 38 of the 50 states"] },
    executive: { label: "Executive action", needs: ["A presidential executive order or directive — possible on Day One", "Agency rulemaking to carry it out", "No Congress required, though Congress can later codify it"] },
    agency: { label: "Federal rulemaking", needs: ["Action by the lead agency under existing or new authority", "A public notice-and-comment rulemaking", "Holding up to court review"] },
  };

  // For the visual cost meter: scale every bar against the biggest line in the
  // platform, and translate the figure into a per-household equivalent so the
  // jump from billions to trillions is actually conceivable.
  const HOUSEHOLDS = 131_000_000;
  const MAXCOST = Math.max(...P.policies.map((p) => Math.abs(p.cost)), 1);
  function perHousehold(billions) {
    const v = Math.round((Math.abs(billions) * 1e9) / HOUSEHOLDS);
    return v < 1 ? "under $1" : "$" + v.toLocaleString("en-US");
  }
  function costBadge(p) {
    const type = p.costType === "revenue" ? "rev" : (p.costType === "neutral" ? "neutral" : "spend");
    const fig = p.costType === "neutral" ? "≈ $0" : (p.costType === "revenue" ? "+" : "") + money(p.cost);
    const kind = p.costType === "revenue" ? "revenue / yr" : (p.costType === "neutral" ? "no net cost" : "cost / yr");
    const pct = p.costType === "neutral" ? 0 : Math.max(2.5, (Math.abs(p.cost) / MAXCOST) * 100);
    const eq = p.costType === "neutral"
      ? "adds no net federal cost"
      : `≈ ${perHousehold(p.cost)} per U.S. household${p.costType === "revenue" ? " raised" : ""}`;
    return `<div class="cost-meter ${type}" title="${money(Math.abs(p.cost))} ÷ ~131 million U.S. households — a way to picture the scale (it's funded progressively, not split evenly).">
      <div class="cm-head"><span class="cm-fig">${fig}</span><span class="cm-kind">${kind}</span></div>
      <div class="cm-bar" aria-hidden="true"><span class="cm-fill" style="width:${pct.toFixed(1)}%"></span></div>
      <div class="cm-eq">${eq}</div>
    </div>`;
  }
  function breakdownBlock(p) {
    const items = (P.breakdowns || {})[p.id];
    if (!items || !items.length) return "";
    const max = Math.max(...items.map((it) => Math.abs(it.amt)), 1);
    const total = items.reduce((s, it) => s + it.amt, 0);
    const rev = p.costType === "revenue";
    const rows = items.map((it) => {
      const off = it.amt < 0;
      const t = (rev || off) ? "rev" : "spend";
      const w = (Math.abs(it.amt) / max) * 100;
      const amtTxt = it.amt === 0 ? "≈ $0" : (off ? "−" : (rev ? "+" : "")) + money(Math.abs(it.amt));
      return `<li><span class="cb-label">${esc(it.label)}</span><span class="cb-bar"><span class="cb-fill ${t}" style="width:${w.toFixed(0)}%"></span></span><span class="cb-amt ${t}">${amtTxt}</span></li>`;
    }).join("");
    const title = rev ? "Where the revenue comes from" : (p.costType === "neutral" ? "Why it's about $0" : "Why it costs this");
    const sumTxt = rev ? "+" + money(total) : (p.costType === "neutral" ? "about $0 net" : money(Math.abs(total)));
    return `<div class="policy-block" data-reveal><h3>${title}</h3>
      <p class="aisle-intro">The headline number above, split into the pieces that drive it — rounded and illustrative.</p>
      <ul class="cost-breakdown">${rows}</ul>
      <p class="cb-foot">Adds up to <strong>${sumTxt}</strong> a year.</p></div>`;
  }

  function scorecard(p) {
    const m = (P.metrics || {})[p.id];
    if (!m) return "";
    const DIFF = ["", "Easy", "Moderate", "Involved", "Hard", "Very hard"];
    const PRIO = ["", "Low", "Modest", "Medium", "High", "Top"];
    const dots = (n) => `<span class="sc-dots" aria-hidden="true">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;
    const oddsCls = m.odds >= 60 ? "hi" : (m.odds >= 40 ? "mid" : "lo");
    return `<div class="policy-scorecard" data-reveal title="The campaign's honest, illustrative self-assessment — not a guarantee.">
      <div class="sc-item"><span class="sc-k">⏱ Time to implement</span><span class="sc-v">${esc(m.time)}</span></div>
      <div class="sc-item"><span class="sc-k">🛠 Difficulty</span>${dots(m.difficulty)}<span class="sc-sub">${DIFF[m.difficulty]}</span></div>
      <div class="sc-item"><span class="sc-k">⭐ Priority</span>${dots(m.priority)}<span class="sc-sub">${PRIO[m.priority]}</span></div>
      <div class="sc-item sc-odds-item"><span class="sc-k">🎲 Odds it happens</span><span class="sc-odds ${oddsCls}">${m.odds}%</span><span class="sc-obar"><span class="sc-ofill ${oddsCls}" style="width:${m.odds}%"></span></span></div>
    </div>`;
  }

  function governBlock(p) {
    const g = (P.governance || {})[p.id];
    if (!g) return "";
    const route = ROUTES[g.route] || ROUTES.congress;
    const owner = CAB[g.owner];
    const needs = route.needs.map((n) => `<li>${esc(n)}</li>`).join("");
    const courtLi = g.court ? `<li class="gv-court">⚖️ Expect a Supreme Court challenge — we draft it to survive review.</li>` : "";
    const ownerFace = owner && owner.img
      ? `<img src="${owner.img}" alt="${esc(owner.role)}" loading="lazy" width="60" height="60" />`
      : (owner ? `<span class="gv-emoji">${owner.icon || "🏛️"}</span>` : "");
    const ownerHTML = owner ? `<a class="gv-owner" href="seat.html?seat=${owner.key}">
        <span class="gv-avatar">${ownerFace}</span>
        <span class="gv-owner-txt"><small>Led by</small><b>${esc(owner.role)}</b><span>${esc(owner.dept)}</span></span>
      </a>` : "";
    return `<div class="policy-block" data-reveal><h3>How it gets done</h3>
      <p class="aisle-intro">Who spearheads it, and the specific path it has to travel to become real.</p>
      <div class="govern-grid">
        <div class="gv-path">
          <span class="gv-k">What it takes to pass</span>
          <div class="gv-route">${esc(route.label)}</div>
          <ul class="gv-needs">${needs}${courtLi}</ul>
        </div>
        ${ownerHTML}
      </div>
    </div>`;
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
          <div class="policy-headings"><h2>${esc(p.title)}</h2><p class="tagline">${esc(p.tagline)}</p>
            <button class="policy-share" type="button" data-share="${p.id}" title="Copy a link to this policy" aria-label="Copy a link to this policy">${LINK_ICON}</button></div>
          ${costBadge(p)}
        </div>
        <p class="policy-lead" data-reveal>${esc(p.lead)}</p>
        ${scorecard(p)}
        ${humanity}
        <div class="policy-block" data-reveal><h3>The Plan</h3><ul class="plan-list">${plan}</ul></div>
        ${governBlock(p)}
        ${p.timeline ? timelineBlock(p) : ""}
        <div class="policy-block" data-reveal><h3>How it works</h3><div class="detail-grid">${detail}</div></div>
        ${breakdownBlock(p)}
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

  function timelineBlock(p) {
    const rows = p.timeline.map((ph) =>
      `<li class="tl-item">
        <span class="tl-when">${esc(ph.when)}</span>
        <div class="tl-card"><h4>${esc(ph.title)}</h4><ul>${ph.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>
      </li>`).join("");
    return `<div class="policy-block" data-reveal><h3>The phased rollout</h3>
      <p class="aisle-intro">Universal healthcare isn't an overnight switch. Here's the year-by-year path, so nobody loses care during the transition.</p>
      <ol class="timeline-rollout">${rows}</ol></div>`;
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

  // themes that actually contain policies in a given bucket, in canonical order
  const themesIn = (catId) => THEMES.filter((t) => P.policies.some((p) => bucket(p) === catId && p.cat === t.id));

  /* ---- render content: category → theme subsection → policies ---- */
  const root = document.getElementById("issuesRoot");
  let html = "";
  P.categories.forEach((cat, i) => {
    const count = P.policies.filter((p) => bucket(p) === cat.id).length;
    html += `<div class="cat-header" id="cat-${cat.id}" data-cat="${cat.id}">
      <div class="container">
        <span class="cat-kicker" data-reveal>Part ${i + 1} of ${P.categories.length} · ${count} policies</span>
        <h2 class="cat-title" data-reveal>${esc(cat.name)}</h2>
        <p data-reveal>${esc(cat.blurb)}</p>
      </div>
    </div>`;
    themesIn(cat.id).forEach((t) => {
      html += `<div class="theme-header" id="theme-${cat.id}-${t.id}"><div class="container"><h3 data-reveal>${esc(t.name)}</h3></div></div>`;
      P.policies.filter((p) => bucket(p) === cat.id && p.cat === t.id).forEach((p) => { html += policyHTML(p); });
    });
  });
  function buildTable() {
    const DIFF = ["", "Easy", "Moderate", "Involved", "Hard", "Very hard"];
    const PRIO = ["", "Low", "Modest", "Medium", "High", "Top"];
    const rows = P.policies.map((p) => {
      const m = (P.metrics || {})[p.id] || {};
      const cc = costCell(p);
      const oddsCls = m.odds >= 60 ? "hi" : (m.odds >= 40 ? "mid" : "lo");
      return `<tr data-prow="${p.id}">
        <td class="pt-title"><a href="#${p.id}"><span class="pt-ic">${p.icon}</span>${esc(p.title)}</a></td>
        <td class="num pt-${cc.c}">${cc.t}</td>
        <td class="pt-time">${m.time ? esc(m.time) : "—"}</td>
        <td class="pt-dot">${m.difficulty ? `${miniDots(m.difficulty)}<small>${DIFF[m.difficulty]}</small>` : "—"}</td>
        <td class="pt-dot">${m.priority ? `${miniDots(m.priority)}<small>${PRIO[m.priority]}</small>` : "—"}</td>
        <td class="num">${m.odds != null ? `<span class="pt-odds ${oddsCls}">${m.odds}%</span>` : "—"}</td>
      </tr>`;
    }).join("");
    return `<details class="policy-table-wrap" id="policyTableWrap" open>
      <summary><span class="ptw-ic">📋</span> Table view — all ${P.policies.length} policies at a glance</summary>
      <div class="ptable-scroll">
        <table class="policy-table-view">
          <thead><tr><th>Policy</th><th class="num">Cost / revenue</th><th>Timeline</th><th>Difficulty</th><th>Priority</th><th class="num">Odds</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>`;
  }

  const themeChips = THEMES.map((t) => `<button type="button" class="if-chip" data-theme="${t.id}">${esc(t.name)}</button>`).join("");
  const filterBar = `
    <div class="issues-filter" id="issuesFilter">
      <input type="search" class="if-search" id="ifSearch" placeholder="Search ${P.policies.length} policies…" aria-label="Search policies" />
      <div class="if-row">
        <div class="if-chips" id="ifCat" role="group" aria-label="Filter by category">
          <button type="button" class="if-chip active" data-cat="all">All</button>
          <button type="button" class="if-chip" data-cat="spending">Spending</button>
          <button type="button" class="if-chip" data-cat="revenue">Revenue</button>
        </div>
        <div class="if-chips" id="ifTheme" role="group" aria-label="Filter by theme">
          <button type="button" class="if-chip active" data-theme="all">All themes</button>
          ${themeChips}
        </div>
        <span class="if-count" id="ifCount"></span>
        <button type="button" class="if-print" id="ifPrint" title="Print or save the whole platform as a PDF">🖨 Print / Save PDF</button>
      </div>
      <p class="if-noresults" id="ifNoResults" hidden>No policies match — <button type="button" class="if-clear" id="ifClear">clear filters</button>.</p>
    </div>`;
  root.innerHTML = filterBar + buildTable() + html;

  /* ---- lightweight TOC sidebar (nested) ---- */
  buildSidebar();
  wireFilter();
  function buildSidebar() {
    const navItems = P.categories.map((cat) => {
      const themes = themesIn(cat.id).map((t) => {
        const links = P.policies.filter((p) => bucket(p) === cat.id && p.cat === t.id).map((p) =>
          `<a href="#${p.id}" data-rail="${p.id}">${esc(p.title)}</a>`).join("");
        return `<div class="rail-theme" data-railtheme="${cat.id}-${t.id}">${esc(t.name)}</div>${links}`;
      }).join("");
      return `<a class="rail-sec" data-railsec="${cat.id}" href="#cat-${cat.id}">${esc(cat.name)}</a>${themes}`;
    }).join("");

    // the <aside id="issueRail"> already lives in the page layout — just fill it
    const list = document.getElementById("railList");
    if (list) list.innerHTML = navItems;

    // drawer controls for small screens
    const extra = document.createElement("div");
    extra.innerHTML = `
      <div class="rail-backdrop" id="railBackdrop" aria-hidden="true"></div>
      <button class="rail-fab" id="railFab" aria-expanded="false" aria-controls="issueRail">
        <span class="rf-ic">☰</span><span class="rf-label"><small>You're viewing</small><b id="railCurrent">The Issues</b></span>
      </button>`;
    while (extra.firstChild) document.body.appendChild(extra.firstChild);

    const fab = document.getElementById("railFab");
    const backdrop = document.getElementById("railBackdrop");
    const current = document.getElementById("railCurrent");
    const setOpen = (open) => { document.body.classList.toggle("rail-open", open); fab.setAttribute("aria-expanded", String(open)); };
    fab.addEventListener("click", () => setOpen(!document.body.classList.contains("rail-open")));
    const closeBtn = document.getElementById("railClose");
    if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));
    backdrop.addEventListener("click", () => setOpen(false));
    if (list) list.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    // highlight the policy currently in view
    const railLinks = new Map([...(list ? list.querySelectorAll("a[data-rail]") : [])].map((a) => [a.dataset.rail, a]));
    const policies = [...document.querySelectorAll(".policy[id]")];
    if ("IntersectionObserver" in window && policies.length) {
      let activeId = null;
      const spy = new IntersectionObserver((entries) => {
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
      }, { rootMargin: "-12% 0px -72% 0px", threshold: 0 });
      policies.forEach((s) => spy.observe(s));
    }
  }

  /* ---- search + filter ---- */
  function wireFilter() {
    const search = document.getElementById("ifSearch");
    const catWrap = document.getElementById("ifCat");
    const themeWrap = document.getElementById("ifTheme");
    const countEl = document.getElementById("ifCount");
    const noRes = document.getElementById("ifNoResults");
    if (!search) return;
    let fCat = "all", fTheme = "all";
    const show = (el, vis) => { if (el) el.style.display = vis ? "" : "none"; };

    function apply() {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      P.categories.forEach((c) => {
        let catVis = false;
        themesIn(c.id).forEach((t) => {
          let thVis = false;
          P.policies.filter((p) => bucket(p) === c.id && p.cat === t.id).forEach((p) => {
            const hay = (p.title + " " + (p.tagline || "") + " " + (p.lead || "")).toLowerCase();
            const vis = (fCat === "all" || fCat === c.id) && (fTheme === "all" || fTheme === p.cat) && (!q || hay.includes(q));
            show(document.getElementById(p.id), vis);
            show(document.querySelector(`a[data-rail="${p.id}"]`), vis);
            show(document.querySelector(`tr[data-prow="${p.id}"]`), vis);
            if (vis) { thVis = true; catVis = true; shown++; }
          });
          show(document.getElementById(`theme-${c.id}-${t.id}`), thVis);
          show(document.querySelector(`[data-railtheme="${c.id}-${t.id}"]`), thVis);
        });
        show(document.getElementById(`cat-${c.id}`), catVis);
        show(document.querySelector(`[data-railsec="${c.id}"]`), catVis);
      });
      if (countEl) countEl.textContent = `${shown} of ${P.policies.length}`;
      if (noRes) noRes.hidden = shown > 0;
    }
    const setChips = (wrap, attr, val) => [...wrap.children].forEach((x) => x.classList.toggle("active", x.dataset[attr] === val));

    search.addEventListener("input", apply);
    catWrap.addEventListener("click", (e) => { const b = e.target.closest(".if-chip"); if (!b) return; fCat = b.dataset.cat; setChips(catWrap, "cat", fCat); apply(); });
    themeWrap.addEventListener("click", (e) => { const b = e.target.closest(".if-chip"); if (!b) return; fTheme = b.dataset.theme; setChips(themeWrap, "theme", fTheme); apply(); });
    const clear = document.getElementById("ifClear");
    if (clear) clear.addEventListener("click", () => { search.value = ""; fCat = "all"; fTheme = "all"; setChips(catWrap, "cat", "all"); setChips(themeWrap, "theme", "all"); apply(); });
    const printBtn = document.getElementById("ifPrint");
    if (printBtn) printBtn.addEventListener("click", () => window.print());
    apply();
  }

  /* ---- Q&A accordion ---- */
  root.addEventListener("click", (e) => {
    const q = e.target.closest(".qa-q");
    if (!q) return;
    const item = q.closest(".qa-item");
    const open = item.classList.toggle("open");
    q.setAttribute("aria-expanded", String(open));
  });

  /* ---- per-policy copy link ---- */
  root.addEventListener("click", (e) => {
    const sb = e.target.closest(".policy-share");
    if (!sb) return;
    const url = location.origin + location.pathname + "#" + sb.dataset.share;
    const done = () => { sb.classList.add("copied"); sb.innerHTML = CHECK_ICON; sb.title = "Copied!"; setTimeout(() => { sb.classList.remove("copied"); sb.innerHTML = LINK_ICON; sb.title = "Copy a link to this policy"; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => prompt("Copy this link:", url));
    else prompt("Copy this link:", url);
  });

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

  /* ---- Humanity Score donut ---- */
  drawHumanityPie();

  /* ---- deep-link scroll (content injected after load) ---- */
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

    const cx = 110, cy = 110, r = 78, sw = 36, C = 2 * Math.PI * r;
    let offset = 0, circles = "";
    slices.forEach((s, i) => {
      const arc = (s.value / 100) * C;
      circles += `<circle class="pie-slice" data-i="${i}" cx="${cx}" cy="${cy}" r="${r}" fill="none"
        stroke="${s.color}" stroke-width="${sw}" stroke-dasharray="0 ${C.toFixed(2)}" data-arc="${arc.toFixed(2)}"
        stroke-dashoffset="${(-offset).toFixed(2)}" transform="rotate(-90 ${cx} ${cy})"/>`;
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
