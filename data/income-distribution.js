/* =========================================================
   Tax Lab — data model
   A simplified, IRS-SOI-style distribution of U.S. individual
   income-tax returns by Adjusted Gross Income (AGI), used to
   estimate federal *individual income tax* revenue under any
   bracket schedule.

   Numbers are approximate, rounded, and meant for education —
   not official estimates. Returns are in MILLIONS; avgAGI is the
   representative average AGI within each band (US dollars).

   Sources/inspiration: IRS Statistics of Income (SOI) individual
   return data and Treasury receipts (recent years). Calibrated so
   that current-law output matches real-world collections — see
   CALIBRATION below.
   ========================================================= */
window.TAXDATA = (function () {
  // [lower, upper, returnsMillions, avgAGI]
  const BINS = [
    [0,        10000,    16.0,    5000],
    [10000,    20000,    16.0,    15000],
    [20000,    30000,    15.0,    25000],
    [30000,    40000,    13.0,    35000],
    [40000,    50000,    11.0,    45000],
    [50000,    75000,    21.0,    62000],
    [75000,    100000,   15.5,    87000],
    [100000,   200000,   30.0,    135000],
    [200000,   500000,   9.5,     290000],
    [500000,   1000000,  1.7,     680000],
    [1000000,  2000000,  0.7,     1350000],
    [2000000,  5000000,  0.35,    3000000],
    [5000000,  10000000, 0.09,    6800000],
    [10000000, Infinity, 0.05,    28000000],
  ].map(([lo, hi, returns, avgAGI]) => ({ lo, hi, returns, avgAGI }));

  // Current-law 2024 statutory brackets (single-filer equivalent).
  // {min, rate} — rate (percent) applies on income from `min` up to the next `min`.
  const CURRENT_BRACKETS = [
    { min: 0,       rate: 10 },
    { min: 11600,   rate: 12 },
    { min: 47150,   rate: 22 },
    { min: 100525,  rate: 24 },
    { min: 191950,  rate: 32 },
    { min: 243725,  rate: 35 },
    { min: 609350,  rate: 37 },
  ];

  const CURRENT_STD_DEDUCTION = 14600; // 2024 single

  // Real-world target: recent federal INDIVIDUAL income tax receipts (~$2.2T).
  // We tune a single calibration factor so the model's current-law output
  // equals this, then apply the SAME factor to the user's plan. The factor
  // (< 1) stands in for credits, itemized deductions, joint filing, and
  // avoidance that a single-filer-on-AGI model can't see directly.
  const ACTUAL_CURRENT_REVENUE = 2200; // billions of dollars

  return { BINS, CURRENT_BRACKETS, CURRENT_STD_DEDUCTION, ACTUAL_CURRENT_REVENUE };
})();
