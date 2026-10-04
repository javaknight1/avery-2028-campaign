/* =========================================================
   Federal income-tax brackets (single filer; doubled for married).

   Shared by the "check your own number" widget on the homepage and the
   full household calculator on /affect, so the two can never quietly
   disagree about what the plan actually does to your taxes.
   ========================================================= */
window.TAXBRACKETS = (function () {
  const STD_DEDUCTION = 14600; // 2024 single

  // Current law, 2024 statutory brackets.
  const CURRENT = [
    { min: 0, rate: 10 }, { min: 11600, rate: 12 }, { min: 47150, rate: 22 },
    { min: 100525, rate: 24 }, { min: 191950, rate: 32 },
    { min: 243725, rate: 35 }, { min: 609350, rate: 37 },
  ];

  // The platform: unchanged up to $400k, then three new upper brackets.
  const AVERY = [
    { min: 0, rate: 10 }, { min: 11600, rate: 12 }, { min: 47150, rate: 22 },
    { min: 100525, rate: 24 }, { min: 191950, rate: 32 },
    { min: 400000, rate: 42 }, { min: 1000000, rate: 45 }, { min: 5000000, rate: 50 },
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
  return { STD_DEDUCTION, CURRENT, AVERY, scale, taxFor };
})();
