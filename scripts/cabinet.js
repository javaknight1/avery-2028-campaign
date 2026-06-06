/* =========================================================
   Cabinet page — a grid of department heads (placeholder
   people), each with the policies they spearhead.
   Reads window.PLATFORM (cabinet + governance + policies).
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const el = document.getElementById("cabinetGrid");
  if (!el || !P.cabinet) return;

  // group policies by their owning department
  const leads = {};
  Object.entries(P.governance || {}).forEach(([pid, g]) => { (leads[g.owner] = leads[g.owner] || []).push(pid); });

  el.innerHTML = P.cabinet.map((c) => {
    const mine = (leads[c.key] || []).map((pid) => P.policies.find((p) => p.id === pid)).filter(Boolean);
    const leadHTML = mine.length
      ? `<div class="cab-leads"><small>Leads ${mine.length} ${mine.length === 1 ? "policy" : "policies"}</small>
           <div class="cab-tags">${mine.map((p) => `<a href="issues.html#${p.id}">${esc(p.title)}</a>`).join("")}</div></div>`
      : `<div class="cab-leads"><small class="cab-none">Portfolio in progress</small></div>`;
    return `<div class="cab-card" id="${c.key}" data-reveal>
      <span class="cab-avatar"><img src="assets/cabinet/${c.key}.jpg" alt="${esc(c.name)}" loading="lazy" width="120" height="120" /></span>
      <b class="cab-name">${esc(c.name)}</b>
      <span class="cab-role">${esc(c.role)}</span>
      <span class="cab-dept">${esc(c.dept)}</span>
      ${leadHTML}
    </div>`;
  }).join("");

  // reveal + jump to a deep-linked member
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (prefersReduced || !("IntersectionObserver" in window)) nodes.forEach((n) => n.classList.add("in"));
  else {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.06 });
    nodes.forEach((n) => io.observe(n));
  }
  if (location.hash && location.hash.length > 1) {
    const t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (t) requestAnimationFrame(() => requestAnimationFrame(() => t.scrollIntoView({ block: "center" })));
  }
})();
