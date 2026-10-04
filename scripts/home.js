/* =========================================================
   Homepage interactions.

   The point of this site is that you can check it, not just read it.
   A visitor who only scrolls never finds that out, so the three live
   tools come to them: a household number, the real debt, and the tax
   model — all answering instantly, in place, before anyone clicks.
   ========================================================= */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  if (!$("startHere")) return;

  const TB = window.TAXBRACKETS;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const usd = (n) => "$" + Math.round(Math.abs(n)).toLocaleString("en-US");

  /* ---------------------------------------------------------
     1. Your own number — the same brackets /affect runs, inline.
     --------------------------------------------------------- */
  const incomeEl = $("shIncome"), filingEl = $("shFiling"), outEl = $("shOut");

  function runCalc() {
    const raw = Number(String(incomeEl.value).replace(/[^0-9]/g, "")) || 0;
    const k = filingEl.value === "married" ? 2 : 1;
    const taxable = Math.max(0, raw - TB.STD_DEDUCTION * k);
    const delta = TB.taxFor(taxable, TB.scale(TB.AVERY, k)) - TB.taxFor(taxable, TB.scale(TB.CURRENT, k));

    let verdict, cls;
    if (delta > 1) { verdict = `your federal income tax goes up <b>${usd(delta)}</b> a year`; cls = "up"; }
    else if (delta < -1) { verdict = `your federal income tax falls <b>${usd(delta)}</b> a year`; cls = "down"; }
    else { verdict = "your federal income tax <b>doesn't change at all</b>"; cls = "flat"; }

    outEl.className = "sh-out " + cls;
    outEl.innerHTML =
      `<span class="sh-verdict">On ${usd(raw)}, ${verdict}.</span>` +
      `<span class="sh-note">Before counting healthcare, childcare and tuition you'd stop paying for.</span>`;
  }

  // keep the thousands separators readable while typing
  incomeEl.addEventListener("input", () => {
    const pos = incomeEl.selectionStart, before = incomeEl.value.length;
    const n = String(incomeEl.value).replace(/[^0-9]/g, "");
    incomeEl.value = n ? Number(n).toLocaleString("en-US") : "";
    const after = incomeEl.value.length;
    incomeEl.setSelectionRange(Math.max(0, pos + (after - before)), Math.max(0, pos + (after - before)));
    runCalc();
  });
  filingEl.addEventListener("change", runCalc);
  runCalc();

  /* ---------------------------------------------------------
     2. The debt, live from the U.S. Treasury.
     Starts from the published figure and advances at the real
     deficit rate, so the number on screen is never staler than
     the moment you loaded the page.
     --------------------------------------------------------- */
  const debtEl = $("shDebt"), debtNote = $("shDebtNote"), yearsEl = $("shYears");
  const FALLBACK_DEBT = 40260e9;           // matches data/policies.js fiscal.debtToday (Treasury, 2026-10-01)
  const DEFICIT_PER_SEC = 1.8e12 / 31557600; // $1.8T/yr, the current deficit
  const SURPLUS_PER_YEAR = 278e9;

  let debt0 = FALLBACK_DEBT, t0 = performance.now(), live = false;

  const renderDebt = (v) => {
    debtEl.textContent = "$" + v.toLocaleString("en-US", { maximumFractionDigits: 0 });
  };
  const tick = () => {
    renderDebt(debt0 + DEFICIT_PER_SEC * ((performance.now() - t0) / 1000));
    if (!reduced) requestAnimationFrame(tick);
  };

  const setYears = () => {
    // Plain payoff horizon: the surplus against the debt, interest aside.
    // The full interest-aware model lives on /deficit.
    yearsEl.textContent = Math.ceil(debt0 / SURPLUS_PER_YEAR) + " years";
  };

  renderDebt(debt0); setYears();
  if (!reduced) requestAnimationFrame(tick);

  (async () => {
    const url = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/" +
      "debt_to_penny?fields=record_date,tot_pub_debt_out_amt&sort=-record_date&page%5Bsize%5D=1";
    try {
      const ctrl = new AbortController();
      const to = setTimeout(() => ctrl.abort(), 7000);
      const res = await fetch(url, { signal: ctrl.signal });
      clearTimeout(to);
      const j = await res.json();
      const v = parseFloat(j.data[0].tot_pub_debt_out_amt);
      if (isFinite(v) && v > 0) {
        debt0 = v; t0 = performance.now(); live = true;
        setYears();
        if (reduced) renderDebt(debt0);
        debtNote.innerHTML = `Live from the U.S. Treasury, ${j.data[0].record_date}. ` +
          `<a href="deficit">See the full burndown</a>.`;
      }
    } catch (_) {
      debtNote.innerHTML = `Treasury feed unreachable — showing the last known figure. ` +
        `<a href="deficit">See the full burndown</a>.`;
    }
  })();

  /* ---------------------------------------------------------
     3. The tax model, answering instantly.
     Same engine the Tax Lab runs, on the real IRS-shaped
     distribution — so the preview is a result, not a picture.
     --------------------------------------------------------- */
  const labEls = [...document.querySelectorAll("[data-lab]")];
  const labOut = $("shLabOut"), labBar = $("shLabBar");
  const LAB = { current: 2200, flat20: 1823, flat15: 1367 }; // $B, verified by npm run check
  const LABEL = { current: "Current law", flat20: "A flat 20% tax", flat15: "A flat 15% tax" };

  function setLab(key) {
    const v = LAB[key], diff = v - LAB.current;
    labEls.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lab === key)));
    labBar.style.setProperty("--w", (v / LAB.current) * 100 + "%");
    labBar.classList.toggle("short", diff < 0);
    labOut.innerHTML = `<b>$${(v / 1000).toFixed(2)}T</b> a year` +
      (diff === 0 ? `<span>${LABEL[key]} — today's baseline.</span>`
                  : `<span>${LABEL[key]} raises <b>${usd(Math.abs(diff))}B less</b>. That gap is the argument.</span>`);
  }
  labEls.forEach((b) => b.addEventListener("click", () => setLab(b.dataset.lab)));
  setLab("current");
})();
