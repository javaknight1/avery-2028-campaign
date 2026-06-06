/* =========================================================
   Seat page — the full job description for one cabinet seat,
   the policies it owns, and a candidate shortlist.
   Reads ?seat=<key> from the URL. Uses window.PLATFORM.
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const root = document.getElementById("seatRoot");
  if (!root) return;

  const key = new URLSearchParams(location.search).get("seat") || location.hash.replace(/^#/, "");
  const seat = (P.cabinet || []).find((c) => c.key === key);
  if (!seat) {
    root.innerHTML = `<section class="page-hero"><div class="container"><h1>Seat not found</h1><p><a href="cabinet.html" style="color:var(--gold)">← Back to the Cabinet</a></p></div></section>`;
    return;
  }
  document.title = `${seat.role} — The Cabinet | Avery 2028`;

  const leads = Object.entries(P.governance || {})
    .filter(([id, g]) => g.owner === key)
    .map(([id]) => P.policies.find((p) => p.id === id)).filter(Boolean);
  const leadHTML = leads.length
    ? `<div class="seat-leads">${leads.map((p) => `<a class="seat-pill" href="issues.html#${p.id}">${p.icon} ${esc(p.title)}</a>`).join("")}</div>`
    : `<p class="muted">A cross-cutting role that supports the whole agenda rather than owning specific line items.</p>`;

  const resp = (seat.responsibilities || []).map((r) => `<li>${esc(r)}</li>`).join("");
  const daily = (seat.daily || []).map((r) => `<li>${esc(r)}</li>`).join("");
  const headFace = seat.img ? `<img src="${seat.img}" alt="${esc(seat.holder || seat.role)}" />` : (seat.icon || "🏛️");

  let listTitle, shortlist;
  if (seat.self) {
    listTitle = "Who holds it";
    shortlist = `<div class="seat-self">
      <span class="seat-self-av"><img src="${seat.img}" alt="${esc(seat.holder)}" /></span>
      <div><b style="font-family:'Oswald';font-size:1.2rem;color:var(--navy)">${esc(seat.holder)}</b>
      <p class="muted">This seat is yours — you're the candidate. You'd directly own ${leads.length} ${leads.length === 1 ? "policy" : "policies"}, and answer to the country for all the rest.</p></div></div>`;
  } else if (seat.tbd) {
    listTitle = "The pick";
    shortlist = `<div class="seat-tbd"><b>TBD — the President's call.</b>
      <p class="muted" style="margin-top:6px">The Vice President is a running-mate decision Rob is deliberately holding off on. No placeholder — the pick comes later.</p></div>`;
  } else {
    listTitle = "The shortlist";
    shortlist = `<p class="muted seat-disc">Illustrative suggestions — public figures who'd fit this job <em>if</em> they shared the platform and chose to join the team. Not affiliated with them, and not endorsements.</p>
      <div class="seat-cands">${(seat.candidates || []).map((c) => `
        <div class="cand">
          <h4>${esc(c.name)}</h4>
          <p class="cand-bg">${esc(c.background)}</p>
          <p class="cand-why"><b>Why this seat:</b> ${esc(c.why)}</p>
        </div>`).join("")}</div>`;
  }

  root.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <a class="seat-back" href="cabinet.html">← The Cabinet</a>
        <div class="seat-head">
          <span class="seat-emoji">${headFace}</span>
          <div><span class="eyebrow" style="margin-bottom:6px">${esc(seat.dept)}</span><h1 style="margin:0">${esc(seat.role)}</h1></div>
        </div>
        ${seat.mission ? `<p class="seat-mission">${esc(seat.mission)}</p>` : ""}
      </div>
    </section>

    <section class="section bg-white">
      <div class="container" style="max-width:860px">
        <h2 class="seat-h2">What this seat owns</h2>
        ${leadHTML}
        <div class="seat-jd">
          <div><h3>Responsibilities</h3><ul class="seat-list">${resp}</ul></div>
          <div><h3>Day to day</h3><ul class="seat-list">${daily}</ul></div>
        </div>
      </div>
    </section>

    <section class="section bg-paper">
      <div class="container" style="max-width:860px">
        <h2 class="seat-h2">${listTitle}</h2>
        ${shortlist}
      </div>
    </section>

    <section class="section bg-navy">
      <div class="container center" style="max-width:660px">
        <span class="eyebrow">The whole team</span>
        <h2 class="section-title">See every seat</h2>
        <div style="margin-top:10px">
          <a href="cabinet.html" class="btn btn--gold btn--lg">Back to the Cabinet <span class="arrow">→</span></a>
          <a href="issues.html" class="btn btn--ghost-light btn--lg" style="margin-left:8px">The Issues</a>
        </div>
      </div>
    </section>`;
})();
