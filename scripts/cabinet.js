/* =========================================================
   Cabinet page — a grid of SEATS (job descriptions). Each
   card links to its seat page (seat.html?seat=key) with the
   full JD + a candidate shortlist. No fixed people here.
   Reads window.PLATFORM (cabinet + governance + policies).
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const el = document.getElementById("cabinetGrid");
  if (!el || !P.cabinet) return;

  const leads = {};
  Object.entries(P.governance || {}).forEach(([pid, g]) => { (leads[g.owner] = leads[g.owner] || []).push(pid); });

  el.innerHTML = P.cabinet.map((c) => {
    const n = (leads[c.key] || []).length;
    const face = c.img
      ? `<img src="${c.img}" alt="${esc(c.holder || c.role)}" loading="lazy" width="120" height="120" />`
      : `<span class="cab-emoji">${c.icon || "🏛️"}</span>`;
    const sub = c.self ? `<span class="cab-sub cab-you">${esc(c.holder)} · that's you</span>`
      : c.tbd ? `<span class="cab-sub cab-tbd">Pick: TBD</span>`
        : `<span class="cab-sub cab-pick">${(c.candidates || []).length} shortlisted</span>`;
    const leadStr = n ? `Leads ${n} ${n === 1 ? "policy" : "policies"}` : "Cross-cutting role";
    return `<a class="cab-card${c.img ? "" : " cab-card-emoji"}" id="${c.key}" href="seat.html?seat=${c.key}" data-reveal>
      <span class="cab-avatar">${face}</span>
      <b class="cab-name">${esc(c.role)}</b>
      <span class="cab-dept">${esc(c.dept)}</span>
      ${sub}
      <span class="cab-leadcount">${leadStr}</span>
    </a>`;
  }).join("");

  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (prefersReduced || !("IntersectionObserver" in window)) nodes.forEach((n) => n.classList.add("in"));
  else {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.06 });
    nodes.forEach((n) => io.observe(n));
  }
})();
