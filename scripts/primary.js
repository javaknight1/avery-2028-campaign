/* =========================================================
   The Primary — renders the delegate target, the phase
   expectations, the calendar, and ballot-access table from
   window.PRIMARY.
   ========================================================= */
(() => {
  "use strict";
  const P = window.PRIMARY;
  if (!P) return;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s);

  if ($("needNum")) $("needNum").textContent = P.delegatesNeeded.toLocaleString();
  if ($("totNum")) $("totNum").textContent = P.totalPledged.toLocaleString();
  if ($("threshNum")) $("threshNum").textContent = P.threshold + "%";

  // Phases
  if ($("primPhases")) {
    $("primPhases").innerHTML = P.phases.map((p) => `
      <div class="pp-card" data-reveal>
        <span class="pp-when">${esc(p.when)}</span>
        <h3 class="pp-goal">${esc(p.goal)}</h3>
        <p>${esc(p.detail)}</p>
      </div>`).join("");
  }

  // Calendar
  if ($("primCal")) {
    const rows = P.calendar.map((c) => `<tr class="cal-${esc(c.tier)}">
      <td class="cal-date">${esc(c.date)}</td>
      <td class="cal-contest">${esc(c.contest)}</td>
      <td class="cal-type">${esc(c.type)}</td>
      <td class="cal-del">${c.delegates ? "~" + c.delegates.toLocaleString() : "—"}</td>
      <td class="cal-target">${esc(c.target)}</td>
    </tr>`).join("");
    $("primCal").innerHTML = `<table class="caltable">
      <thead><tr><th>Date</th><th>Contest</th><th>Type</th><th>Delegates</th><th>Our goal</th></tr></thead>
      <tbody>${rows}</tbody></table>`;
  }

  // Ballot access
  if ($("primBallot")) {
    const rows = P.ballotAccess.rows.map((r) => `<tr>
      <td class="ba-state">${esc(r.state)}</td>
      <td class="ba-deadline">${esc(r.deadline)}</td>
      <td class="ba-req">${esc(r.req)}</td>
    </tr>`).join("");
    $("primBallot").innerHTML = `<table class="batable">
      <thead><tr><th>State</th><th>File by</th><th>What it takes</th></tr></thead>
      <tbody>${rows}</tbody></table>`;
  }
  if ($("primBallotNote")) $("primBallotNote").textContent = P.ballotAccess.note;
})();
