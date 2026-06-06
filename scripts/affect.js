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
    // 3b) universal pre-K for young kids — a free public benefit (value, not cash you paid)
    if (kids > 0) items.push({ label: "Universal pre-K & after-school", sub: `${kids} child${kids > 1 ? "ren" : ""} × ~$4,500 of free care`, amt: kids * 4500, free: true });
    // 3c) free trade / community college — a free benefit if someone would use it
    if ($("af-college") && $("af-college").checked) items.push({ label: "Free trade & community college", sub: "a year's tuition value, debt-free", amt: 7000, free: true });

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

  let MODE = "all"; // "all" = include free benefits; "direct" = direct cash only

  function render() {
    const items = compute();
    const counts = (it) => MODE === "all" || !it.free;
    const net = items.reduce((s, it) => s + (counts(it) ? it.amt : 0), 0);

    const netEl = $("afNet");
    netEl.textContent = signed(net);
    netEl.className = "big " + (net >= 0 ? "gain" : "loss");
    $("afNetSub").textContent = MODE === "all"
      ? (net >= 0 ? "ahead per year, counting the free benefits you'd get" : "the yearly cost to you, after free benefits")
      : (net >= 0 ? "in direct dollars saved/earned per year" : "in direct dollars out of pocket per year");

    $("afList").innerHTML = items.map((it) => {
      const excluded = it.free && MODE === "direct";
      const cls = it.amt > 1 ? "gain" : (it.amt < -1 ? "loss" : "flat");
      const amt = Math.abs(it.amt) < 1 ? "—" : signed(it.amt);
      const tag = it.free ? ` <span class="ml-free-tag">free benefit</span>` : "";
      return `<div class="me-line${excluded ? " excluded" : ""}">
        <span class="ml-label">${it.label}${tag}<small>${it.sub}</small></span>
        <span class="ml-amt ${cls}">${amt}</span>
      </div>`;
    }).join("");

    const hasFree = items.some((it) => it.free);
    $("afNote").innerHTML = MODE === "all"
      ? (net >= 0
        ? "Most working and middle-class households come out ahead: the bills you pay today (premiums, childcare, loan payments) shrink or vanish, and the value of free public benefits is added on top."
        : "Households that owe more here tend to be high earners, owners of multiple homes, or the ultra-wealthy — the groups the revenue plan asks to pay more so everyone else gains.")
      : (hasFree
        ? "Direct-dollars view: this counts only cash that moves in or out of your pocket. The struck-through 'free benefit' lines (like pre-K or free college) are real value you'd receive, but they're not direct cash, so they're excluded here."
        : "Direct-dollars view: cash in and out of your pocket only.");
  }

  /* toggle: direct cash vs. including free benefits */
  const toggle = $("meToggle");
  if (toggle) toggle.addEventListener("click", (e) => {
    const b = e.target.closest(".me-tg");
    if (!b) return;
    MODE = b.dataset.mode;
    toggle.querySelectorAll(".me-tg").forEach((x) => x.classList.toggle("active", x === b));
    render();
  });

  /* ---- show/hide conditional fields ---- */
  function syncFields() {
    const h = $("af-housing").value;
    $("wrap-homeval").classList.toggle("me-hidden", h === "rent");
    $("wrap-extra").classList.toggle("me-hidden", h !== "ownmulti");
  }

  /* ---- shareable URL state ---- */
  const FIELD_IDS = ["af-filing", "af-income", "af-kids", "af-health", "af-childcare", "af-debt", "af-housing", "af-homeval", "af-extrahomes", "af-college", "af-wage", "af-networth"];
  function serialize() {
    const params = new URLSearchParams();
    FIELD_IDS.forEach((id) => {
      const el = $(id); if (!el) return;
      const key = id.slice(3);
      if (el.type === "checkbox") { if (el.checked) params.set(key, "1"); }
      else if (el.value !== "") params.set(key, el.value);
    });
    if (MODE && MODE !== "all") params.set("mode", MODE);
    return "#" + params.toString();
  }
  function restore() {
    const h = location.hash.replace(/^#/, "");
    if (!h || h.indexOf("=") < 0) return;
    const params = new URLSearchParams(h);
    FIELD_IDS.forEach((id) => {
      const el = $(id); if (!el) return;
      const key = id.slice(3);
      if (el.type === "checkbox") el.checked = params.get(key) === "1";
      else if (params.has(key)) el.value = params.get(key);
    });
    if (params.get("mode") === "direct") {
      MODE = "direct";
      const t = $("meToggle");
      if (t) t.querySelectorAll(".me-tg").forEach((x) => x.classList.toggle("active", x.dataset.mode === "direct"));
    }
  }

  const form = $("meForm");
  if (form) {
    form.addEventListener("input", () => { syncFields(); render(); });
    form.addEventListener("change", () => { syncFields(); render(); });
    restore();
    syncFields();
    render();

    const note = $("afNote");
    if (note) {
      const share = document.createElement("button");
      share.type = "button";
      share.className = "me-share";
      share.textContent = "🔗 Copy my results link";
      note.after(share);
      share.addEventListener("click", () => {
        const hash = serialize();
        history.replaceState(null, "", location.pathname + hash);
        const url = location.origin + location.pathname + hash;
        const done = () => { share.textContent = "✓ Link copied!"; setTimeout(() => { share.textContent = "🔗 Copy my results link"; }, 1700); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, () => prompt("Copy this link:", url));
        else prompt("Copy this link:", url);
      });
    }
  }
})();
