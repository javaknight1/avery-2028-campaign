/* =========================================================
   Rob Avery 2028 — full policy platform (single source of truth)
   The Issues page and "The Honest Budget" both render from this.

   cost: annual figure in BILLIONS of dollars (illustrative, educational).
   costType: "spend" | "revenue" | "neutral"
   costNote: short transparency note shown beside the figure.
   ========================================================= */
window.PLATFORM = {
  categories: [
    { id: "care",      name: "Care & Opportunity", blurb: "The floor every family stands on — health, learning, housing, and income." },
    { id: "democracy", name: "Democracy & Rights",  blurb: "Make the government answer to people, and protect the rights of every one of them." },
    { id: "economy",   name: "Economy & Workers",   blurb: "Reward work, rebalance power, and ask the biggest winners to pay their share." },
    { id: "future",    name: "Building the Future",  blurb: "The big, generational projects — energy, transit, and a better measure of how we're doing." },
  ],

  policies: [
    /* ---------------- CARE & OPPORTUNITY ---------------- */
    {
      id: "healthcare", cat: "care", icon: "🩺",
      title: "Universal Healthcare", tagline: "Health care is a right, not a bill.",
      cost: 1400, costType: "spend", costNote: "net new federal — replaces most premiums, copays & deductibles; total U.S. health spending falls",
      lead: "Every American gets comprehensive coverage from birth — doctor visits, hospital care, mental health, dental, vision, prescriptions, and long-term care — with no premiums, no deductibles, and no surprise bills. You keep your doctors; you lose the paperwork and the fear.",
      plan: [
        { b: "Medicare for All.", t: "A single public plan covers everyone. Private supplemental coverage stays legal, but nobody needs it for the essentials." },
        { b: "Zero out-of-pocket for essential care.", t: "No premiums, no deductibles, no copays for primary, emergency, maternal, and mental-health care." },
        { b: "Negotiate every drug price.", t: "Medicare negotiates across the board; insulin and inhalers capped at $5." },
        { b: "Cover the gaps.", t: "Dental, vision, hearing, reproductive care, and long-term care are included, not add-ons." },
        { b: "Pay providers fairly, fast.", t: "Doctors and hospitals get one payer, prompt payment, and a fraction of today's billing overhead." },
      ],
      detail: [
        { h: "Why it costs less overall", p: "The U.S. spends ~18% of GDP on health — far more than any peer — largely on administration and inflated prices. One payer with real negotiating power cuts total national spending even as coverage expands." },
        { h: "What happens to your insurance", p: "Employer premiums and payroll deductions go away; that money shifts into a public system you can't be dropped from when you get sick or change jobs." },
        { h: "Transition, not a cliff", p: "Phased in over four years, starting by lowering the Medicare age and auto-enrolling the uninsured, so nobody loses care during the switch." },
      ],
      qa: [
        { q: "Will I lose my doctor?", a: "No. Unlike narrow private networks, a universal plan covers essentially every provider, so you can see any doctor or hospital that takes Medicare — which is almost all of them." },
        { q: "Won't my taxes go up?", a: "For most families, new taxes are smaller than the premiums, deductibles, and copays they replace — so the typical household pays less in total, not more. We show the math openly in The Honest Budget below." },
        { q: "Will there be long waits?", a: "Americans already wait — and millions simply go without. Funding capacity (more providers, clinics, and training slots) is built into the plan so access expands with coverage." },
      ],
      aisle: {
        rep: "Worry about cost, taxes, and government control of medicine; prefer market competition, price transparency, and choice. Many support capping drug prices and ending surprise bills.",
        dem: "Broadly favor universal coverage; the debate is single-payer vs. a public option. Strong support for drug-price negotiation and zero-cost essential care.",
        ind: "Focused on their own bill and their own doctor. Supportive if it clearly lowers what they pay and lets them keep their providers; wary of disruption.",
        response: "I'll make you one promise and keep it in public: your total cost of care goes down and your choice of doctor goes up. We phase it in, we measure it, and if a piece isn't working we say so and fix it.",
      },
    },
    {
      id: "education", cat: "care", icon: "🎓",
      title: "Education Overhaul (K–12 & Beyond)", tagline: "Every kid leaves high school with a plan — and a head start on it.",
      cost: 180, costType: "spend", costNote: "incl. universal pre-K, teacher pay floor, K–12 modernization, free trade & community college",
      lead: "We rebuild education from kindergarten up around one goal: by the time a student finishes high school, they've either started a career or have a funded, concrete plan to. College isn't the only road — and as AI changes the return on a four-year degree, it shouldn't be.",
      plan: [
        { b: "Universal pre-K and after-school.", t: "Free, full-day early education and after-school care as a public service for working parents." },
        { b: "A modern K–12 core.", t: "Stronger reading and math foundations, plus real instruction in money, civics, technology, and how to learn — for a world that keeps changing." },
        { b: "Career & trade pathways in high school.", t: "Every student can pursue apprenticeships, certifications, or college credit before they graduate." },
        { b: "Free accredited trade schools.", t: "Welding, electrical, nursing, HVAC, coding — debt-free, because skilled trades are the backbone of the economy." },
        { b: "Free community college, for life.", t: "Tuition-free up to a generous lifetime credit limit, so you can retrain whenever the economy shifts under you." },
        { b: "Free dual enrollment.", t: "When a high-schooler takes an accredited college course for both high-school and college credit, the state covers it — a free head start on a degree." },
        { b: "A teacher pay floor.", t: "No teacher earns below the local cost of a decent living. Pay the profession like the essential job it is." },
      ],
      detail: [
        { h: "Why not free four-year college", p: "It's costly and regressive, and the ROI on a generic degree is falling. We fund the highest-return rungs — trades, community college, and dual enrollment — and keep income-based repayment and targeted relief for existing borrowers." },
        { h: "The 'plan at graduation' guarantee", p: "Every senior works with a counselor toward a funded next step: a job, an apprenticeship, a trade program, or college credit already in hand. No one is dropped off a cliff at 18." },
        { h: "Local schools, federal dollars", p: "Curriculum and schools stay locally governed. The federal role is money — pre-K seats, teacher pay top-ups, and free post-secondary skills — not running classrooms from D.C." },
      ],
      qa: [
        { q: "Is this a federal takeover of schools?", a: "No. Schools and curriculum remain state and local. Washington funds pre-K, tops up teacher pay, and makes trade and community college free — the decisions stay close to home." },
        { q: "Why fold 'free college' into education?", a: "Because the smart version of free college is free trades, free community college, and free dual enrollment — the rungs with the best return — rather than a blanket subsidy for four-year tuition." },
        { q: "What about current student debt?", a: "We cap payments as a small share of income, forgive remaining balances after a set period, and fix the broken forgiveness programs — while making the debt-free pathways the default going forward." },
      ],
      aisle: {
        rep: "Champion vocational training, school choice, and local control; like free trades and dual enrollment. Resist broad federal spending and blanket debt cancellation.",
        dem: "Support universal pre-K, free college, and higher teacher pay; some want free four-year college and full debt cancellation.",
        ind: "Pragmatic: love early childhood, trades, and a clear path out of high school; want it targeted, local, and paid for.",
        response: "This is the rare plan the trades caucus and the teachers' union can both cheer. Free skills, local schools, and a guarantee that no kid graduates without a real next step. It's opportunity conservatives and progressives can sign together.",
      },
    },
    {
      id: "housing", cat: "care", icon: "🏠",
      title: "Housing for Everyone", tagline: "A safe, affordable home within reach of every American.",
      cost: 150, costType: "spend", costNote: "social housing + expanded vouchers + construction & zoning incentives",
      lead: "Housing is the bill that breaks the most families. We attack it from every side: build millions of homes, make rent affordable, end veteran and family homelessness, and treat a stable home as the foundation everything else is built on.",
      plan: [
        { b: "Build 5 million homes.", t: "A federal–local partnership that rewards cities for legalizing housing, funds the trades to build it, and unlocks public land for mixed-income development." },
        { b: "A permanent social-housing sector.", t: "Publicly-backed, mixed-income housing that stays affordable forever — not luxury units with a few 'affordable' tokens." },
        { b: "Rent you can afford.", t: "Expand housing vouchers to everyone who qualifies and cap rent increases on federally-backed units." },
        { b: "End homelessness with housing first.", t: "Get people housed first, then wrap services around them — the approach proven to work and to save money." },
        { b: "Protect buyers and renters.", t: "Crack down on price-fixing rent algorithms and Wall Street's bulk-buying of family homes." },
      ],
      detail: [
        { h: "Supply is the cure", p: "Rents fall when there are enough homes. The fastest lever is to stop blocking construction — money follows the cities that say yes to housing." },
        { h: "Why social housing", p: "Permanently-affordable, publicly-backed homes break the cycle where every 'affordable' unit eventually converts to market-rate and the shortage returns." },
        { h: "Homelessness is cheaper to solve", p: "A chronically homeless person costs the public far more in ER visits, shelters, and jails than simply providing housing and support." },
      ],
      qa: [
        { q: "Can Washington really fix local housing?", a: "It can't zone your town — but it can pay towns that build and stop subsidizing those that block. Money follows permits issued, which flips the incentives fast." },
        { q: "Won't building this much cost a fortune?", a: "Most homes are built with private capital unlocked by zoning reform and public land; federal dollars seed social housing and vouchers. The cost of doing nothing — rising rents and homelessness — is higher." },
      ],
      aisle: {
        rep: "Favor cutting zoning red tape and letting builders build; wary of rent caps and large new federal housing programs.",
        dem: "Back social housing, voucher expansion, and tenant protections; some prioritize public construction over incentives.",
        ind: "Just want rent and home prices to stop climbing; supportive of whatever measurably increases supply and lowers cost.",
        response: "Deregulate construction like a conservative; guarantee affordability like a progressive. We make it dramatically easier to build, and we make sure enough of what gets built stays within reach of working people.",
      },
    },
    {
      id: "childcare", cat: "care", icon: "🍼",
      title: "Universal Childcare & Paid Leave", tagline: "Raising kids shouldn't cost a second mortgage.",
      cost: 300, costType: "spend", costNote: "capped/free childcare + 12 weeks guaranteed paid family & medical leave",
      lead: "In much of the country, childcare costs more than rent or college. We cap it, make it free for lower-income families, and guarantee paid leave so no parent has to choose between a paycheck and a newborn.",
      plan: [
        { b: "Cap childcare costs.", t: "No family pays more than 7% of income for childcare; it's free for lower-income households." },
        { b: "12 weeks of paid family & medical leave.", t: "Guaranteed for every worker — new parents, caregivers, and people facing a serious illness." },
        { b: "Pay early educators a living wage.", t: "Childcare workers are educators; fund them like it so quality and supply rise together." },
        { b: "Choice of provider.", t: "Funds work across public, private, home-based, and faith-based providers — parents choose." },
      ],
      detail: [
        { h: "Why it pays for itself", p: "Affordable childcare lets millions of parents — mostly mothers — stay in the workforce, raising incomes, tax revenue, and lifetime earnings." },
        { h: "Leave that everyone gets", p: "The U.S. is the only wealthy nation without guaranteed paid leave. We fund it through a small shared insurance contribution, like Social Security." },
      ],
      qa: [
        { q: "Is the government raising my kids?", a: "No — you choose the provider, including faith-based and home-based care. The program pays the bill; you make the decisions." },
        { q: "Who pays for paid leave?", a: "A small payroll insurance contribution shared across all employers and workers, the same model that makes Social Security work — pennies in, real security out." },
      ],
      aisle: {
        rep: "Increasingly open to pro-family policy and provider choice; prefer tax credits and flexibility over a federal program.",
        dem: "Strongly support universal childcare, paid leave, and living wages for early educators.",
        ind: "Feel the cost directly; supportive if it's affordable, flexible, and lets them pick their own provider.",
        response: "This is pro-family and pro-work at the same time. Whether you want parents home with a newborn or back at a job they love, the barrier is the same — cost — and we take it down.",
      },
    },
    {
      id: "ubi", cat: "care", icon: "💵",
      title: "Universal Basic Income", tagline: "A floor no American falls beneath.",
      cost: 3000, costType: "spend", costNote: "$1,000/mo per adult; partly offsets existing programs; paired with a tax overhaul where incomes under $250k owe no federal income tax",
      lead: "Every American adult gets $1,000 a month, no strings attached — a stable floor under a fast-changing economy. As automation and AI reshape work, a dividend gives people the security to retrain, start a business, care for family, or simply not live one emergency from ruin. It comes with a tax overhaul: if you earn under $250,000, you pay no federal income tax at all.",
      plan: [
        { b: "$1,000 a month, every adult.", t: "Universal and unconditional — a dividend on being a citizen of a wealthy nation, not a means-tested benefit with a cliff." },
        { b: "No income tax under $250,000.", t: "Rebuild the income tax so the vast majority of Americans owe nothing, and the dividend lands on top of their full paycheck." },
        { b: "Stack it sensibly.", t: "People keep existing benefits or take the dividend, whichever helps more — no one is made worse off." },
        { b: "Fund it broadly.", t: "Paid for with a value-added tax, the AI tax, the financial-transaction tax, and higher rates on the very top — sources tied to the automation creating the need." },
      ],
      detail: [
        { h: "Why universal, not means-tested", p: "Universal payments have no benefit cliffs, no humiliating paperwork, and near-zero fraud. Everyone gets it; the tax code claws it back from those who don't need it." },
        { h: "The honest price", p: "This is the single most expensive plank — roughly $3 trillion a year. We don't hide that. The funding mix and the trade-offs are laid out in full in The Honest Budget, and it phases in over time." },
        { h: "Why now", p: "AI is poised to displace millions of jobs while concentrating the gains. A dividend shares the upside of automation with the people whose work made it possible." },
      ],
      qa: [
        { q: "Won't people stop working?", a: "Pilots from Alaska to Stockton show people mostly keep working — and use the stability to find better jobs, start businesses, or go back to school. $12,000 a year is a floor, not a hammock." },
        { q: "Isn't this wildly expensive?", a: "Yes — it's the costliest plank by far, and we say so plainly. It's funded by a VAT, the AI and transaction taxes, and top-end rates, and it's phased in. Use the Tax Lab to see the trade-offs yourself." },
        { q: "Won't it just cause inflation?", a: "A VAT-funded dividend recycles money rather than printing it, and much of it is spent on goods whose supply we're expanding (housing, energy). We'd phase in and watch prices closely." },
      ],
      aisle: {
        rep: "Some libertarians like replacing bureaucratic welfare with simple cash; most worry about cost, work incentives, and dependency.",
        dem: "Split between UBI and targeted benefits/jobs guarantees; many prefer expanding existing programs first.",
        ind: "Intrigued and skeptical: love the security and simplicity, want hard proof it won't blow up the budget or prices.",
        response: "This is the boldest — and priciest — idea on the platform, so it gets the most honesty. We phase it in, fund it from the automation that creates the need, and measure work and prices every step. If the data says adjust, we adjust.",
      },
    },
    {
      id: "social-security", cat: "care", icon: "👵",
      title: "Expand & Protect Social Security", tagline: "Strengthen the promise — and make the rich pay in like everyone else.",
      cost: 150, costType: "neutral", costNote: "benefit increase fully funded by lifting the payroll-tax cap on high incomes",
      lead: "Social Security is the most successful anti-poverty program in American history, and it's underfunded for the future. We raise benefits, protect them from cuts, and pay for it by ending the loophole that lets high earners stop contributing partway through the year.",
      plan: [
        { b: "Raise benefits.", t: "Boost monthly checks, especially for the lowest-income retirees, and use a cost-of-living measure that reflects what seniors actually buy." },
        { b: "Lift the payroll cap.", t: "Today wages above ~$168k aren't taxed for Social Security. Apply the tax to high incomes so the wealthy pay the same rate as a teacher." },
        { b: "No cuts, no privatization.", t: "Lock in the program against benefit cuts and risky privatization schemes." },
        { b: "Fund it for 75 years.", t: "Restore long-term solvency so younger workers know it will be there for them too." },
      ],
      detail: [
        { h: "Self-funding by design", p: "Lifting the cap raises roughly what the benefit increase costs — so the plank strengthens the program without adding to the deficit." },
        { h: "Fairness", p: "A nurse pays Social Security tax on every dollar she earns; a CEO stops paying in February. Closing that gap is simple fairness." },
      ],
      qa: [
        { q: "Is Social Security going bankrupt?", a: "Not bankrupt, but on track to only cover part of promised benefits within about a decade. Lifting the cap closes most of the gap and lets us raise benefits at the same time." },
        { q: "Will my taxes go up?", a: "Not unless you earn well over $168,000 a year. For ~94% of workers, nothing changes except a bigger check in retirement." },
      ],
      aisle: {
        rep: "Protective of seniors' benefits but resistant to tax increases; some favor raising the retirement age instead.",
        dem: "Strongly support expanding benefits and lifting the cap on the wealthy.",
        ind: "Want the program solvent and benefits protected; lifting the cap polls well across the spectrum.",
        response: "Don't cut the most popular program in America — fund it. Ask the highest earners to pay the same rate everyone else already does, and we can raise benefits and secure the program for our kids in one move.",
      },
    },

    /* ---------------- DEMOCRACY & RIGHTS ---------------- */
    {
      id: "term-limits", cat: "democracy", icon: "⏳",
      title: "Term Limits for Congress", tagline: "Public service, not a lifetime career.",
      cost: 0, costType: "neutral", costNote: "constitutional amendment — negligible cost",
      lead: "Congress shouldn't be a career you hold for forty years. We push a constitutional amendment for term limits so power keeps changing hands and representatives stay connected to the people they serve.",
      plan: [
        { b: "12 years in each chamber.", t: "A cap of roughly six terms in the House and two in the Senate, via constitutional amendment." },
        { b: "Ban congressional stock trading.", t: "Members and their families can't trade individual stocks while in office — no profiting from insider knowledge." },
        { b: "Cooling-off before lobbying.", t: "A multi-year ban on cashing out into lobbying the moment you leave office." },
      ],
      detail: [
        { h: "Why an amendment", p: "The Supreme Court has ruled Congress can't impose its own term limits by statute, so it takes a constitutional amendment — a high bar we'll fight to clear." },
        { h: "Keeping expertise", p: "Term limits move power from a handful of decades-long incumbents back toward voters, while a strong, nonpartisan professional staff preserves institutional know-how." },
      ],
      qa: [
        { q: "Don't we lose experienced legislators?", a: "Twelve years is plenty to master the job. We pair limits with stronger nonpartisan staff so expertise lives in the institution, not in a few untouchable incumbents." },
        { q: "Is this even possible?", a: "It requires a constitutional amendment, which is hard by design. But term limits are wildly popular across every party — it's exactly the kind of fight worth leading." },
      ],
      aisle: {
        rep: "Broadly supportive — term limits are a long-standing conservative cause.",
        dem: "Mixed at the leadership level, but rank-and-file voters strongly support them.",
        ind: "Overwhelmingly in favor; it's one of the most popular reforms in the country.",
        response: "This is one of the few ideas a supermajority of Americans agree on. The people who'll resist it most are the ones it limits — which tells you exactly why it's needed.",
      },
    },
    {
      id: "money-politics", cat: "democracy", icon: "🏛️",
      title: "Get Money Out of Politics", tagline: "A democracy of voters, not donors.",
      cost: 10, costType: "spend", costNote: "small-donor public matching fund",
      lead: "When a handful of billionaires and corporations can drown out everyone else, it isn't really one-person-one-vote anymore. We overturn Citizens United, empower small donors, and end the legalized influence-peddling that makes people distrust the whole system.",
      plan: [
        { b: "Overturn Citizens United.", t: "A constitutional amendment making clear that money isn't speech and corporations aren't people." },
        { b: "Public small-donor matching.", t: "Match small contributions at a high ratio so a candidate funded by $20 donors can compete with one funded by mega-donors." },
        { b: "Real transparency.", t: "End dark money — every dollar of political spending disclosed, fast and in full." },
        { b: "Close the revolving door.", t: "Tougher lobbying limits and the congressional stock-trading ban from the term-limits plank." },
      ],
      detail: [
        { h: "Why matching works", p: "When small donations are matched many-to-one, candidates spend their time with ordinary constituents instead of dialing billionaires — and more regular people can run and win." },
        { h: "Following the money", p: "Even where we can't ban spending, we can expose it. Instant, complete disclosure lets voters see exactly who's trying to buy what." },
      ],
      qa: [
        { q: "Doesn't the First Amendment protect this spending?", a: "The Court said so in Citizens United, which is why this needs a constitutional amendment. Plenty of free speech survives; what ends is the idea that unlimited corporate money equals protected speech." },
        { q: "Won't public financing waste tax money?", a: "It's a tiny fraction of the budget — and the return is enormous: policy written for voters instead of donors saves far more than it costs in giveaways prevented." },
      ],
      aisle: {
        rep: "Skeptical of public financing and of limits framed as speech restrictions; many do support transparency and a stock-trading ban.",
        dem: "Strongly back overturning Citizens United and small-donor matching.",
        ind: "Deeply distrust money in politics; reforms here poll well across party lines.",
        response: "You can love free markets and still hate a rigged one. Whatever your politics, a government auctioned to the highest bidder doesn't represent you. Let's put it back in the hands of voters.",
      },
    },
    {
      id: "voting", cat: "democracy", icon: "🗳️",
      title: "Voting & Democracy Reform", tagline: "Make it easy to vote and hard to cheat the map.",
      cost: 6, costType: "spend", costNote: "election infrastructure & administration grants",
      lead: "A strong democracy makes voting simple, secure, and fair. We register every eligible citizen automatically, make Election Day a holiday, end the partisan gerrymanders that let politicians pick their voters, and grant the people of D.C. the representation they pay for.",
      plan: [
        { b: "Automatic voter registration.", t: "Every eligible citizen registered automatically, with easy opt-out — secure, accurate rolls and higher turnout." },
        { b: "Election Day holiday.", t: "Make it a national holiday and expand early and mail voting so no one chooses between a shift and a ballot." },
        { b: "End partisan gerrymandering.", t: "Independent redistricting commissions draw fair maps; politicians stop drawing their own districts." },
        { b: "D.C. statehood.", t: "Over 700,000 taxpaying Americans deserve full representation." },
        { b: "Secure, auditable elections.", t: "Paper-ballot backups and routine audits in every state, so results are both trusted and verifiable." },
      ],
      detail: [
        { h: "Easy and secure aren't opposites", p: "Modern registration and routine audits make rolls more accurate and results more verifiable at the same time. Access and integrity rise together." },
        { h: "Fair maps", p: "Independent commissions — used successfully in several states — take map-drawing out of incumbents' hands and end the practice of safe seats chosen in back rooms." },
      ],
      qa: [
        { q: "Does this make fraud easier?", a: "No. Automatic registration plus paper backups and audits make elections both more accessible and more secure than today's patchwork — accurate rolls are harder to game, not easier." },
        { q: "Why D.C. statehood?", a: "Its residents pay federal taxes and serve in the military but have no voting representation in Congress. Statehood simply gives taxpaying citizens the representation everyone else has." },
      ],
      aisle: {
        rep: "Emphasize election security and oppose measures they see as federalizing state-run elections or favoring one party (e.g., D.C. statehood).",
        dem: "Strongly support automatic registration, anti-gerrymandering, and D.C. statehood.",
        ind: "Hate gerrymandering and barriers to voting; broadly favor making elections both easy and secure.",
        response: "Here's the deal both sides should take: we make it effortless for every eligible citizen to vote, and rock-solid to verify every result. Access and integrity aren't enemies — a confident democracy delivers both.",
      },
    },
    {
      id: "rights", cat: "democracy", icon: "⚖️",
      title: "Reproductive & LGBTQ+ Rights", tagline: "Your freedom over your own life and body.",
      cost: 2, costType: "spend", costNote: "mostly legislative; modest funding for clinics & enforcement",
      lead: "Freedom means the government doesn't get to decide your most personal choices — who you love, who you are, or what happens to your own body. We codify those rights into federal law so they don't depend on which way a court is leaning this year.",
      plan: [
        { b: "Codify reproductive freedom.", t: "Restore and protect the right to abortion and contraception nationwide, in federal statute." },
        { b: "Pass the Equality Act.", t: "Explicit federal protection from discrimination based on sexual orientation and gender identity — in jobs, housing, and services." },
        { b: "Protect privacy.", t: "Shield personal medical and reproductive data from being weaponized against people." },
        { b: "Respect every family.", t: "Protect marriage equality and the families built on it." },
      ],
      detail: [
        { h: "Why codify", p: "Rights that rest only on court precedent can vanish overnight. Writing them into federal law makes them durable and consistent from state to state." },
        { h: "Freedom is the frame", p: "This is fundamentally about limiting government power over private life — the right to make your own choices without the state in the room." },
      ],
      qa: [
        { q: "Isn't abortion a state issue now?", a: "After Roe was overturned, rights vary wildly by zip code and change with each election. Federal codification restores a consistent national floor of freedom." },
        { q: "What does the Equality Act actually do?", a: "It updates civil-rights law to clearly bar discrimination based on sexual orientation and gender identity — the same protections that already exist for race, religion, and sex." },
      ],
      aisle: {
        rep: "Generally favor state-level decisions on abortion and have varied views on the Equality Act; some emphasize religious-liberty protections.",
        dem: "Strongly support codifying reproductive rights and passing the Equality Act.",
        ind: "Largely support keeping the government out of personal medical decisions and oppose discrimination.",
        response: "Whatever you'd choose for your own family, this is about whether the government gets to choose for everyone else's. I trust people to run their own lives — and I'll defend that freedom in law, not leave it to chance.",
      },
    },
    {
      id: "justice", cat: "democracy", icon: "🤝",
      title: "Justice Reform", tagline: "Safety and fairness — we can have both.",
      cost: 15, costType: "spend", costNote: "reentry, public defense, mental-health response, record expungement",
      lead: "A justice system should protect people and treat them fairly. We hold police to high standards, end the cash-bail system that jails people for being poor, legalize cannabis and clear the records it created, and invest in what actually prevents crime.",
      plan: [
        { b: "Police accountability.", t: "National standards on use of force, a misconduct registry so bad actors can't just move departments, and funding for training and community policing." },
        { b: "End cash bail.", t: "Stop jailing people before trial simply because they can't pay; use risk-based release instead." },
        { b: "Legalize cannabis & expunge records.", t: "Legalize nationwide, regulate it, and automatically clear past convictions that ruin job and housing prospects." },
        { b: "Invest in prevention.", t: "Fund mental-health crisis responders, violence interruption, addiction treatment, and reentry programs that cut repeat offenses." },
      ],
      detail: [
        { h: "Why cash bail is broken", p: "It jails the poor and frees the wealthy regardless of risk, costs people their jobs and homes before any conviction, and doesn't make anyone safer." },
        { h: "Prevention pays", p: "Treatment, violence interruption, and reentry programs cut crime more cheaply and durably than incarceration alone — fewer victims and lower costs." },
      ],
      qa: [
        { q: "Is this 'defund the police'?", a: "No. It funds better policing — training, standards, and accountability — and adds mental-health responders so officers aren't sent to every crisis. Real safety and real fairness, together." },
        { q: "Won't ending cash bail release dangerous people?", a: "Risk-based release keeps genuinely dangerous defendants detained while freeing low-risk people who today sit in jail only because they're poor. It targets danger, not poverty." },
      ],
      aisle: {
        rep: "Prioritize public safety and back the blue; many support cannabis federalism, expungement, and reentry, but resist measures seen as anti-police.",
        dem: "Support accountability, ending cash bail, legalization, and prevention investment.",
        ind: "Want both safety and fairness; favor accountability and treatment over pure incarceration.",
        response: "Backing good cops and demanding accountability for bad ones is the same position. We give police the training and support to do a hard job right — and we stop jailing people for being poor or for something now legal in half the country.",
      },
    },
    {
      id: "immigration", cat: "democracy", icon: "🗽",
      title: "Immigration Reform", tagline: "Secure, humane, and finally functional.",
      cost: 25, costType: "spend", costNote: "system modernization & processing; largely offset by new taxpayers over time",
      lead: "Our immigration system is broken in every direction — cruel to families, frustrating for employers, and impossible to navigate. We fix it: a real path to citizenship, modern legal immigration, an orderly border, and an end to a status quo that serves no one.",
      plan: [
        { b: "A path to citizenship.", t: "Earned legal status and a path to citizenship for long-settled, law-abiding immigrants, including Dreamers." },
        { b: "Modernize legal immigration.", t: "Clear the backlogs, expand visas for the workers and families our economy needs, and make the legal route actually usable." },
        { b: "An orderly, humane border.", t: "Invest in technology, more judges to end years-long case backlogs, and fast, fair asylum decisions." },
        { b: "Keep families together.", t: "End family separation and treat people seeking a better life with basic dignity." },
      ],
      detail: [
        { h: "Why it pays off", p: "Bringing millions of workers fully into the tax base, and letting employers hire legally, grows the economy and shrinks deficits over time — immigration reform is a net fiscal positive in most analyses." },
        { h: "Order through capacity", p: "Most border chaos comes from a system too under-resourced to process cases. More judges and faster decisions create order far better than backlog and limbo." },
      ],
      qa: [
        { q: "Isn't this amnesty?", a: "It's an earned path — background checks, paying taxes, and time — for people already living and working here, paired with a functioning legal system so future immigration is orderly." },
        { q: "What about the border?", a: "A humane system is also an orderly one: technology, enough judges to decide cases quickly, and fast asylum rulings replace the chaos of endless backlogs." },
      ],
      aisle: {
        rep: "Prioritize border security and enforcement first; divided on citizenship, though many support legal status for Dreamers.",
        dem: "Support a path to citizenship, Dreamer protections, and a humane system.",
        ind: "Want both a secure border and a workable legal system; frustrated by decades of gridlock.",
        response: "Secure and humane aren't opposites — a functioning system delivers both. We fund an orderly border and we give the people who've built lives here a way to earn their place. The only thing the broken status quo serves is the next campaign ad.",
      },
    },

    {
      id: "communities", cat: "democracy", icon: "🪶",
      title: "Restoration & Community Investment", tagline: "Keep our promises to the people this country has wronged.",
      cost: 120, costType: "spend", costNote: "baby bonds, honored treaty & trust obligations, IHS funding, and community investment",
      lead: "America has made real promises to people it then failed — and in some cases actively harmed. We don't fix that with a speech. We fix it with investment: honoring treaties, closing wealth gaps, and putting real resources into the Black, Native American, Native Hawaiian, Puerto Rican, and other communities this country has mistreated — designed with those communities, not handed down to them.",
      plan: [
        { b: "Honor Native treaties and sovereignty.", t: "Fully fund the Indian Health Service, the obligations the U.S. agreed to and broke, tribal self-governance, and infrastructure — clean water, housing, and broadband — on reservations." },
        { b: "Justice for Puerto Rico.", t: "Respect the islanders' right to decide their own status, deliver debt relief, rebuild the grid, and end the unequal treatment in federal programs that shortchanges 3 million U.S. citizens." },
        { b: "Stand with Native Hawaiians.", t: "Support Hawaiian Home Lands, cultural and language preservation, and a fair process for federal recognition and self-determination." },
        { b: "Close the racial wealth gap.", t: "'Baby bonds' — a public nest egg for every child that grows larger for poorer families — plus fair lending, homeownership, and capital for businesses long denied it. Invest in HBCUs and historically underserved neighborhoods." },
        { b: "Tell the truth and study what's owed.", t: "A serious, honest commission to examine specific historical harms and recommend concrete, lasting remedies." },
      ],
      detail: [
        { h: "Investment, designed together", p: "These plans are built with the communities they serve, not imposed on them. Self-determination is the principle: resources and authority, so people can rebuild on their own terms." },
        { h: "Why baby bonds", p: "A child's odds in life shouldn't be set by the wealth they're born into. A growing public nest egg — larger for the poorest families — gives every young adult a real stake: a down payment, tuition, or seed capital." },
        { h: "Promises are debts", p: "Treaties are the supreme law of the land, and federal trust obligations are legal commitments — not charity. Honoring them is keeping America's word." },
      ],
      qa: [
        { q: "Is this reparations?", a: "For some communities it includes restorative investment, yes — but the plank is broader: honoring legal treaty and trust obligations, closing wealth gaps for every poor child, and rebuilding places this country damaged. We study specific harms honestly and act on what we find." },
        { q: "Why should people who weren't responsible pay?", a: "The same way we honor any national debt or treaty signed before we were born: because the country made the promise, the harm compounds into today's gaps, and a nation that keeps its word is stronger for it. Baby bonds also reach poor kids of every background." },
        { q: "How do you keep it from being wasted?", a: "By routing investment through the communities themselves with transparent reporting and a public scoreboard — the same accountability we apply to every plank. Self-governance plus open books." },
      ],
      aisle: {
        rep: "Skeptical of race-based programs and reparations; some support tribal sovereignty, treaty obligations, and Puerto Rican self-determination, and prefer universal, opportunity-based approaches like baby bonds.",
        dem: "Support closing the racial wealth gap, honoring treaties, and studying reparations; many back baby bonds and Puerto Rico/D.C. equity.",
        ind: "Want fairness and results over symbolism; respond to keeping legal promises (treaties) and to opportunity tools that help any poor child.",
        response: "This isn't about guilt — it's about keeping our word and closing gaps we can measure. We honor the treaties we signed, we invest in places we hurt, and we give every poor kid in America a real stake. Designed with these communities, reported in the open, judged by results.",
      },
    },

    /* ---------------- ECONOMY & WORKERS ---------------- */
    {
      id: "min-wage", cat: "economy", icon: "💪",
      title: "$15 Minimum Wage", tagline: "A full-time job should keep you out of poverty.",
      cost: 0, costType: "neutral", costNote: "no federal outlay; phased in, then indexed to inflation",
      lead: "The federal minimum wage has been stuck at $7.25 since 2009 — poverty pay for full-time work. We raise it to $15 and index it to inflation so it never erodes into meaninglessness again.",
      plan: [
        { b: "$15 federal minimum.", t: "Phase up to $15 an hour over a few years so businesses can plan and adjust." },
        { b: "Index it to inflation.", t: "Tie future increases to the cost of living so workers never wait another 15 years for a raise." },
        { b: "One fair wage.", t: "Phase out the sub-minimum tipped wage so service workers get a stable base." },
      ],
      detail: [
        { h: "Phased and predictable", p: "A gradual rise gives small businesses time to adjust and gives 20+ million workers a real raise — money spent right back into local economies." },
        { h: "It pays for itself", p: "Higher wages mean fewer workers relying on public assistance to survive, shifting cost off the taxpayer and onto employers who can afford it." },
      ],
      qa: [
        { q: "Won't it kill jobs?", a: "Decades of state-level increases show modest or negligible job effects while lifting millions out of poverty. A phase-in lets businesses adapt, and higher pay cuts costly turnover." },
        { q: "Can small businesses handle it?", a: "The phase-in is gradual and predictable, and higher wages reduce turnover and boost local spending — much of which flows right back to those same small businesses." },
      ],
      aisle: {
        rep: "Worry about small-business costs and job losses, especially in low-cost regions; some prefer state-set wages.",
        dem: "Strongly support $15 and indexing; many now push higher.",
        ind: "Broadly support a raise; the question is how high and how fast.",
        response: "Nobody working full-time in the richest country on earth should live in poverty. We phase it in so businesses can plan, we index it so we never have this fight again, and we watch the data the whole way.",
      },
    },
    {
      id: "worker-power", cat: "economy", icon: "🛠️",
      title: "Worker Power", tagline: "Give workers real leverage again.",
      cost: 1, costType: "neutral", costNote: "mostly regulatory; enforcement funding",
      lead: "For decades, the deck has been stacked against workers trying to organize. We pass the PRO Act, make it easy to join a union, and enable sectoral bargaining so an entire industry's workers can set fair standards together.",
      plan: [
        { b: "Pass the PRO Act.", t: "Protect the right to organize, penalize union-busting, and end the tactics employers use to crush organizing drives." },
        { b: "Sectoral bargaining.", t: "Let workers and employers across a whole industry negotiate wages and standards together, lifting everyone at once." },
        { b: "Portable benefits.", t: "Health, retirement, and leave that follow the worker, so gig and contract workers aren't left exposed." },
        { b: "Crack down on misclassification.", t: "Stop companies from labeling employees 'contractors' to dodge wages and protections." },
      ],
      detail: [
        { h: "Why unions matter", p: "Union workers earn more, have better benefits, and safer workplaces. The decline of unions tracks closely with the decline of the middle class — rebuilding one helps rebuild the other." },
        { h: "Sectoral bargaining", p: "Used across Europe, it sets industry-wide standards so good employers aren't undercut by bad ones and workers don't have to fight company by company." },
      ],
      qa: [
        { q: "Will this hurt businesses?", a: "Fair standards across an industry stop a race to the bottom where decent employers are undercut by exploitative ones. Higher pay also cuts turnover and lifts productivity." },
        { q: "What about gig workers?", a: "Portable benefits and tighter rules on misclassification give gig and contract workers real protections without ending the flexibility many of them value." },
      ],
      aisle: {
        rep: "Favor 'right to work' and worry about union influence and business costs; some support portable benefits and anti-misclassification rules.",
        dem: "Strongly support the PRO Act, sectoral bargaining, and stronger labor enforcement.",
        ind: "Sympathetic to workers' leverage but wary of strikes and red tape; like portable benefits.",
        response: "A strong middle class was built on workers who could bargain. We're not against business — we're against a rigged game. Give workers real leverage and the gains of this economy start reaching the people who produce them.",
      },
    },
    {
      id: "tax-rich", cat: "economy", icon: "💰",
      title: "Tax the Ultra-Rich", tagline: "The biggest winners should pay their fair share.",
      cost: 500, costType: "revenue", costNote: "wealth tax on fortunes over $50M + higher top rates + closing loopholes",
      lead: "It's not fair that a billionaire can pay a lower effective tax rate than a nurse. We tax extreme wealth, raise rates at the very top, and close the loopholes that let the richest avoid tax the rest of us pay automatically — funding the platform and rebalancing an economy tilted toward the top.",
      plan: [
        { b: "A wealth tax over $50 million.", t: "A modest annual tax on fortunes above $50M — affecting a tiny fraction of households while raising hundreds of billions." },
        { b: "Tax investment like work.", t: "End the loophole that taxes capital gains far below wages, so investors don't pay lower rates than their employees." },
        { b: "Close the loopholes.", t: "End the carried-interest and stepped-up-basis tricks and the offshore games that let the rich opt out." },
        { b: "Fund the IRS to collect it.", t: "Properly fund enforcement on the wealthiest — every dollar returns several in uncollected taxes owed." },
      ],
      detail: [
        { h: "Who it hits", p: "The wealth tax touches only households worth more than $50 million — far less than 1%. Everyone else sees no new tax here; many see their income tax disappear under the UBI overhaul." },
        { h: "Why fairness matters", p: "When the very top opts out, everyone else pays more or gets less. Asking extreme wealth to contribute funds the things — health, housing, education — that let the next fortune get built." },
      ],
      qa: [
        { q: "Won't the rich just leave or hide it?", a: "That's why this pairs an exit tax and serious enforcement with the rate changes. Other countries' missteps came from weak enforcement and easy escape hatches — we close them." },
        { q: "Is a wealth tax even constitutional?", a: "It's debated, and we're prepared to defend it in court and to pair it with airtight income-and-gains reforms that achieve much of the same fairness if needed." },
      ],
      aisle: {
        rep: "Oppose wealth taxes as anti-growth and hard to administer; favor lower rates and broad bases. Some back closing specific loopholes.",
        dem: "Strongly support wealth taxes, higher top rates, and loophole closure.",
        ind: "Broadly support making the ultra-wealthy pay more, especially closing loopholes that feel like cheating.",
        response: "This isn't about punishing success — it's about ending the special deals that let the top opt out of the system everyone else funds automatically. Try it yourself in the Tax Lab: it's how we pay for a fairer floor without taxing the middle class.",
      },
    },
    {
      id: "ai-tax", cat: "economy", icon: "🤖",
      title: "The AI Tax", tagline: "If a robot takes the job, it should help fund the future.",
      cost: 150, costType: "revenue", costNote: "tax on automation/AI that displaces labor; funds the dividend & retraining",
      lead: "AI is going to create staggering wealth — and concentrate it in very few hands while displacing millions of workers. When a company automates a job away, the productivity gain shouldn't flow only to shareholders. An AI tax shares the upside of automation with the workers and communities it disrupts.",
      plan: [
        { b: "Tax automation gains.", t: "A tax on the productivity windfall from large-scale AI and automation that displaces labor." },
        { b: "Fund the transition.", t: "Direct the revenue to the UBI dividend and to free retraining for displaced workers." },
        { b: "Keep AI accountable.", t: "Pair it with the AI Bill of Rights — the right to know when AI decides about you, and to appeal to a human." },
        { b: "Don't punish small builders.", t: "Aim it at large-scale labor-displacing deployment, not startups or everyday software." },
      ],
      detail: [
        { h: "Why tax AI", p: "We tax payroll but not the machines replacing it, which quietly pushes companies to automate purely for the tax break. An AI tax levels that distortion and shares the gains." },
        { h: "Where the money goes", p: "Straight into the things that help people ride the transition — the dividend, retraining, and trade education — so automation lifts everyone, not just shareholders." },
      ],
      qa: [
        { q: "Won't this slow down innovation?", a: "It's targeted at large-scale labor displacement, not research or small builders, and the revenue funds the workforce that keeps the economy strong. Shared prosperity is what makes rapid change politically survivable." },
        { q: "How do you even measure it?", a: "Through automation-linked productivity and labor-displacement metrics at large firms — admittedly a new and evolving tool, which we'd design carefully and transparently." },
      ],
      aisle: {
        rep: "Skeptical of taxing technology and wary of slowing U.S. AI leadership; some share concern about job displacement.",
        dem: "Interested in capturing automation gains for workers and pairing it with retraining.",
        ind: "Anxious about AI taking jobs; open to making the companies that profit help fund the transition.",
        response: "I'm not anti-AI — I'm pro-worker. This technology is going to mint trillions. The only question is whether those gains lift everyone or pool at the very top. An AI tax makes sure the people whose jobs change aren't left to fend for themselves.",
      },
    },
    {
      id: "ftt", cat: "economy", icon: "📈",
      title: "Financial Transaction Tax", tagline: "A tiny tax on Wall Street, a big deal for Main Street.",
      cost: 80, costType: "revenue", costNote: "small per-trade tax on financial transactions",
      lead: "A microscopic tax on financial trades — the kind Bernie Sanders has long championed — barely touches ordinary investors but reins in the high-frequency churn that adds risk without value, and raises real money for the things people need.",
      plan: [
        { b: "A small tax per trade.", t: "A fraction of a percent on stock, bond, and derivative transactions — pennies on a normal trade." },
        { b: "Cool the casino.", t: "Discourage the high-frequency, microsecond churn that adds volatility and risk but little real value." },
        { b: "Protect everyday savers.", t: "The impact on a long-term 401(k) or index investor is negligible; the burden falls on rapid-fire trading." },
      ],
      detail: [
        { h: "Tiny rate, real revenue", p: "Because the volume of financial trading is enormous, even a sliver of a percent raises tens of billions a year — money that funds the dividend, schools, or health." },
        { h: "Already proven", p: "Versions exist in the UK, EU markets, and elsewhere without wrecking those exchanges — a well-tested, well-understood tool." },
      ],
      qa: [
        { q: "Will this hurt my retirement savings?", a: "Almost not at all. A buy-and-hold investor trades rarely, so the lifetime cost is trivial. The tax targets high-frequency traders making millions of trades, not your 401(k)." },
        { q: "Won't trading just move overseas?", a: "It's designed to apply to U.S.-linked transactions, and similar taxes operate abroad without exchanges fleeing. The set rate keeps the U.S. competitive." },
      ],
      aisle: {
        rep: "Generally oppose new taxes on investing and worry about market liquidity.",
        dem: "Many support an FTT to curb speculation and fund priorities.",
        ind: "Like the idea of Wall Street paying a small tax that barely touches regular savers.",
        response: "If you're saving for retirement, you'll never feel this. If you're running microsecond trading algorithms by the million, you will — a little. That's the right trade: a tiny brake on the casino that funds real things for real people.",
      },
    },

    /* ---------------- BUILDING THE FUTURE ---------------- */
    {
      id: "energy", cat: "future", icon: "⚡",
      title: "Energy Independence & Green New Deal", tagline: "Cheap, clean, American-made power — and the jobs to build it.",
      cost: 300, costType: "spend", costNote: "clean-energy buildout, grid modernization, and a clean-energy jobs guarantee",
      lead: "Forget the politics of climate for a second: energy independence is national security and a household budget issue. When we make our own clean power, a war in the Middle East can't spike your gas bill, and we put millions of Americans to work building the grid of the future.",
      plan: [
        { b: "Energy independence.", t: "Build so much domestic clean power — nuclear, solar, wind, geothermal, storage — that global oil shocks barely touch American families." },
        { b: "A clean grid by 2035.", t: "An all-of-the-above standard that prizes reliability and low cost, not any one technology." },
        { b: "A clean-energy jobs guarantee.", t: "Anyone who wants to help build the new grid — wiring transmission, installing solar, building reactors — has a good-paying job doing it." },
        { b: "A National Grid Corps.", t: "Permit and build the high-voltage transmission lines that carry cheap clean power to the cities that need it." },
        { b: "Cut every family's energy bill.", t: "Heat-pump, insulation, and weatherization rebates that lower monthly costs right away." },
      ],
      detail: [
        { h: "Security, not just climate", p: "Energy diversity means no foreign government and no oil cartel gets a veto over your cost of living. That's reason enough — the cleaner air and stable climate are a bonus." },
        { h: "Reliability first", p: "Firm power (nuclear, geothermal) plus cheap variable power (solar, wind) plus storage keeps the lights on and the bills low — betting on one source is how you get blackouts." },
        { h: "Jobs in every community", p: "Transmission, manufacturing, and reactor jobs are sited deliberately in energy communities, with wage guarantees — the workers who powered the last century build the next one." },
      ],
      qa: [
        { q: "Why include nuclear?", a: "Because it's clean, dense, and runs around the clock. A serious plan for cheap, reliable, independent power can't ban the largest source of firm clean energy. We fund advanced reactors with rigorous safety review." },
        { q: "Is this about global warming or not?", a: "It works either way. If you care about climate, great. If you only care about cheap, secure, American-made energy, this delivers that too — same buildout, same jobs, same lower bills." },
      ],
      aisle: {
        rep: "Strongly favor energy independence, nuclear, and faster permitting; resist mandates and oppose banning fossil fuels outright.",
        dem: "Support the clean-grid target, jobs guarantee, and home rebates; some are wary of nuclear.",
        ind: "Care most about reliable, affordable power and not being hostage to foreign oil.",
        response: "This is the issue where left and right want the same thing and pretend they don't. The right wants energy independence and nuclear; the left wants clean power and jobs. That's one bill. We build everything clean, keep the lights on, cut the cost, and never let an oil shock abroad wreck a family budget here.",
      },
    },
    {
      id: "rail", cat: "future", icon: "🚄",
      title: "National High-Speed Rail", tagline: "Cross the country fast, cheap, and without the airport.",
      cost: 200, costType: "spend", costNote: "10-year capital program (~$2T total); transformative long-term returns",
      lead: "Imagine boarding a train in D.C. and stepping off in San Francisco — faster than flying once you count security and delays, cheaper, roomier, and far more relaxing. A Japan-style high-speed rail network connects our cities, revives small towns along the line, frees millions from car dependence, and draws tourists and their money from around the world.",
      plan: [
        { b: "Build true high-speed rail.", t: "Japanese- and European-style lines linking major regions and corridors, with trains that hit 200+ mph." },
        { b: "Revive small towns.", t: "Stations turn small towns into stops worth visiting — new customers, new businesses, and growth that doesn't require a big city." },
        { b: "Free millions from cars.", t: "Reliable intercity and regional rail means many Americans can own fewer cars — or none — saving the average household thousands a year." },
        { b: "Welcome the world.", t: "A modern rail network makes the U.S. far easier and more pleasant to tour, drawing international visitors and the dollars they spend." },
        { b: "Connect to local transit.", t: "Tie high-speed lines into modern local transit so the trip works end-to-end without a car." },
      ],
      detail: [
        { h: "Cheaper, faster than flying", p: "On corridors like D.C.–New York or L.A.–San Francisco, high-speed rail beats flying door-to-door once you count getting to the airport, security, and delays — for less money and far more comfort." },
        { h: "What a household saves", p: "AAA puts the cost of owning a car around $12,000 a year. For families who can drop a car thanks to good rail, that's a raise — money kept in the local economy." },
        { h: "A generational investment", p: "Like the interstate highways, this is a multi-decade build with returns measured in growth, jobs, tourism, and lower costs for a century — paid in over time, not all at once." },
      ],
      qa: [
        { q: "Isn't America too spread out for trains?", a: "Not for the corridors that matter — the Northeast, Texas Triangle, California, the Midwest, the Southeast. We build where density makes rail beat flying and driving, then connect outward over time." },
        { q: "Won't it cost a fortune and run over budget?", a: "It's expensive and we say so — roughly $2 trillion over a decade. We control cost with proven foreign designs, streamlined permitting, and standardized construction, and we phase it corridor by corridor." },
        { q: "Who actually rides it?", a: "Commuters, business travelers, tourists, families, and the car-free — the same people who pack high-speed lines in Japan, France, Spain, and China every single day." },
      ],
      aisle: {
        rep: "Skeptical of big federal rail spending and cost overruns; some support it for freight, security, and rural connectivity.",
        dem: "Support high-speed rail for climate, jobs, and connectivity.",
        ind: "Love the idea of fast, cheap, relaxing travel and saving on a car; want it actually delivered on time and budget.",
        response: "Every other major nation has this and Americans are stuck in traffic and TSA lines. It's a national-greatness project: connect our cities, revive our small towns, save families a car payment, and give the world one more reason to visit. Expensive, yes — and worth it for a hundred years.",
      },
    },
    {
      id: "humanity-first", cat: "future", icon: "❤️‍🩹", component: "humanity",
      title: "Humanity First", tagline: "Measure how people are actually doing — not just how companies are.",
      cost: 2, costType: "spend", costNote: "a modern statistical agency to measure and publish the Humanity Score",
      lead: "We run the country on one number — GDP — but GDP only tells you how the economy is doing, which mostly means how companies are doing. It says nothing about whether people are healthy, secure, or hopeful. We create a Humanity Score: a single, FICO-style measure of the actual human experience in America, published alongside GDP and used to steer policy toward what really matters.",
      plan: [
        { b: "A national Humanity Score.", t: "One headline number — like a credit score for the country's wellbeing — built from the measures of a good life, updated and published regularly." },
        { b: "Measure what matters.", t: "Life expectancy, physical and mental health, childhood outcomes, affordability, economic security, environmental quality, and civic trust — not just output." },
        { b: "Keep GDP — as one slice.", t: "GDP still counts, but as a modest part of the picture rather than the only scoreboard." },
        { b: "Govern to the score.", t: "Agencies report how their work moves the Humanity Score, so policy aims at human outcomes, not just economic ones." },
      ],
      detail: [
        { h: "Why GDP isn't enough", p: "GDP can rise while life expectancy falls, debt climbs, and people feel worse. It measures money changing hands, not whether life is actually getting better. What we measure is what we manage — so we should measure the right thing." },
        { h: "Like a FICO score for the nation", p: "Just as a credit score distills many factors into one number you can track and improve, the Humanity Score distills the dimensions of wellbeing into a single, honest gauge — explore the breakdown below." },
        { h: "Inspired by Humanity First", p: "Built on the idea that the economy should serve people, not the other way around. Other nations already publish wellbeing dashboards; we'd make ours the headline number." },
      ],
      qa: [
        { q: "Isn't 'wellbeing' too fuzzy to measure?", a: "We already measure every piece of it — life expectancy, health, poverty, childhood outcomes, pollution, trust. The Humanity Score combines those existing, rigorous statistics into one transparent index anyone can audit." },
        { q: "Does this replace GDP?", a: "No — GDP stays, as one component. The point is to stop treating it as the only measure of success and to put human outcomes on the same dashboard, weighted to reflect what a good life actually requires." },
      ],
      aisle: {
        rep: "Wary of replacing a hard economic number with a 'softer' index that could be politicized; open to transparency and better data.",
        dem: "Supportive of wellbeing metrics beyond GDP and of steering policy toward human outcomes.",
        ind: "Intuitively get that GDP up while life feels worse is a real problem; like a clear, honest national scoreboard.",
        response: "You can't fix what you refuse to measure. We've run America on a number that tracks how companies are doing and called it national success. Let's keep that number — and finally put one next to it that tracks how people are doing.",
      },
    },
    {
      id: "gun-safety", cat: "future", icon: "🛡️",
      title: "Gun Safety", tagline: "Protect kids and communities — and the Second Amendment.",
      cost: 5, costType: "spend", costNote: "background-check system, community violence prevention, research",
      lead: "You can respect the right to own a firearm and still believe a teenager shouldn't be able to buy a weapon of war more easily than a beer. We pass commonsense safety laws that the vast majority of Americans — including most gun owners — already support.",
      plan: [
        { b: "Universal background checks.", t: "Close the loopholes so every sale runs a check — supported by a large majority of gun owners." },
        { b: "Red-flag laws.", t: "Let families and police temporarily remove guns from someone in crisis, with due process." },
        { b: "Safe storage & accountability.", t: "Require secure storage and hold the negligent accountable when kids or prohibited people gain access." },
        { b: "Invest in prevention.", t: "Fund community violence-interruption programs and finally fund federal research into what works." },
      ],
      detail: [
        { h: "Common ground exists", p: "Universal background checks and red-flag laws have support from large majorities across party lines and among gun owners themselves. This is the achievable middle, not the fringe." },
        { h: "Rights and responsibility", p: "Owning a gun is a right that comes with responsibility — the same way a license, registration, and insurance come with driving a car." },
      ],
      qa: [
        { q: "Are you trying to take guns away?", a: "No. This protects lawful ownership while keeping weapons from people who are dangerous to themselves or others — through checks, due-process red-flag laws, and safe storage." },
        { q: "Do these laws even work?", a: "Background checks and red-flag laws are associated with fewer gun deaths where they're enforced; community violence-interruption programs have strong evidence behind them too." },
      ],
      aisle: {
        rep: "Protective of Second Amendment rights; many gun owners support background checks and safe storage but oppose bans and registries.",
        dem: "Support background checks, red-flag laws, and limits on certain weapons.",
        ind: "Want commonsense safety steps without infringing lawful ownership.",
        response: "I'm not interested in the culture war — I'm interested in fewer dead kids. The steps here are the ones most gun owners already back: keep weapons from dangerous people, store them safely, and respect everyone else's right to own one.",
      },
    },
    {
      id: "antitrust", cat: "future", icon: "🧱",
      title: "Antitrust & Big Tech Accountability", tagline: "Competition you can feel — lower prices, more choices.",
      cost: 2, costType: "spend", costNote: "stronger enforcement at the antitrust agencies",
      lead: "A handful of giant companies now dominate the things you use every day, and it shows up as higher prices, worse service, and fewer choices. We enforce the antitrust laws already on the books, rein in Big Tech, and make markets competitive again.",
      plan: [
        { b: "Break up monopolies.", t: "Use existing antitrust law to challenge illegal mergers and dominance across tech, healthcare, groceries, and more." },
        { b: "Rein in Big Tech.", t: "Stop platforms from abusing their gatekeeper power and self-dealing against smaller competitors." },
        { b: "Protect your data and rights.", t: "Pair it with the AI Bill of Rights: know when an algorithm decides about you, appeal to a human, and control your own data." },
        { b: "Champion small business.", t: "Level the field so startups and local businesses can actually compete with the giants." },
      ],
      detail: [
        { h: "Monopoly is a tax", p: "When a few firms control a market, they raise prices and cut quality because they can. Real competition is the cheapest consumer-protection program there is." },
        { h: "Enforce, don't reinvent", p: "Much of what's needed is already law — it just hasn't been enforced. Properly funding the antitrust agencies pays for itself many times over in lower prices." },
      ],
      qa: [
        { q: "Won't breaking up big companies hurt the economy?", a: "Competition drives innovation and lower prices; entrenched monopolies do the opposite. Breaking up dominant firms historically unleashes new competitors and growth, not decline." },
        { q: "Is this anti-business?", a: "It's pro-market and pro-small-business. Monopolies are the enemy of free markets — we're defending competition, not attacking success." },
      ],
      aisle: {
        rep: "A growing faction supports reining in Big Tech (especially over speech and gatekeeping); traditional wing favors lighter regulation.",
        dem: "Support aggressive antitrust enforcement and Big Tech accountability.",
        ind: "Frustrated by high prices and few choices; broadly favor more competition.",
        response: "Left and right have found a strange agreement: these companies have gotten too powerful. Enforcing the laws we already have means lower prices, more choices, and a fair shot for the next great American startup.",
      },
    },
    {
      id: "disaster", cat: "future", icon: "🌀",
      title: "Disaster Resilience & Relief", tagline: "When the worst happens, we show up — fast, and for everyone.",
      cost: 40, costType: "spend", costNote: "larger pre-funded national reserve + pre-disaster mitigation; saves far more than it costs",
      lead: "Hurricanes, wildfires, and floods are hitting harder and more often, and too often the slowest, weakest response lands on the people with the least. We build a bigger national emergency reserve, fund prevention before disaster strikes, and make a clear promise: we prioritize those in greatest need, every time.",
      plan: [
        { b: "A bigger emergency reserve.", t: "Grow the national disaster fund so we're never caught short when communities need help now, not after a budget fight." },
        { b: "Prioritize those in need.", t: "A standing commitment that relief reaches the most vulnerable first — the elderly, the disabled, low-income families, and hard-hit communities — not whoever has the best lawyers." },
        { b: "Prevent, don't just rebuild.", t: "Fund pre-disaster mitigation — stronger grids, flood defenses, fire breaks, resilient buildings — because every $1 spent preventing saves many in recovery." },
        { b: "Faster, fairer aid.", t: "Cut the red tape that delays help, and rebuild damaged communities stronger than before, not just back to vulnerable." },
        { b: "Never abandon a community.", t: "No region left to fend for itself because it's small, poor, or far from a camera — a promise of equal urgency everywhere." },
      ],
      detail: [
        { h: "Prevention is the bargain", p: "Studies consistently find that pre-disaster mitigation returns several dollars for every one spent. Funding resilience up front is the cheapest disaster policy there is." },
        { h: "Equity in the response", p: "Disasters hit hardest where people have the fewest resources to recover. Prioritizing the most vulnerable isn't just fair — it's how you prevent a storm from becoming a permanent setback." },
        { h: "Ready before it hits", p: "A well-funded standing reserve means aid flows the day after, not the month after — no waiting on emergency appropriations while families sleep in cars." },
      ],
      qa: [
        { q: "Doesn't FEMA already do this?", a: "It does heroic work with too little, too late, and too much paperwork. We fund the reserve properly, shift money toward prevention, and write the 'help the most vulnerable first' promise into how relief is delivered." },
        { q: "Isn't a bigger fund just money sitting idle?", a: "It's insurance for the whole country. A pre-funded reserve plus mitigation spending costs far less over time than scrambling for emergency cash and rebuilding the same vulnerable structures over and over." },
      ],
      aisle: {
        rep: "Support disaster relief and resilient infrastructure; prefer state and local control and worry about waste and dependency.",
        dem: "Support a stronger federal response, climate resilience, and prioritizing vulnerable communities.",
        ind: "Want help to arrive fast and fairly when catastrophe strikes, with the money spent wisely.",
        response: "This is the most basic thing a country owes its people: when catastrophe hits, we show up — fast, prepared, and for everyone, starting with those who can least absorb the blow. We pay a little to prevent, so we pay far less to recover, and nobody gets left behind.",
      },
    },

  ],

  /* ---------------- Humanity Score breakdown (pie chart) ---------------- */
  humanityScore: {
    value: 100, // illustrative composite, 0–100 scale shown as a "score"
    slices: [
      { label: "Economic output (GDP)", value: 18, color: "#2a6df4", note: "Still counts — but as one slice, not the whole pie." },
      { label: "Economic security", value: 14, color: "#c8102e", note: "Can a family absorb a $1,000 emergency? Debt, savings, income stability." },
      { label: "Physical health", value: 13, color: "#46b67a", note: "Chronic disease, obesity, access to care, healthy years of life." },
      { label: "Life expectancy", value: 12, color: "#f4b740", note: "How long Americans actually live — and how that's trending." },
      { label: "Mental health", value: 11, color: "#8a5cf6", note: "Depression, anxiety, suicide, deaths of despair, loneliness." },
      { label: "Childhood & education", value: 11, color: "#ff8c42", note: "Early childhood, learning outcomes, and kids' odds of a good life." },
      { label: "Affordability", value: 9, color: "#22b8cf", note: "Housing, childcare, healthcare, and energy as a share of income." },
      { label: "Environment", value: 7, color: "#2f9e44", note: "Clean air and water, and a stable climate to live in." },
      { label: "Civic trust", value: 5, color: "#e64980", note: "Trust in each other and in institutions — the glue of a society." },
    ],
  },
};
