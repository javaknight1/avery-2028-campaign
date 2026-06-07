/* =========================================================
   First 100 Days — renders the phased sprint plan: each phase
   → the departments involved → their deliverables. Links each
   department to its seat page. Reads window.PLATFORM.
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const root = document.getElementById("planRoot");
  if (!root || !P.firstHundredDays) return;
  const CAB = {}; (P.cabinet || []).forEach((c) => { CAB[c.key] = c; });

  root.innerHTML = P.firstHundredDays.map((ph) => `
    <div class="fhd-phase" data-reveal>
      <div class="fhd-when"><span>${esc(ph.when)}</span></div>
      <div class="fhd-content">
        <h3 class="fhd-title">${esc(ph.title)}</h3>
        <p class="fhd-blurb">${esc(ph.blurb)}</p>
        <div class="fhd-teams">
          ${ph.teams.map((t) => {
            const c = CAB[t.key] || { role: t.key };
            const face = c.img ? `<img src="${c.img}" alt="${esc(c.role)}" loading="lazy" />` : `<span class="fhd-emoji">${c.icon || "🏛️"}</span>`;
            return `<div class="fhd-team">
              <a class="fhd-member" href="seat.html?seat=${t.key}">
                <span class="fhd-av">${face}</span><span class="fhd-role">${esc(c.role)}</span>
              </a>
              <ul class="fhd-items">${t.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
            </div>`;
          }).join("")}
        </div>
      </div>
    </div>`).join("");

  // reveal the injected nodes (components.js already revealed the static ones)
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = [...root.querySelectorAll("[data-reveal]:not(.in)")];
  if (prefersReduced || !("IntersectionObserver" in window)) nodes.forEach((n) => n.classList.add("in"));
  else {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.05 });
    nodes.forEach((n) => io.observe(n));
  }
})();
