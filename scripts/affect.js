/* =========================================================
   "How does this affect me?" — a simplified, illustrative
   personal-impact calculator for the Avery platform.
   All math runs locally; nothing is stored or sent.
   ========================================================= */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const num = (id) => Number(String(($(id) || {}).value || "").replace(/[^0-9.]/g, "")) || 0;
  const fmt = (n) => "$" + Math.round(Math.abs(n)).toLocaleString("en-US");
  const signed = (n) => (n >= 0 ? "+" : "−") + fmt(n);

  /* ---- income-tax schedules (single-filer; doubled for married) ---- */
  const CURRENT = [
    { min: 0, rate: 10 }, { min: 11600, rate: 12 }, { min: 47150, rate: 22 },
    { min: 100525, rate: 24 }, { min: 191950, rate: 32 }, { min: 243725, rate: 35 }, { min: 609350, rate: 37 },
  ];
  const AVERY = [
    { min: 0, rate: 10 }, { min: 11600, rate: 12 }, { min: 47150, rate: 22 }, { min: 100525, rate: 24 },
    { min: 191950, rate: 32 }, { min: 400000, rate: 42 }, { min: 1000000, rate: 45 }, { min: 5000000, rate: 50 },
  ];
  const scale = (br, k) => br.map((b) => ({ min: b.min * k, rate: b.rate }));
  function taxFor(income, br) {
    let t = 0;
    for (let i = 0; i < br.length; i++) {
      if (income <= br[i].min) break;
      const hi = i + 1 < br.length ? br[i + 1].min : Infinity;
      t += (Math.min(income, hi) - br[i].min) * br[i].rate / 100;
    }
    return t;
  }

  const PRIMARY_HOME_BREAK = 1800;   // illustrative annual property-tax relief on your primary residence
  const SECOND_HOME_RATE = 0.01;     // surtax per additional home, on value

  function compute() {
    const filing = ($("af-filing").value === "married") ? "married" : "single";
    const k = filing === "married" ? 2 : 1;
    const stdDed = 14600 * k;
    const income = num("af-income");
    const kids = Math.max(0, Math.round(num("af-kids")));
    const health = num("af-health");
    const childcare = num("af-childcare");
    const debt = num("af-debt");
    const housing = $("af-housing").value;
    const homeVal = num("af-homeval");
    const extra = Math.max(0, Math.round(num("af-extrahomes")));
    const wage = num("af-wage");
    const networth = num("af-networth");

    const items = [];
    const taxable = Math.max(0, income - stdDed);

    // 1) income tax change (negative delta = you pay less = a gain)
    const taxDelta = taxFor(taxable, scale(AVERY, k)) - taxFor(taxable, scale(CURRENT, k));
    items.push({
      label: "Federal income tax", sub: taxDelta > 1
        ? "higher rates kick in over $400k"
        : (taxDelta < -1 ? "you'd owe a bit less" : "essentially unchanged for you"),
      amt: -taxDelta, // gain if you pay less
    });

    // 2) healthcare — premiums & out-of-pocket eliminated
    if (health > 0) items.push({ label: "Universal healthcare", sub: "premiums & out-of-pocket you pay now → $0", amt: health });

    // 3) childcare — capped at 7% of income
    if (kids > 0 && childcare > 0) {
      const save = Math.max(0, childcare - 0.07 * income);
      if (save > 0) items.push({ label: "Childcare cap (7% of income)", sub: "the part above the cap is covered", amt: save });
    }
    // 3b) universal pre-K for young kids (illustrative per-child value)
    if (kids > 0) items.push({ label: "Universal pre-K & after-school", sub: `${kids} child${kids > 1 ? "ren" : ""} × ~$4,500 of free care`, amt: kids * 4500 });

    // 4) student-debt relief (illustrative annual benefit)
    if (debt > 0) items.push({ label: "Student-debt relief", sub: "payments capped, balance forgiven over time", amt: Math.round(debt * 0.05) });

    // 5) housing / property tax — break on your primary home, surtax on the rest
    const ownsPrimary = housing === "own1" || housing === "ownmulti";
    if (ownsPrimary) {
      const eligible = income < (filing === "married" ? 250000 : 150000) && homeVal > 0 && homeVal < 600000;
      items.push({
        label: "Primary-home property-tax break",
        sub: eligible ? "relief on the home you actually live in" : "over the income/home-value limits — not eligible",
        amt: eligible ? PRIMARY_HOME_BREAK : 0,
      });
    }
    if (housing === "ownmulti" && extra > 0) {
      const surtax = extra * Math.max(homeVal, 200000) * SECOND_HOME_RATE;
      items.push({ label: `Surtax on ${extra} additional home${extra > 1 ? "s" : ""}`, sub: "extra annual property tax on homes beyond your primary", amt: -surtax });
    }

    // 6) $15 minimum wage raise
    if (wage > 0 && wage < 15) {
      const raise = (15 - wage) * 2080;
      items.push({ label: "$15 minimum wage", sub: `from $${wage.toFixed(2)} → $15/hr, full-time`, amt: raise });
    }

    // 7) billionaire wealth tax (only over $10B)
    if (networth > 10e9) {
      items.push({ label: "Billionaire wealth tax", sub: "2% on the part of your fortune over $10B", amt: -(networth - 10e9) * 0.02 });
    }

    return items;
  }

  function render() {
    const items = compute();
    const net = items.reduce((s, it) => s + it.amt, 0);
    const netEl = $("afNet");
    netEl.textContent = signed(net);
    netEl.className = "big " + (net >= 0 ? "gain" : "loss");
    $("afNetSub").textContent = net >= 0
      ? "you'd come out ahead by about this much a year"
      : "this is roughly what it would cost you a year";

    $("afList").innerHTML = items.map((it) => {
      const cls = it.amt > 1 ? "gain" : (it.amt < -1 ? "loss" : "flat");
      const amt = Math.abs(it.amt) < 1 ? "—" : signed(it.amt);
      return `<div class="me-line">
        <span class="ml-label">${it.label}<small>${it.sub}</small></span>
        <span class="ml-amt ${cls}">${amt}</span>
      </div>`;
    }).join("");

    $("afNote").innerHTML = net >= 0
      ? "Most working and middle-class households come out ahead: the value of guaranteed healthcare, childcare, and education outweighs any tax change. The big bills you pay today (premiums, childcare, loan payments) shrink or disappear."
      : "Households that owe more here tend to be high earners, owners of multiple homes, or the ultra-wealthy — the groups the revenue plan asks to pay more so everyone else can gain.";
  }

  /* ---- show/hide conditional fields ---- */
  function syncFields() {
    const h = $("af-housing").value;
    $("wrap-homeval").classList.toggle("me-hidden", h === "rent");
    $("wrap-extra").classList.toggle("me-hidden", h !== "ownmulti");
  }

  const form = $("meForm");
  if (form) {
    form.addEventListener("input", () => { syncFields(); render(); });
    form.addEventListener("change", () => { syncFields(); render(); });
    syncFields();
    render();
  }
})();
