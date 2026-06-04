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

    // SVG burndown (debt remaining over time) with annual interest line
    const W = 760, H = 320, padL = 56, padR = 18, padT = 18, padB = 38;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const xMax = PAYOFF, yMax = DEBT0;
    const sx = (yr) => padL + (yr / xMax) * plotW;
    const sy = (d) => padT + (1 - d / yMax) * plotH;

    const pts = [{ x: 0, d: DEBT0 }].concat(rows.map((r) => ({ x: r.year, d: r.end })));
    const line = pts.map((p, i) => (i ? "L" : "M") + sx(p.x).toFixed(1) + "," + sy(p.d).toFixed(1)).join(" ");
    const area = line + ` L ${sx(xMax).toFixed(1)},${sy(0).toFixed(1)} L ${sx(0).toFixed(1)},${sy(0).toFixed(1)} Z`;
    // annual interest line, scaled to its own max for visibility
    const intMax = rows[0].interest;
    const syi = (v) => padT + (1 - v / intMax) * plotH;
    const intLine = rows.map((r, i) => (i ? "L" : "M") + sx(r.year).toFixed(1) + "," + syi(r.interest).toFixed(1)).join(" ");

    let grid = "";
    for (let g = 0; g <= 4; g++) {
      const dv = (yMax / 4) * g, yy = sy(dv);
      grid += `<line x1="${padL}" y1="${yy.toFixed(1)}" x2="${W - padR}" y2="${yy.toFixed(1)}" stroke="#e2e8f2"/>`;
      grid += `<text x="${padL - 8}" y="${(yy + 4).toFixed(1)}" text-anchor="end" font-size="10" fill="#5a6b86" font-family="Oswald">$${(dv / 1000).toFixed(0)}T</text>`;
    }
    let xlab = "";
    for (let t = 0; t <= xMax; t += 10) {
      xlab += `<text x="${sx(t).toFixed(1)}" y="${H - 12}" text-anchor="middle" font-size="10" fill="#5a6b86" font-family="Oswald">${YEAR + t}</text>`;
    }
    xlab += `<text x="${sx(xMax).toFixed(1)}" y="${H - 12}" text-anchor="end" font-size="10" fill="#1f7a4d" font-family="Oswald">${TARGET} · $0</text>`;

    const svg = `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="National debt burning down to zero over ${PAYOFF} years">
      <defs><linearGradient id="debtFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(200,16,46,0.35)"/><stop offset="100%" stop-color="rgba(200,16,46,0.04)"/>
      </linearGradient></defs>
      ${grid}${xlab}
      <path d="${area}" fill="url(#debtFill)" stroke="none"/>
      <path d="${line}" fill="none" stroke="#c8102e" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="${intLine}" fill="none" stroke="#2a6df4" stroke-width="2" stroke-dasharray="5 4"/>
    </svg>`;

    // amortization table — every 5 years + the payoff year
    const picks = rows.filter((r) => r.year === 1 || r.year % 5 === 0 || r.year === PAYOFF);
    const trows = picks.map((r) => `<tr>
      <td>${YEAR + r.year - 1}<small>yr ${r.year}</small></td>
      <td class="num">${money(r.interest + r.principal)}</td>
      <td class="num int">${money(r.interest)}</td>
      <td class="num prin">${money(r.principal)}</td>
      <td class="num">${money(Math.max(0, r.end))}</td>
    </tr>`).join("");

    el.innerHTML = `
      <div class="center" style="max-width:740px">
        <span class="eyebrow" data-reveal>The burndown</span>
        <h2 class="section-title" data-reveal>Watch the debt burn down</h2>
        <p class="section-lead" data-reveal>The red area is the national debt shrinking to zero; the dashed blue line is the annual interest bill falling as we go. The curve steepens because every dollar of principal retired means less interest next year.</p>
      </div>
      <div class="burndown-card" data-reveal>
        ${svg}
        <div class="legend">
          <span><i style="background:var(--red)"></i> Debt remaining</span>
          <span><i style="background:var(--blue)"></i> Annual interest (declining)</span>
        </div>
      </div>

      <h3 class="amort-title" data-reveal>Amortization — every 5 years</h3>
      <div class="amort-wrap" data-reveal>
        <table class="amort-table">
          <thead><tr><th>Year</th><th class="num">Debt service</th><th class="num">To interest</th><th class="num">To principal</th><th class="num">Debt remaining</th></tr></thead>
          <tbody>${trows}</tbody>
          <tfoot><tr><td>Totals over ${PAYOFF} yrs</td><td class="num">${money(totalInterest + DEBT0)}</td><td class="num int">${money(totalInterest)}</td><td class="num prin">${money(DEBT0)}</td><td class="num">$0</td></tr></tfoot>
        </table>
      </div>
      <p class="amort-note" data-reveal>Each year we put a steady <strong>${money(SERVICE)}</strong> toward the debt. Early on most is interest; by the end almost all of it retires principal. All figures are simplified, illustrative estimates at a 3% interest rate — real rates, growth, and a rising surplus would change the pace.</p>`;
  })();

  /* ---- presidents: deficit/surplus track record ---- */
  (function renderPresidents() {
    const el = document.getElementById("deficitPrez");
    if (!el || !P.presidents) return;
    const data = P.presidents;
    const W = 860, H = 380, padL = 46, padR = 18, padT = 28, padB = 74;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const top = 2, bot = -8;
    const y = (v) => padT + ((top - v) / (top - bot)) * plotH;
    const zero = y(0), slot = plotW / data.length, bw = slot * 0.56;

    let grid = "";
    for (let g = top; g >= bot; g -= 2) {
      const yy = y(g);
      grid += `<line x1="${padL}" y1="${yy.toFixed(1)}" x2="${W - padR}" y2="${yy.toFixed(1)}" stroke="${g === 0 ? "#0b2545" : "#e2e8f2"}" stroke-width="${g === 0 ? 1.5 : 1}"/>`;
      grid += `<text x="${padL - 6}" y="${(yy + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="#5a6b86" font-family="Oswald">${g > 0 ? "+" : ""}${g}%</text>`;
    }
    let bars = "";
    data.forEach((d, i) => {
      const cx = padL + slot * i + slot / 2, x = cx - bw / 2, yv = y(d.bal);
      const barY = d.bal >= 0 ? yv : zero, barH = Math.abs(yv - zero);
      const color = d.bal >= 0 ? "#1f7a4d" : "#c8102e";
      if (d.soon) {
        bars += `<rect x="${x.toFixed(1)}" y="${barY.toFixed(1)}" width="${bw.toFixed(1)}" height="${barH.toFixed(1)}" rx="3" fill="rgba(31,122,77,0.15)" stroke="#1f7a4d" stroke-width="2" stroke-dasharray="5 4"/>`;
        bars += `<text x="${cx.toFixed(1)}" y="${(barY - 18).toFixed(1)}" text-anchor="middle" font-size="9" fill="#1f7a4d" font-family="Oswald">+${d.bal}%</text>`;
        bars += `<text x="${cx.toFixed(1)}" y="${(barY - 7).toFixed(1)}" text-anchor="middle" font-size="8" fill="#1f7a4d" font-family="Oswald" font-weight="700">SOON</text>`;
      } else {
        bars += `<rect x="${x.toFixed(1)}" y="${barY.toFixed(1)}" width="${bw.toFixed(1)}" height="${barH.toFixed(1)}" rx="3" fill="${color}"/>`;
        const lblY = d.bal >= 0 ? barY - 7 : barY + barH + 12;
        bars += `<text x="${cx.toFixed(1)}" y="${lblY.toFixed(1)}" text-anchor="middle" font-size="9" fill="${color}" font-family="Oswald">${d.bal > 0 ? "+" : ""}${d.bal}%</text>`;
      }
      bars += `<text x="${cx.toFixed(1)}" y="${(H - padB + 20).toFixed(1)}" text-anchor="middle" font-size="9.5" fill="#11203a" font-family="Oswald" font-weight="600">${esc(d.name)}</text>`;
      bars += `<text x="${cx.toFixed(1)}" y="${(H - padB + 33).toFixed(1)}" text-anchor="middle" font-size="8" fill="#5a6b86">${esc(d.years)}</text>`;
    });
    const svg = `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Average annual deficit or surplus by president, share of GDP">${grid}${bars}</svg>`;
    el.innerHTML = `
      <div class="center" style="max-width:780px">
        <span class="eyebrow" data-reveal>The track record</span>
        <h2 class="section-title" data-reveal>How presidents stack up</h2>
        <p class="section-lead" data-reveal>Average annual federal deficit or surplus during each presidency, as a share of GDP. For 50 years almost everyone has run deficits — only Clinton came near balance. Ours, dotted, is the promise: a real surplus.</p>
      </div>
      <div class="burndown-card" data-reveal>${svg}
        <div class="legend">
          <span><i style="background:#c8102e"></i> Deficit</span>
          <span><i style="background:#1f7a4d"></i> Surplus</span>
          <span><i style="border:2px dashed #1f7a4d;background:none;height:11px;width:14px;border-radius:2px"></i> Avery (coming soon)</span>
        </div>
      </div>
      <p class="amort-note" data-reveal>Rounded, illustrative averages over each term (negative = deficit). Avery's bar is a projection from this platform's surplus, shown dotted until it's real.</p>`;
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
