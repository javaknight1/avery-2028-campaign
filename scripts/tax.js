/* =========================================================
   Tax Lab — engine + interactive UI + charts
   Depends on window.TAXDATA (data/income-distribution.js).
   ========================================================= */
(() => {
  "use strict";
  const D = window.TAXDATA;
  if (!D) return;

  const $ = (s, c = document) => c.querySelector(s);
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  const parseNum = (s) => Number(String(s).replace(/[^0-9.]/g, "")) || 0;
  const fmtInt = (n) => Math.round(n).toLocaleString("en-US");
  const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
  const fmtB = (b) => (b >= 1000 ? "$" + (b / 1000).toFixed(2) + "T" : "$" + Math.round(b) + "B");

  /* ---------- tax math ---------- */
  // tax owed on a given *taxable* income under a sorted marginal schedule
  function taxFor(income, brackets) {
    let tax = 0;
    for (let i = 0; i < brackets.length; i++) {
      const lo = brackets[i].min;
      if (income <= lo) break;
      const hi = i + 1 < brackets.length ? brackets[i + 1].min : Infinity;
      const amt = Math.min(income, hi) - lo;
      if (amt > 0) tax += (amt * brackets[i].rate) / 100;
    }
    return tax;
  }

  // total federal individual income tax (billions, RAW/uncalibrated)
  function rawRevenue(brackets, deduction) {
    let total = 0;
    for (const bin of D.BINS) {
      const taxable = Math.max(0, bin.avgAGI - deduction);
      total += taxFor(taxable, brackets) * bin.returns * 1e6;
    }
    return total / 1e9;
  }

  // Calibrate once so current-law output == real collections.
  const rawCurrent = rawRevenue(D.CURRENT_BRACKETS, D.CURRENT_STD_DEDUCTION);
  const FACTOR = D.ACTUAL_CURRENT_REVENUE / rawCurrent;
  const CURRENT_REVENUE = rawCurrent * FACTOR; // == ACTUAL by construction

  /* ---------- presets ---------- */
  const PRESETS = [
    { name: "Current law", ded: 14600, brackets: D.CURRENT_BRACKETS.map((b) => ({ ...b })) },
    { name: "★ Avery plan · higher top rates", ded: 14600, brackets: [
      { min: 0, rate: 10 }, { min: 11600, rate: 12 }, { min: 47150, rate: 22 },
      { min: 100525, rate: 24 }, { min: 191950, rate: 32 }, { min: 400000, rate: 42 },
      { min: 1000000, rate: 45 }, { min: 5000000, rate: 50 },
    ] },
    { name: "Flat 15%", ded: 14600, brackets: [{ min: 0, rate: 15 }] },
    { name: "Flat 20% · big deduction", ded: 40000, brackets: [{ min: 0, rate: 20 }] },
    { name: "Simple two-rate", ded: 15000, brackets: [{ min: 0, rate: 10 }, { min: 60000, rate: 25 }] },
    { name: "More progressive", ded: 0, brackets: [
      { min: 0, rate: 0 }, { min: 15000, rate: 10 }, { min: 50000, rate: 20 },
      { min: 120000, rate: 30 }, { min: 250000, rate: 40 }, { min: 1000000, rate: 50 },
    ] },
  ];

  /* ---------- state / DOM ---------- */
  const rowsEl = $("#bracketRows");
  const dedInput = $("#deduction");
  const warnEl = $("#warn");
  const presetsEl = $("#presets");

  function renderPresets() {
    presetsEl.innerHTML = PRESETS.map((p, i) =>
      `<button class="preset${i === 0 ? " active" : ""}" data-preset="${i}">${p.name}</button>`).join("");
  }

  function renderRows(brackets) {
    rowsEl.innerHTML = brackets.map((b, i) => {
      const first = i === 0;
      const next = brackets[i + 1];
      const upTo = next ? "$" + fmtInt(next.min) : "and up";
      return `<div class="bracket-row" data-i="${i}">
        <div class="cell ${first ? "locked" : ""}"><span>$</span>
          <input class="th" type="text" inputmode="numeric" value="${first ? "0" : fmtInt(b.min)}" ${first ? "disabled" : ""} aria-label="Bracket ${i + 1} lower threshold" /></div>
        <div class="cell locked"><input class="up" type="text" value="${upTo}" disabled aria-label="Bracket ${i + 1} upper bound" /></div>
        <div class="cell"><input class="rate" type="number" min="0" max="100" step="1" value="${b.rate}" aria-label="Bracket ${i + 1} marginal rate percent" /><span>%</span></div>
        <button class="row-del" data-del="${i}" ${brackets.length <= 1 ? "disabled" : ""} aria-label="Remove bracket ${i + 1}">×</button>
      </div>`;
    }).join("");
  }

  // read current DOM into {list (dom order), sorted (for compute)}
  function readDOM() {
    const rows = [...rowsEl.querySelectorAll(".bracket-row")];
    const list = rows.map((row, idx) => ({
      min: idx === 0 ? 0 : parseNum(row.querySelector(".th").value),
      rate: clamp(parseFloat(row.querySelector(".rate").value) || 0, 0, 100),
    }));
    const sorted = [...list].sort((a, b) => a.min - b.min);
    return { list, sorted };
  }

  function setPlan(brackets, deduction) {
    renderRows(brackets.map((b) => ({ ...b })));
    if (deduction != null) dedInput.value = fmtInt(deduction);
    recompute();
  }

  /* ---------- compute + paint ---------- */
  let lastYou = CURRENT_REVENUE;

  function recompute() {
    const { list, sorted } = readDOM();
    const deduction = parseNum(dedInput.value);

    // validation (non-blocking)
    let warn = "";
    for (let i = 1; i < list.length; i++) {
      if (list[i].min <= 0) { warn = "Each bracket after the first needs a threshold above $0."; break; }
    }
    const mins = sorted.map((b) => b.min);
    if (!warn && new Set(mins).size !== mins.length) warn = "Two brackets share the same threshold — nudge one up.";
    warnEl.textContent = warn;

    const youRaw = rawRevenue(sorted, deduction);
    const you = youRaw * FACTOR;

    // big number (animated)
    animateNumber($("#revYou"), lastYou, you);
    lastYou = you;

    // delta
    const diff = you - CURRENT_REVENUE;
    const deltaEl = $("#delta");
    const pct = CURRENT_REVENUE ? Math.round((diff / CURRENT_REVENUE) * 100) : 0;
    if (Math.abs(diff) < 2) {
      deltaEl.className = "delta flat";
      deltaEl.textContent = "≈ same as current law";
    } else {
      deltaEl.className = "delta " + (diff > 0 ? "up" : "down");
      deltaEl.textContent = `${diff > 0 ? "+" : "−"}${fmtB(Math.abs(diff))} vs current law (${diff > 0 ? "+" : "−"}${Math.abs(pct)}%)`;
    }

    // compare bars
    const scale = Math.max(you, CURRENT_REVENUE) * 1.06 || 1;
    $("#barYou").style.width = (you / scale) * 100 + "%";
    $("#barCur").style.width = (CURRENT_REVENUE / scale) * 100 + "%";
    $("#valYou").textContent = fmtB(you);
    $("#valCur").textContent = fmtB(CURRENT_REVENUE);

    // effective-rate table (schedule only, pre-calibration — what the schedule charges)
    const samples = [30000, 60000, 100000, 250000, 1000000];
    $("#effTable tbody").innerHTML = samples.map((inc) => {
      const cur = taxFor(Math.max(0, inc - D.CURRENT_STD_DEDUCTION), D.CURRENT_BRACKETS) / inc;
      const you2 = taxFor(Math.max(0, inc - deduction), sorted) / inc;
      return `<tr><td>$${fmtInt(inc)}</td><td>${(cur * 100).toFixed(1)}%</td><td class="you">${(you2 * 100).toFixed(1)}%</td></tr>`;
    }).join("");

    // marginal rate chart
    drawRateChart(sorted);
  }

  function animateNumber(el, from, to) {
    if (prefersReduced) { el.textContent = fmtB(to); return; }
    const t0 = performance.now(), dur = 450;
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 3);
      el.textContent = fmtB(from + (to - from) * e);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- SVG marginal-rate chart ---------- */
  function drawRateChart(userBrackets) {
    const svg = $("#chartRates");
    const W = 520, H = 240, padL = 38, padR = 12, padT = 14, padB = 26;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const xMax = 650000;
    const allRates = [...userBrackets, ...D.CURRENT_BRACKETS].map((b) => b.rate);
    let yMax = Math.max(40, Math.ceil(Math.max(...allRates) / 10) * 10);

    const sx = (v) => padL + (clamp(v, 0, xMax) / xMax) * plotW;
    const sy = (r) => padT + (1 - r / yMax) * plotH;

    const stepPath = (brackets) => {
      const pts = [[0, brackets[0].rate]];
      for (let i = 1; i < brackets.length; i++) {
        if (brackets[i].min > xMax) break;
        pts.push([brackets[i].min, brackets[i - 1].rate]);
        pts.push([brackets[i].min, brackets[i].rate]);
      }
      pts.push([xMax, brackets[brackets.length - 1].rate]);
      return pts.map((p, i) => (i ? "L" : "M") + sx(p[0]).toFixed(1) + "," + sy(p[1]).toFixed(1)).join(" ");
    };

    // gridlines + y labels
    let grid = "";
    for (let r = 0; r <= yMax; r += 10) {
      const y = sy(r);
      grid += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="#e2e8f2" stroke-width="1"/>`;
      grid += `<text x="${padL - 6}" y="${y + 4}" text-anchor="end" font-size="10" fill="#5a6b86" font-family="Oswald">${r}%</text>`;
    }
    // x labels
    let xlab = "";
    [0, 200000, 400000, 600000].forEach((v) => {
      xlab += `<text x="${sx(v)}" y="${H - 8}" text-anchor="middle" font-size="10" fill="#5a6b86" font-family="Oswald">$${v / 1000}k</text>`;
    });

    svg.innerHTML = grid + xlab +
      `<path d="${stepPath(D.CURRENT_BRACKETS)}" fill="none" stroke="#0b2545" stroke-width="2" stroke-dasharray="5 4" opacity="0.8"/>` +
      `<path d="${stepPath(userBrackets)}" fill="none" stroke="#c8102e" stroke-width="2.6" stroke-linejoin="round"/>`;
  }

  /* ---------- events ---------- */
  function clearActivePreset() { presetsEl.querySelectorAll(".preset").forEach((p) => p.classList.remove("active")); }

  rowsEl.addEventListener("input", (e) => {
    if (e.target.classList.contains("th") || e.target.classList.contains("rate")) {
      clearActivePreset();
      recompute();
    }
  });
  // tidy + re-sort on blur
  rowsEl.addEventListener("change", (e) => {
    if (e.target.classList.contains("th") || e.target.classList.contains("rate")) {
      const { sorted } = readDOM();
      renderRows(sorted);
      recompute();
    }
  });
  rowsEl.addEventListener("click", (e) => {
    const del = e.target.closest("[data-del]");
    if (!del || del.disabled) return;
    const { list } = readDOM();
    list.splice(Number(del.dataset.del), 1);
    if (list.length) list[0].min = 0;
    clearActivePreset();
    renderRows(list);
    recompute();
  });

  $("#addBracket").addEventListener("click", () => {
    const { list } = readDOM();
    const maxMin = Math.max(...list.map((b) => b.min));
    list.push({ min: maxMin + 50000, rate: clamp(list[list.length - 1].rate + 5, 0, 100) });
    clearActivePreset();
    renderRows(list.sort((a, b) => a.min - b.min));
    recompute();
  });

  $("#resetBtn").addEventListener("click", () => {
    renderPresets();
    setPlan(PRESETS[0].brackets, PRESETS[0].ded);
  });

  dedInput.addEventListener("input", () => { clearActivePreset(); recompute(); });
  dedInput.addEventListener("change", () => { dedInput.value = fmtInt(parseNum(dedInput.value)); recompute(); });

  presetsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-preset]");
    if (!btn) return;
    clearActivePreset();
    btn.classList.add("active");
    const p = PRESETS[Number(btn.dataset.preset)];
    setPlan(p.brackets, p.ded);
  });

  /* ---------- shareable URL state ---------- */
  function planToHash() {
    const { sorted } = readDOM();
    const b = sorted.map((x) => `${Math.round(x.min)}-${x.rate}`).join("_");
    return `#d=${parseNum(dedInput.value)}&b=${b}`;
  }
  function hashToPlan() {
    const h = location.hash.replace(/^#/, "");
    if (!h.includes("b=")) return null;
    const params = new URLSearchParams(h);
    const raw = params.get("b");
    if (!raw) return null;
    const brackets = raw.split("_").map((pair) => {
      const [min, rate] = pair.split("-");
      return { min: parseNum(min), rate: clamp(parseFloat(rate) || 0, 0, 100) };
    }).filter((x) => !isNaN(x.min));
    if (!brackets.length) return null;
    brackets.sort((a, b) => a.min - b.min);
    brackets[0].min = 0;
    return { brackets, ded: params.has("d") ? parseNum(params.get("d")) : 14600 };
  }

  /* ---------- init ---------- */
  renderPresets();
  const shared = hashToPlan();
  if (shared) { setPlan(shared.brackets, shared.ded); clearActivePreset(); }
  else setPlan(PRESETS[0].brackets, PRESETS[0].ded);
  lastYou = CURRENT_REVENUE; // start the big-number animation from current
  recompute();

  // "Share this plan" button (injected next to Reset)
  const resetBtn = $("#resetBtn");
  if (resetBtn) {
    const shareBtn = document.createElement("button");
    shareBtn.type = "button";
    shareBtn.id = "shareBtn";
    shareBtn.className = resetBtn.className;
    shareBtn.textContent = "🔗 Share this plan";
    resetBtn.after(shareBtn);
    shareBtn.addEventListener("click", () => {
      const hash = planToHash();
      history.replaceState(null, "", location.pathname + hash);
      const url = location.origin + location.pathname + hash;
      const done = () => { shareBtn.textContent = "✓ Link copied!"; setTimeout(() => { shareBtn.textContent = "🔗 Share this plan"; }, 1700); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => prompt("Copy this link:", url));
      else prompt("Copy this link:", url);
    });
  }
})();
