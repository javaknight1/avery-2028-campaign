/* =========================================================
   Democratic primary — calendar, expectations, delegate math,
   and ballot-access requirements. Illustrative: the DNC hasn't
   set the 2028 calendar, so this follows the 2024 order.
   ========================================================= */
window.PRIMARY = {
  totalPledged: 3936,        // ~pledged delegates (2024 scale)
  delegatesNeeded: 1969,     // simple majority of pledged delegates
  threshold: 15,             // % needed in a contest to win any delegates

  phases: [
    { when: "The early states", goal: "Beat expectations, build momentum", detail: "South Carolina, New Hampshire, Nevada, and Michigan set the storyline. The job isn't to run the table — it's to over-perform, prove a broad coalition, and leave with momentum and money." },
    { when: "Super Tuesday", goal: "Bank a delegate lead", detail: "About sixteen states vote at once — including California and Texas — roughly a third of all delegates in a single day. Clear the 15% viability bar everywhere and win the big, diverse states." },
    { when: "March – May", goal: "Build toward the majority", detail: "The industrial Midwest, the South, and the Mountain West. Keep clearing 15%, win where we're strong, and stay ahead of the pace a pledged majority requires." },
    { when: "June + the Convention", goal: "Clinch and unify", detail: "The final primaries push us past the majority line. Arrive at the August convention with the delegates locked and the party united." },
  ],

  calendar: [
    { date: "Feb 5, 2028", contest: "South Carolina", type: "Primary", delegates: 55, target: "Win", tier: "early" },
    { date: "Feb 8, 2028", contest: "New Hampshire", type: "Primary", delegates: 33, target: "Top two", tier: "early" },
    { date: "Feb 12, 2028", contest: "Nevada", type: "Primary", delegates: 36, target: "Win", tier: "early" },
    { date: "Feb 27, 2028", contest: "Michigan", type: "Primary", delegates: 117, target: "Win", tier: "early" },
    { date: "Mar 7, 2028", contest: "Super Tuesday — 16 states (incl. CA, TX, NC, VA, MA, MN, CO)", type: "Primaries", delegates: 1420, target: "Take the delegate lead", tier: "super" },
    { date: "Mar 10–24, 2028", contest: "GA, MS, WA, AZ, FL, IL, OH & more", type: "Primaries", delegates: 900, target: "Extend the lead", tier: "mid" },
    { date: "April 2028", contest: "WI, PA, NY & the Northeast", type: "Primaries", delegates: 700, target: "Approach the majority", tier: "mid" },
    { date: "May 2028", contest: "IN, KY, OR, NE & more", type: "Primaries", delegates: 400, target: "Clinch the majority", tier: "mid" },
    { date: "June 2028", contest: "NJ & the final primaries", type: "Primaries", delegates: 275, target: "Lock it up", tier: "final" },
    { date: "Aug 2028", contest: "Democratic National Convention", type: "Convention", delegates: 0, target: "Nomination & unity", tier: "convention" },
  ],

  ballotAccess: {
    note: "Getting on each Democratic primary ballot is set state-by-state — usually a filing fee, a petition of voter signatures, or both, by a deadline in late 2027. The figures below are illustrative; the commitment is to verify each state's rules and file early in all 50.",
    rows: [
      { state: "South Carolina", deadline: "Nov 2027", req: "State-party filing fee" },
      { state: "New Hampshire", deadline: "Nov 2027", req: "$1,000 fee to the Secretary of State" },
      { state: "Nevada", deadline: "Dec 2027", req: "State-party filing + fee" },
      { state: "California", deadline: "Dec 2027", req: "Recognized-candidate listing, or ~3,300 signatures" },
      { state: "Texas", deadline: "Dec 2027", req: "$2,500 fee or 5,000 signatures" },
      { state: "Illinois", deadline: "Dec 2027", req: "3,000–5,000 nominating signatures" },
      { state: "New York", deadline: "Jan 2028", req: "State-committee listing or petition" },
      { state: "Ohio", deadline: "Dec 2027", req: "1,000 signatures + filing fee" },
      { state: "Every other state", deadline: "Late 2027 – early 2028", req: "Fee and/or petition — filed on time, all 50" },
    ],
  },
};
