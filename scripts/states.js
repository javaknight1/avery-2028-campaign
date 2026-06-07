/* =========================================================
   The 50-State Tour — colors the US map (visited = blue,
   upcoming = grey) and renders the full schedule of dates.
   Map geometry from window.USMAP (@svg-maps/usa, CC-BY-NC).
   ========================================================= */
(() => {
  "use strict";
  const M = window.USMAP;
  if (!M) return;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s);

  // The route: a regional sweep, NE → Pacific. (code, representative stop)
  const ROUTE = [
    { c: "nh", city: "Manchester" }, { c: "vt", city: "Burlington" }, { c: "me", city: "Portland" },
    { c: "ma", city: "Boston" }, { c: "ri", city: "Providence" }, { c: "ct", city: "Hartford" },
    { c: "ny", city: "Buffalo" }, { c: "nj", city: "Newark" }, { c: "pa", city: "Pittsburgh" },
    { c: "de", city: "Wilmington" }, { c: "md", city: "Baltimore" }, { c: "va", city: "Richmond" },
    { c: "wv", city: "Charleston" }, { c: "nc", city: "Charlotte" }, { c: "sc", city: "Columbia" },
    { c: "ga", city: "Atlanta" }, { c: "fl", city: "Orlando" }, { c: "al", city: "Birmingham" },
    { c: "ms", city: "Jackson" }, { c: "tn", city: "Nashville" }, { c: "ky", city: "Louisville" },
    { c: "oh", city: "Columbus" }, { c: "mi", city: "Detroit" }, { c: "in", city: "Indianapolis" },
    { c: "il", city: "Chicago" }, { c: "wi", city: "Milwaukee" }, { c: "mn", city: "Minneapolis" },
    { c: "ia", city: "Des Moines" }, { c: "mo", city: "St. Louis" }, { c: "ar", city: "Little Rock" },
    { c: "la", city: "New Orleans" }, { c: "tx", city: "Houston" }, { c: "ok", city: "Oklahoma City" },
    { c: "ks", city: "Wichita" }, { c: "ne", city: "Omaha" }, { c: "sd", city: "Sioux Falls" },
    { c: "nd", city: "Fargo" }, { c: "mt", city: "Billings" }, { c: "wy", city: "Cheyenne" },
    { c: "co", city: "Denver" }, { c: "nm", city: "Albuquerque" }, { c: "az", city: "Phoenix" },
    { c: "ut", city: "Salt Lake City" }, { c: "id", city: "Boise" }, { c: "nv", city: "Las Vegas" },
    { c: "ca", city: "Los Angeles" }, { c: "or", city: "Portland" }, { c: "wa", city: "Seattle" },
    { c: "ak", city: "Anchorage" }, { c: "hi", city: "Honolulu" },
  ];

  const MO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmt = (d) => `${MO[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const start = new Date(today); start.setDate(start.getDate() - 60); // some stops already done
  ROUTE.forEach((r, i) => { const d = new Date(start); d.setDate(d.getDate() + i * 4); r.date = d; r.visited = d <= today; });

  const NAME = {}; M.locations.forEach((l) => { NAME[l.id] = l.name; });
  const byCode = {}; ROUTE.forEach((r) => { byCode[r.c] = r; });
  const visitedCount = ROUTE.filter((r) => r.visited).length;
  const next = ROUTE.find((r) => !r.visited);

  /* ---- map ---- */
  const mapEl = $("stateMap");
  if (mapEl) {
    const paths = M.locations.map((l) => {
      const r = byCode[l.id];
      const cls = r ? (r.visited ? "st on" : "st") : "st st-na";
      const tip = r ? `${l.name} — ${r.visited ? "visited " + fmt(r.date) : "planned " + fmt(r.date)}` : l.name;
      // This map draws Hawaii as a vertical chain; rotate it about its centre so it reads upright.
      const tf = l.id === "hi" ? ' transform="rotate(-60 599 622)"' : "";
      return `<path d="${l.path}" class="${cls}" data-code="${l.id}"${tf}><title>${esc(tip)}</title></path>`;
    }).join("");
    mapEl.innerHTML = `<svg viewBox="${M.viewBox}" class="us-map" role="img" aria-label="Map of the 50-state campaign tour; ${visitedCount} of 50 states visited so far">${paths}</svg>`;
    mapEl.addEventListener("click", (e) => {
      const p = e.target.closest("path[data-code]"); if (!p) return;
      const row = document.getElementById("srow-" + p.dataset.code);
      if (row) { row.scrollIntoView({ block: "center", behavior: "smooth" }); row.classList.add("flash"); setTimeout(() => row.classList.remove("flash"), 1400); }
    });
  }

  if ($("stateCount")) $("stateCount").textContent = visitedCount;
  if ($("stateNext")) $("stateNext").innerHTML = next
    ? `Next stop: <strong>${esc(NAME[next.c])}</strong> (${esc(next.city)}) on <strong>${fmt(next.date)}</strong>.`
    : "Every state visited. ✅";

  /* ---- schedule ---- */
  const schEl = $("stateSchedule");
  if (schEl) {
    const rows = ROUTE.map((r, i) => `<tr id="srow-${r.c}" class="${r.visited ? "done" : ""}">
      <td class="sc-n">${i + 1}</td>
      <td class="sc-date">${fmt(r.date)}</td>
      <td class="sc-state">${esc(NAME[r.c] || r.c.toUpperCase())}</td>
      <td class="sc-city">${esc(r.city)}</td>
      <td class="sc-status">${r.visited ? '<span class="sc-done">✓ Visited</span>' : '<span class="sc-up">Upcoming</span>'}</td>
    </tr>`).join("");
    schEl.innerHTML = `<table class="sched">
      <thead><tr><th>#</th><th>Date</th><th>State</th><th>Stop</th><th>Status</th></tr></thead>
      <tbody>${rows}</tbody></table>`;
  }
})();
