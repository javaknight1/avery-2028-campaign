/* =========================================================
   The Deficit page — an interest-aware burndown of the
   national debt, plus a full amortization table.
   Reads window.PLATFORM (policies + funding + fiscal).
   ========================================================= */
(() => {
  "use strict";
  const P = window.PLATFORM;
  if (!P) return;
  const esc = (s) => String(s);
  const money = (b) => (b >= 1000 ? "$" + (b / 1000).toFixed(b % 1000 === 0 ? 0 : 2) + "T" : "$" + Math.round(b) + "B");
  const fline = (f) => `${f.icon ? f.icon + " " : ""}${f.id ? `<a href="issues.html#${f.id}">${esc(f.label)}</a>` : esc(f.label)}`;

  const FUNDING = P.funding;
  const TOTAL_REVENUE = FUNDING.reduce((s, f) => s + f.amt, 0);
  const TOTAL_SPEND = P.policies.filter((p) => p.costType === "spend").reduce((s, p) => s + p.cost, 0);
  const SURPLUS = TOTAL_REVENUE - TOTAL_SPEND;
  const DEFICIT_TODAY = P.fiscal.deficitToday;   // $B
  const DEBT0 = P.fiscal.debtToday;              // $B
  const RATE = P.fiscal.interestRate;            // e.g. 0.03
  const YEAR = new Date().getFullYear();

  /* ---- amortization: hold debt service steady at (today's interest + surplus) ---- */
  const SERVICE = SURPLUS + DEBT0 * RATE;        // constant annual amount toward interest + principal
  const rows = [];
  let debt = DEBT0, totalInterest = 0, y = 0;
  while (debt > 0.5 && y < 400) {
    const interest = debt * RATE;
    const principal = Math.min(debt, SERVICE - interest);
    rows.push({ year: y + 1, start: debt, interest, principal, end: debt - principal });
    totalInterest += interest;
    debt -= principal;
    y++;
  }
  const PAYOFF = rows.length;            // years to debt-free
  const TARGET = YEAR + PAYOFF;

  /* ---- top: headline + steps + year-1 snapshot ---- */
  (function renderTop() {
    const el = document.getElementById("deficitTop");
    if (!el) return;
    const afterYr1 = DEFICIT_TODAY - SURPLUS;
    const scaleD = Math.max(DEFICIT_TODAY, SURPLUS, 1);
    el.innerHTML = `
      <div class="center" style="max-width:780px">
        <span class="eyebrow" data-reveal>The headline</span>
        <h2 class="section-title" data-reveal>A steady surplus clears the debt in ~${PAYOFF} years</h2>
        <p class="section-lead" data-reveal>Today Washington runs a <strong>${money(DEFICIT_TODAY)}/yr deficit</strong> on a <strong>${money(DEBT0)} debt</strong>, and spends about <strong>${money(DEBT0 * RATE)}/yr just on interest</strong>. Our plan flips that: a <strong>+${money(SURPLUS)}/yr surplus</strong> on top of a balanced budget, dedicated to the debt.</p>
      </div>

      <div class="debt-clear" data-reveal style="max-width:880px">
        <div class="dc-num">≈&nbsp;${PAYOFF}<small>years</small></div>
        <div class="dc-body">
          <h4>Debt-free by roughly ${TARGET}</h4>
          <p>If we hold our debt-service budget steady — today's interest payment <em>plus</em> the surplus, about <strong>${money(SERVICE)}/yr</strong> — the whole <strong>${money(DEBT0)}</strong> debt is retired in about <strong>${PAYOFF} years</strong>. Early on most of that goes to interest; as the debt shrinks, the interest bill shrinks, so more goes to principal and it <em>accelerates</em>.</p>
          <p class="dc-note">Illustrative and interest-aware (3% rate). We'd pay roughly <strong>${money(totalInterest)}</strong> in interest along the way — which is exactly why paying the principal down matters. Faster growth or a bigger surplus pays it off sooner.</p>
        </div>
      </div>

      <div class="deficit-steps" data-reveal style="margin-top:30px">
        <div class="dstep"><span class="dnum">1</span><div><h4>Run a surplus, not a deficit</h4><p>New revenue beats new spending by <strong>+${money(SURPLUS)}/yr</strong>, so the agenda adds nothing to the debt.</p></div></div>
        <div class="dstep"><span class="dnum">2</span><div><h4>Hold debt service steady</h4><p>Keep paying today's ~${money(DEBT0 * RATE)} interest, plus the surplus — about ${money(SERVICE)}/yr aimed at the debt.</p></div></div>
        <div class="dstep"><span class="dnum">3</span><div><h4>Watch it accelerate</h4><p>As principal falls, interest falls, so each year a bigger share retires real debt. The burndown curve below steepens over time.</p></div></div>
        <div class="dstep"><span class="dnum">4</span><div><h4>Debt-free, then surpluses to spare</h4><p>Around ${TARGET} the debt hits zero — and the ~${money(SERVICE)} once spent on debt is freed for everything else.</p></div></div>
      </div>

      <div class="deficit-vis" data-reveal>
        <div class="dv-row"><i>Deficit today</i><span class="track"><span class="fill bad" style="width:${(DEFICIT_TODAY / scaleD * 100).toFixed(1)}%"></span></span><b>${money(DEFICIT_TODAY)}</b></div>
        <div class="dv-row"><i>Our surplus, applied</i><span class="track"><span class="fill good" style="width:${(SURPLUS / scaleD * 100).toFixed(1)}%"></span></span><b>+${money(SURPLUS)}</b></div>
        <div class="dv-row"><i>Remaining (year 1)</i><span class="track"><span class="fill mid" style="width:${(afterYr1 / scaleD * 100).toFixed(1)}%"></span></span><b>${money(afterYr1)}</b></div>
        <div class="dv-note">…closed over the following years by growth, healthcare savings, and collecting the tax gap — then the surplus pays the ${money(DEBT0)} debt down on the schedule below.</div>
      </div>`;
  })();

  /* ---- burndown chart + amortization table ---- */
  (function renderChart() {
    const el = document.getElementById("deficitChart");
    if (!el) return;

    // SVG burndown: debt remaining (left axis) + surplus going to the debt (right axis)
    const W = 760, H = 320, padL = 56, padR = 56, padT = 18, padB = 38;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const xMax = PAYOFF, yMax = DEBT0, surMax = 1500;
    const sx = (yr) => padL + (yr / xMax) * plotW;
    const sy = (d) => padT + (1 - d / yMax) * plotH;
    const syR = (v) => padT + (1 - v / surMax) * plotH;

    const pts = [{ x: 0, d: DEBT0 }].concat(rows.map((r) => ({ x: r.year, d: r.end })));
    const line = pts.map((p, i) => (i ? "L" : "M") + sx(p.x).toFixed(1) + "," + sy(p.d).toFixed(1)).join(" ");
    const area = line + ` L ${sx(xMax).toFixed(1)},${sy(0).toFixed(1)} L ${sx(0).toFixed(1)},${sy(0).toFixed(1)} Z`;
    // surplus applied to the debt each year — grows as interest falls
    const sPts = [{ x: 0, v: SURPLUS }].concat(rows.map((r) => ({ x: r.year, v: SERVICE - r.interest })));
    const surLine = sPts.map((p, i) => (i ? "L" : "M") + sx(p.x).toFixed(1) + "," + syR(p.v).toFixed(1)).join(" ");

    let grid = "";
    for (let g = 0; g <= 4; g++) {
      const dv = (yMax / 4) * g, yy = sy(dv);
      grid += `<line x1="${padL}" y1="${yy.toFixed(1)}" x2="${W - padR}" y2="${yy.toFixed(1)}" stroke="#e2e8f2"/>`;
      grid += `<text x="${padL - 8}" y="${(yy + 4).toFixed(1)}" text-anchor="end" font-size="10" fill="#c8102e" font-family="Oswald">$${(dv / 1000).toFixed(0)}T</text>`;
    }
    let rlab = "";
    for (let s = 0; s <= surMax; s += 500) {
      const yy = syR(s);
      rlab += `<text x="${W - padR + 8}" y="${(yy + 4).toFixed(1)}" text-anchor="start" font-size="10" fill="#1f7a4d" font-family="Oswald">${s === 0 ? "$0" : "$" + (s / 1000).toFixed(1) + "T"}</text>`;
    }
    let xlab = "";
    for (let t = 0; t <= xMax; t += 10) {
      xlab += `<text x="${sx(t).toFixed(1)}" y="${H - 12}" text-anchor="middle" font-size="10" fill="#5a6b86" font-family="Oswald">${YEAR + t}</text>`;
    }
    xlab += `<text x="${sx(xMax).toFixed(1)}" y="${H - 12}" text-anchor="end" font-size="10" fill="#1f7a4d" font-family="Oswald">${TARGET}</text>`;

    const svg = `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="National debt burning down to zero while the annual surplus grows">
      <defs><linearGradient id="debtFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(200,16,46,0.35)"/><stop offset="100%" stop-color="rgba(200,16,46,0.04)"/>
      </linearGradient></defs>
      ${grid}${rlab}${xlab}
      <path d="${area}" fill="url(#debtFill)" stroke="none"/>
      <path d="${line}" fill="none" stroke="#c8102e" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="${surLine}" fill="none" stroke="#1f7a4d" stroke-width="2.2" stroke-dasharray="6 4" stroke-linejoin="round"/>
    </svg>`;

    // amortization table — every 5 years + the payoff year
    const picks = rows.filter((r) => r.year === 1 || r.year % 5 === 0 || r.year === PAYOFF);
    const trows = picks.map((r) => `<tr>
      <td>${YEAR + r.year - 1}<small>yr ${r.year}</small></td>
      <td class="num int">${money(r.interest)}</td>
      <td class="num prin">${money(r.principal)}</td>
      <td class="num">${money(Math.max(0, r.end))}</td>
    </tr>`).join("");

    el.innerHTML = `
      <div class="center" style="max-width:740px">
        <span class="eyebrow" data-reveal>The burndown</span>
        <h2 class="section-title" data-reveal>Watch the debt burn down</h2>
        <p class="section-lead" data-reveal>The red area is the national debt shrinking to zero (left axis). The green dashed line is the surplus we put toward the debt each year (right axis) — it <em>climbs</em> as the interest bill falls, so the payoff keeps speeding up. The two cross on the way to debt-free.</p>
      </div>
      <div class="burndown-card" data-reveal>
        ${svg}
        <div class="legend">
          <span><i style="background:var(--red)"></i> National debt remaining (left)</span>
          <span><i style="border-top:3px dashed #1f7a4d;background:none;height:0;width:18px"></i> Surplus to the debt that year (right)</span>
        </div>
      </div>

      <div class="center" style="max-width:780px">
        <h3 class="amort-title" data-reveal>How the surplus pays it down</h3>
        <p class="section-lead" data-reveal style="margin-inline:auto">Every year our revenue covers program costs <em>and</em> the interest on the debt — with a <strong>surplus left over</strong>. That surplus goes straight to principal. As the debt shrinks, the interest bill shrinks, so the surplus grows and the payoff <em>accelerates</em>. For 50 years it ran the other way: revenue fell short of costs + interest, and the debt grew.</p>
      </div>
      <div class="amort-wrap" data-reveal>
        <table class="amort-table">
          <thead><tr><th>Year</th><th class="num">Interest that year</th><th class="num">Surplus → debt</th><th class="num">Debt remaining</th></tr></thead>
          <tbody>${trows}</tbody>
          <tfoot><tr><td>Totals over ${PAYOFF} yrs</td><td class="num int">${money(totalInterest)}</td><td class="num prin">${money(DEBT0)}</td><td class="num">$0</td></tr></tfoot>
        </table>
      </div>
      <p class="amort-note" data-reveal>Watch the two middle columns trade places: interest (what we owe the past) falls every year, while the surplus going to principal (what frees the future) climbs — from <strong>${money(SURPLUS)}</strong> in year one to nearly triple that near the end. Illustrative at a 3% interest rate; faster growth or a bigger surplus would pay it off sooner.</p>`;
  })();

  /* ---- presidents: deficit/surplus track record (dollars, with portraits) ---- */
  (function renderPresidents() {
    const el = document.getElementById("deficitPrez");
    if (!el || !P.presidents) return;
    const data = P.presidents;
    const W = 900, H = 432, padL = 60, padR = 18, padT = 24, padB = 106;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const top = 500, bot = -2100; // $B
    const y = (v) => padT + ((top - v) / (top - bot)) * plotH;
    const zero = y(0), slot = plotW / data.length, bw = slot * 0.5;
    const fy = H - padB + 22; // face-circle centre
    const ring = (p) => (p === "D" ? "#2a6df4" : p === "I" ? "#f4b740" : "#c8102e");
    const sMoney = (v) => (v < 0 ? "−" : v > 0 ? "+" : "") + money(Math.abs(v));

    let grid = "";
    for (let g = top; g >= bot; g -= 500) {
      const yy = y(g);
      grid += `<line x1="${padL}" y1="${yy.toFixed(1)}" x2="${W - padR}" y2="${yy.toFixed(1)}" stroke="${g === 0 ? "#0b2545" : "#e2e8f2"}" stroke-width="${g === 0 ? 1.5 : 1}"/>`;
      grid += `<text x="${padL - 8}" y="${(yy + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="#5a6b86" font-family="Oswald">${g === 0 ? "$0" : sMoney(g)}</text>`;
    }
    let defs = "", bars = "";
    data.forEach((d, i) => {
      const cx = padL + slot * i + slot / 2, x = cx - bw / 2, yv = y(d.dollars);
      const barY = d.dollars >= 0 ? yv : zero, barH = Math.abs(yv - zero);
      const color = d.dollars >= 0 ? "#1f7a4d" : "#c8102e";
      if (d.soon) {
        bars += `<rect x="${x.toFixed(1)}" y="${barY.toFixed(1)}" width="${bw.toFixed(1)}" height="${barH.toFixed(1)}" rx="3" fill="rgba(31,122,77,0.15)" stroke="#1f7a4d" stroke-width="2" stroke-dasharray="5 4"/>`;
        bars += `<text x="${cx.toFixed(1)}" y="${(barY - 19).toFixed(1)}" text-anchor="middle" font-size="9" fill="#1f7a4d" font-family="Oswald">${sMoney(d.dollars)}</text>`;
        bars += `<text x="${cx.toFixed(1)}" y="${(barY - 8).toFixed(1)}" text-anchor="middle" font-size="8" fill="#1f7a4d" font-family="Oswald" font-weight="700">SOON</text>`;
      } else {
        bars += `<rect x="${x.toFixed(1)}" y="${barY.toFixed(1)}" width="${bw.toFixed(1)}" height="${barH.toFixed(1)}" rx="3" fill="${color}"/>`;
        const lblY = d.dollars >= 0 ? barY - 7 : barY + barH + 12;
        bars += `<text x="${cx.toFixed(1)}" y="${lblY.toFixed(1)}" text-anchor="middle" font-size="9" fill="${color}" font-family="Oswald">${sMoney(d.dollars)}</text>`;
      }
      // portrait in a circle
      const img = d.key === "avery" ? "assets/rob.svg" : `assets/presidents/${d.key}.jpg`;
      defs += `<clipPath id="pc${i}"><circle cx="${cx.toFixed(1)}" cy="${fy}" r="15"/></clipPath>`;
      bars += `<image href="${img}" x="${(cx - 15).toFixed(1)}" y="${fy - 15}" width="30" height="30" clip-path="url(#pc${i})" preserveAspectRatio="xMidYMid slice"/>`;
      bars += `<circle cx="${cx.toFixed(1)}" cy="${fy}" r="15" fill="none" stroke="${ring(d.party)}" stroke-width="2"/>`;
      bars += `<text x="${cx.toFixed(1)}" y="${(H - padB + 52).toFixed(1)}" text-anchor="middle" font-size="9.5" fill="#11203a" font-family="Oswald" font-weight="600">${esc(d.name)}</text>`;
      bars += `<text x="${cx.toFixed(1)}" y="${(H - padB + 64).toFixed(1)}" text-anchor="middle" font-size="8" fill="#5a6b86">${esc(d.years)}</text>`;
    });
    const svg = `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Average annual deficit or surplus by president, in dollars"><defs>${defs}</defs>${grid}${bars}</svg>`;
    el.innerHTML = `
      <div class="center" style="max-width:800px">
        <span class="eyebrow" data-reveal>The track record</span>
        <h2 class="section-title" data-reveal>How presidents stack up</h2>
        <p class="section-lead" data-reveal>Average annual federal deficit or surplus during each presidency, in actual dollars. For 50 years almost everyone has run deficits — only Clinton came near balance, and they've ballooned lately. Ours, dotted, is the promise: a real surplus.</p>
      </div>
      <div class="burndown-card" data-reveal>${svg}
        <div class="legend">
          <span><i style="background:#c8102e"></i> Deficit</span>
          <span><i style="background:#1f7a4d"></i> Surplus</span>
          <span><i style="border:2px dashed #1f7a4d;background:none;height:11px;width:14px;border-radius:2px"></i> Avery (coming soon)</span>
        </div>
      </div>
      <p class="amort-note" data-reveal>Rounded, illustrative nominal-dollar averages over each term (not inflation-adjusted, so recent deficits loom largest). Portraits are public-domain official portraits; Avery's bar is a projection from this platform's surplus.</p>`;
  })();

  /* ---- reveal ---- */
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
