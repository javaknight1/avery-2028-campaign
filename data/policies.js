/* =========================================================
   Rob Avery 2028 — full policy platform (single source of truth)
   The Issues page and "The Honest Budget" both render from this.

   cost: annual figure in BILLIONS of dollars (illustrative, educational).
   costType: "spend" | "revenue" | "neutral"
   costNote: short transparency note shown beside the figure.

   aisle: per party, a list of { c: concern, r: our rebuttal }, plus a
   `response` with Rob's overall take.
   ========================================================= */
window.PLATFORM = {
  // Two top-level buckets. Each policy is grouped by its costType:
  //   revenue → "Revenue Policies",  everything else → "Spending Policies".
  categories: [
    { id: "spending", name: "Spending Policies", blurb: "What we'd invest in — healthcare, housing, education, energy, and more — and what each one costs." },
    { id: "revenue",  name: "Revenue Policies",  blurb: "How we'd pay for it: the taxes that bring in more than the spending costs, with a surplus left for the deficit." },
  ],

  // Thematic subsections (kept under the two top-level categories via each policy's `cat`).
  themes: [
    { id: "care",      name: "Care & Opportunity" },
    { id: "democracy", name: "Democracy & Rights" },
    { id: "economy",   name: "Economy & Workers" },
    { id: "future",    name: "Building the Future" },
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
        rep: [
          { c: "Government-run medicine means worse care and rationing.", r: "Care stays in private hands — your doctors, your hospitals. Government only handles the billing, the way Medicare already does for seniors who love it. We fund added capacity so access grows, not shrinks." },
          { c: "It's a massive tax increase.", r: "It replaces premiums, deductibles, and copays you already pay. For most families the new tax is smaller than the bills it erases — and we show that math in The Honest Budget." },
        ],
        dem: [
          { c: "Why single-payer instead of a public option?", r: "A public option leaves the same fragmented, expensive system in place. One payer is where the real savings and the real security live — but we phase in via a public option so the transition is gentle." },
          { c: "Can we actually pass something this big?", r: "We start day one by lowering the Medicare age and auto-enrolling the uninsured — popular, immediate wins that build the system step by step rather than betting everything on one vote." },
        ],
        ind: [
          { c: "Will this disrupt the coverage I already have?", r: "You move to a plan you can never be dropped from, that follows you between jobs, and that covers more than most plans do today — with a four-year phase-in, not an overnight switch." },
          { c: "Will it really cost me less?", r: "For the typical household, yes — total out-of-pocket plus taxes goes down because we cut the administrative waste and inflated prices that make U.S. care the world's most expensive." },
        ],
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
        rep: [
          { c: "This is federal overreach into local schools.", r: "Curriculum and schools stay 100% locally run. The federal role is purely funding — pre-K, teacher pay, and free trades — with every decision made close to home." },
          { c: "Free college is a handout that devalues hard work.", r: "We don't do blanket free four-year college. We fund trades, apprenticeships, and community college — the work-focused rungs conservatives have long championed — and tie it to a real plan, not a blank check." },
        ],
        dem: [
          { c: "Why not free four-year college and full debt cancellation?", r: "Free four-year tuition is expensive and regressive — it spends most on those least in need. We target the highest-return rungs and still cap payments and forgive balances for existing borrowers." },
          { c: "Is the teacher pay floor enough?", r: "It guarantees no teacher earns below a local living wage and targets the districts that struggle most to hire — a floor we can raise as we go, not a ceiling." },
        ],
        ind: [
          { c: "Will this actually prepare kids for jobs?", r: "That's the whole design: every senior graduates with a funded next step — a job, apprenticeship, trade program, or college credit in hand — instead of a diploma and a question mark." },
          { c: "Can we afford it?", r: "At ~$180B it's modest next to universal healthcare, and trades and community college are the cheapest, highest-ROI education dollars we can spend. The costs are itemized in The Honest Budget." },
        ],
        response: "This is the rare plan the trades caucus and the teachers' union can both cheer. Free skills, local schools, and a guarantee that no kid graduates without a real next step. It's opportunity conservatives and progressives can sign together.",
      },
    },
    {
      id: "housing", cat: "care", icon: "🏠",
      title: "Housing for Everyone", tagline: "A safe, affordable home within reach of every American.",
      cost: 150, costType: "spend", costNote: "social housing + vouchers + a primary-home tax break (partly offset by a surtax on additional homes)",
      lead: "Housing is the bill that breaks the most families. We attack it from every side: build millions of homes, make rent affordable, end homelessness, and flip a market where some people can't afford a single home while others collect several. A home should be shelter first and an investment second.",
      plan: [
        { b: "Build 5 million homes.", t: "A federal–local partnership that rewards cities for legalizing housing, funds the trades to build it, and unlocks public land for mixed-income development." },
        { b: "A permanent social-housing sector.", t: "Publicly-backed, mixed-income housing that stays affordable forever — not luxury units with a few 'affordable' tokens." },
        { b: "Rent you can afford.", t: "Expand housing vouchers to everyone who qualifies and cap rent increases on federally-backed units." },
        { b: "A primary-home tax break.", t: "Property-tax relief on the home you actually live in, for eligible households under income and home-value limits — so keeping your primary residence costs less." },
        { b: "A surtax on second-and-beyond homes.", t: "An extra annual property tax on every home you own beyond your primary residence. When some families can't afford one home while others hold several, we tilt the field back toward people who need a place to live." },
        { b: "End homelessness with housing first.", t: "Get people housed first, then wrap services around them — the approach proven to work and to save money." },
        { b: "Protect buyers and renters.", t: "Crack down on price-fixing rent algorithms and Wall Street's bulk-buying of family homes." },
      ],
      detail: [
        { h: "Supply is the cure", p: "Rents fall when there are enough homes. The fastest lever is to stop blocking construction — money follows the cities that say yes to housing." },
        { h: "Flip the housing ladder", p: "We cut property tax on your primary residence (for eligible households, under income and value limits) and add a surtax on every home beyond it — turning housing back into shelter first. The break helps the home you live in; the surtax asks those holding extra homes to pay more." },
        { h: "Homelessness is cheaper to solve", p: "A chronically homeless person costs the public far more in ER visits, shelters, and jails than simply providing housing and support." },
      ],
      qa: [
        { q: "Can Washington really fix local housing?", a: "It can't zone your town — but it can pay towns that build, fund primary-home tax breaks, and stop subsidizing those that block. Money follows permits issued, which flips the incentives fast." },
        { q: "Isn't taxing second homes unfair to people who saved for a vacation home?", a: "Your primary residence is fully protected — and even gets a break. The surtax is a modest extra only on the homes you own beyond the one you live in, aimed at an imbalance where investors and the wealthy hold multiple homes while millions can't afford one." },
        { q: "Won't building this much cost a fortune?", a: "Most homes are built with private capital unlocked by zoning reform and public land; federal dollars seed social housing and vouchers, and the primary-home break is partly offset by the second-home surtax. The cost of doing nothing — rising rents and homelessness — is higher." },
      ],
      aisle: {
        rep: [
          { c: "Rent caps and federal housing programs distort the market.", r: "The core of this is deregulation — cutting the zoning red tape that blocks building. Caps apply only to federally-backed units, and most homes are built by private developers responding to demand." },
          { c: "Housing is a local issue, not a federal one.", r: "We don't zone your town from D.C. We reward the towns that choose to build and stop subsidizing the ones that block — local control, better incentives." },
        ],
        dem: [
          { c: "Incentives to developers won't reach the poorest.", r: "That's why incentives are paired with a permanent social-housing sector and voucher expansion for everyone who qualifies — supply plus a guaranteed floor, not one or the other." },
          { c: "Tenant protections need to be stronger.", r: "We crack down on price-fixing rent algorithms and Wall Street home-buying, and cap increases on federally-backed units — and we can build on that as the supply comes online." },
        ],
        ind: [
          { c: "Will my rent or home price actually go down?", r: "Yes — the plan is fundamentally about building enough homes, which is the only thing that durably lowers prices. Vouchers and caps cushion the gap while supply catches up." },
          { c: "Won't this just be more government waste?", r: "Housing-first is one of the few programs that saves money — a housed person costs far less than the ER, shelter, and jail cycle of homelessness. Results are tracked publicly." },
        ],
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
        rep: [
          { c: "Government shouldn't be in the business of raising kids.", r: "It isn't — parents choose the provider, including faith-based and home-based care. The program pays the bill; the family makes every decision." },
          { c: "A new entitlement is too expensive.", r: "Affordable childcare pays much of itself back by keeping millions of parents in the workforce earning and paying taxes — and provider choice keeps it flexible, not a big new bureaucracy." },
        ],
        dem: [
          { c: "Is the 7% cap low enough for struggling families?", r: "It's free outright for lower-income households, and 7% is the ceiling for everyone else — designed so cost is never the reason a parent can't work or a kid can't get good care." },
          { c: "Are 12 weeks of leave enough?", r: "It's a guaranteed national floor where today there's none, funded by a Social-Security-style insurance pool — a floor we can extend over time." },
        ],
        ind: [
          { c: "Will I get to pick my own provider?", r: "Always. Funds follow the child across public, private, home-based, and faith-based care — you choose what works for your family." },
          { c: "How is it funded?", r: "Through a small shared payroll insurance contribution, the same proven model behind Social Security — pennies in for real security out. It's in The Honest Budget." },
        ],
        response: "This is pro-family and pro-work at the same time. Whether you want parents home with a newborn or back at a job they love, the barrier is the same — cost — and we take it down.",
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
        rep: [
          { c: "We should raise the retirement age, not taxes.", r: "Raising the retirement age is a benefit cut for everyone who does physical work and can't keep going to 70. Lifting the cap fixes solvency by asking only the highest earners to keep paying like everyone else." },
          { c: "Any tax hike hurts the economy.", r: "This touches only wages above ~$168k — 94% of workers see no change. It's closing a loophole where a CEO stops paying in February while a nurse pays all year." },
        ],
        dem: [
          { c: "Don't just stabilize it — expand it.", r: "We do both: benefits go up, especially for the lowest-income retirees, with a cost-of-living measure built around what seniors actually buy. Lifting the cap funds the raise." },
          { c: "Is lifting the cap enough for 75-year solvency?", r: "It closes most of the gap; we restore full long-term solvency so younger workers know it's there for them, without cutting a dime from current retirees." },
        ],
        ind: [
          { c: "Will Social Security even exist when I retire?", r: "Yes — that's the point. Lifting the cap secures it for 75 years so younger workers aren't paying in for a promise that won't be kept." },
          { c: "Will this raise my taxes?", r: "Only if you earn well over $168,000. For the vast majority, nothing changes except a bigger check in retirement." },
        ],
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
        rep: [
          { c: "Term limits hand power to unelected staff and lobbyists.", r: "We pair limits with stronger nonpartisan member staff so expertise sits with the institution, and a hard lobbying cooling-off period so leaving office isn't a payday." },
        ],
        dem: [
          { c: "We'd lose seasoned legislators who get things done.", r: "Twelve years is ample time to master the job, and rotating power back to voters is worth more than a handful of forty-year incumbents. Institutional knowledge lives in professional staff, not lifetime tenure." },
        ],
        ind: [
          { c: "Nice idea, but it'll never pass.", r: "It needs a constitutional amendment — hard by design — but it's one of the few reforms a supermajority of every party already wants. That's exactly the kind of fight worth leading." },
          { c: "Does the stock-trading ban have teeth?", r: "Yes — it covers members and their families, with real penalties. No more legislating on an industry while quietly trading its stock." },
        ],
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
        rep: [
          { c: "Limiting political spending limits free speech.", r: "We protect speech — what ends is the fiction that unlimited corporate money is speech. And we lead with transparency and a stock-trading ban, reforms many conservatives already back." },
          { c: "Taxpayer-funded campaigns are a waste.", r: "Small-donor matching costs a sliver of the budget and pays for itself many times over by ending the donor giveaways it prevents — policy written for voters, not check-writers." },
        ],
        dem: [
          { c: "An amendment is a long shot — what changes now?", r: "Plenty: small-donor matching, instant dark-money disclosure, and the lobbying and stock-trading bans can pass by statute today, while we fight for the amendment over time." },
        ],
        ind: [
          { c: "Politicians will never vote to defund themselves.", r: "Which is exactly why it has to be a movement, not a favor we ask of incumbents. Small-donor matching lets outsiders who refuse big money actually win and change the math." },
          { c: "Will this really reduce corruption?", r: "When candidates raise from $20 donors instead of billionaires, they answer to constituents. Full, instant disclosure means you always see who's trying to buy what." },
        ],
        response: "You can love free markets and still hate a rigged one. Whatever your politics, a government auctioned to the highest bidder doesn't represent you. Let's put it back in the hands of voters.",
      },
    },
    {
      id: "voting", cat: "democracy", icon: "🗳️",
      title: "Voting & Democracy Reform", tagline: "Make it easy to vote and hard to cheat the map.",
      cost: 6, costType: "spend", costNote: "election infrastructure & administration grants",
      lead: "A strong democracy makes voting simple, secure, and fair. We register every eligible citizen automatically, make Election Day a holiday, end the partisan gerrymanders that let politicians pick their voters, and finally give the people of D.C. the representation they pay for.",
      plan: [
        { b: "Automatic voter registration.", t: "Every eligible citizen registered automatically, with easy opt-out — secure, accurate rolls and higher turnout." },
        { b: "Election Day holiday.", t: "Make it a national holiday and expand early and mail voting so no one chooses between a shift and a ballot." },
        { b: "End partisan gerrymandering.", t: "Independent redistricting commissions draw fair maps; politicians stop drawing their own districts." },
        { b: "Real representation for D.C. — via Maryland.", t: "Return the District's residential neighborhoods to Maryland — just as Virginia took its side of D.C. back in 1846 — so 700,000+ taxpaying Americans finally get full voting representation, while the federal core stays the seat of government. No statehood needed." },
        { b: "Secure, auditable elections.", t: "Paper-ballot backups and routine audits in every state, so results are both trusted and verifiable." },
      ],
      detail: [
        { h: "Easy and secure aren't opposites", p: "Modern registration and routine audits make rolls more accurate and results more verifiable at the same time. Access and integrity rise together." },
        { h: "Fair maps", p: "Independent commissions — used successfully in several states — take map-drawing out of incumbents' hands and end the practice of safe seats chosen in back rooms." },
        { h: "Retrocession, not statehood", p: "Returning residential D.C. to Maryland follows the exact precedent Virginia set in 1846, giving residents full House and Senate representation through an existing state — without creating a new one or adding Senate seats." },
      ],
      qa: [
        { q: "Does this make fraud easier?", a: "No. Automatic registration plus paper backups and audits make elections both more accessible and more secure than today's patchwork — accurate rolls are harder to game, not easier." },
        { q: "Statehood for D.C., or something else?", a: "Not statehood — retrocession. We return D.C.'s residential neighborhoods to Maryland, exactly as Virginia reclaimed its portion of the District in 1846, so 700,000+ taxpaying citizens get full congressional representation through an existing state, while the National Mall and federal buildings remain the seat of government." },
      ],
      aisle: {
        rep: [
          { c: "Federalizing elections invites fraud and overreach.", r: "States still run their elections — we fund paper-ballot backups and routine audits that make results more verifiable, and accurate automatic rolls are harder to game, not easier." },
          { c: "D.C. statehood is a partisan power grab for two Senate seats.", r: "We agree on statehood — so we don't do it. Retrocession to Maryland gives D.C. residents representation through an existing state, adds no new Senate seats, and follows Virginia's own 1846 precedent." },
        ],
        dem: [
          { c: "Retrocession denies D.C. the statehood it deserves.", r: "The goal is full representation for 700,000+ disenfranchised citizens, and retrocession delivers exactly that — House and Senate votes through Maryland — on a far more achievable, historically grounded path than statehood." },
          { c: "Will automatic registration and the holiday really boost turnout?", r: "Yes — automatic registration and an Election Day holiday remove the two biggest friction points, and they pair with expanded early and mail voting so no one chooses between a shift and a ballot." },
        ],
        ind: [
          { c: "I want elections both easy and secure — is that possible?", r: "That's the whole design. Automatic accurate rolls and an Election Day holiday make voting easy; paper backups and audits make every result verifiable. The two reinforce each other." },
          { c: "Won't independent map commissions just be politics in disguise?", r: "They're already working in several states to end gerrymanders drawn in back rooms. Taking the pen away from incumbents is how you get districts that reflect voters, not safe seats." },
        ],
        response: "Here's the deal both sides should take: make it effortless for every eligible citizen to vote, rock-solid to verify every result, and end taxation without representation for D.C. the clean way — by giving the land back to Maryland, exactly as Virginia did.",
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
        rep: [
          { c: "Abortion should be left to the states.", r: "Leaving it to the states means a right that flips with every election and every zip code. We restore a consistent national floor — and it's framed as limiting government power over the most private decision there is." },
          { c: "The Equality Act threatens religious liberty.", r: "It extends the same anti-discrimination protections that already cover race and religion to sexual orientation and gender identity, while existing religious-liberty law remains in force. Protecting one freedom doesn't erase another." },
        ],
        dem: [
          { c: "Codifying a 'floor' may settle for too little.", r: "A durable federal floor is what stops these rights from vanishing with the next court. It's the foundation to build on, not the ceiling — and far stronger than precedent alone." },
        ],
        ind: [
          { c: "Is this just relitigating the culture war?", r: "It's the opposite — it takes government out of your private life: your body, who you marry, who you are. Most Americans across the spectrum agree those choices shouldn't be the state's to make." },
          { c: "Why does it need to be federal?", r: "Because rights that depend on which way a court is leaning this year aren't really rights. Writing them into law makes them consistent and durable from state to state." },
        ],
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
        rep: [
          { c: "This sounds like 'defund the police' and soft-on-crime.", r: "The opposite — we fund police with better training, standards, and support, and add mental-health responders so cops aren't sent to every crisis. Prevention and reentry cut crime more than incarceration alone." },
          { c: "Ending cash bail puts dangerous people on the street.", r: "Risk-based release detains genuinely dangerous defendants while freeing low-risk people who today sit in jail only because they're poor. It targets danger, not poverty." },
        ],
        dem: [
          { c: "Accountability needs more teeth than a registry.", r: "The national misconduct registry stops bad officers from quietly moving departments, paired with binding use-of-force standards and real consequences — enforcement, not just a list." },
        ],
        ind: [
          { c: "Will this make my community less safe?", r: "Safer — it invests in violence interruption, treatment, and reentry, the things proven to cut repeat crime, while keeping dangerous people detained. Safety and fairness aren't a trade-off." },
          { c: "Why legalize cannabis federally?", r: "It's already legal in much of the country; ending the federal conflict lets us regulate it and clear records that needlessly block jobs and housing for things no longer crimes." },
        ],
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
        rep: [
          { c: "Secure the border first — no amnesty.", r: "Security is built in: technology and enough judges to decide cases fast, which creates real order. The earned path requires background checks, taxes, and time — not a free pass — and applies to people already here." },
          { c: "More immigration costs taxpayers.", r: "Reform is a net fiscal positive in most analyses — bringing workers into the tax base and letting employers hire legally grows the economy and shrinks deficits over time." },
        ],
        dem: [
          { c: "Enforcement focus could harm vulnerable migrants.", r: "Humane and orderly go together here — we end family separation, speed up fair asylum decisions, and treat people with dignity. Order comes from capacity, not cruelty." },
        ],
        ind: [
          { c: "Both parties have failed at this for decades — why now?", r: "Because we tie the two halves together: a genuinely secure, well-staffed border and a usable legal system. Each side gets its priority, which is the only deal that's ever broken the gridlock." },
          { c: "Is a path to citizenship fair to legal immigrants?", r: "We also clear the legal backlogs and expand visas, so the legal route finally works too. The earned path is conditional on background checks, taxes, and time — playing by rules, not skipping them." },
        ],
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
        rep: [
          { c: "Race-based programs and reparations are divisive and unfair.", r: "The biggest piece — baby bonds — is need-based and reaches poor kids of every background. The rest is honoring legal treaties and trust obligations the U.S. signed: keeping our word, not assigning blame." },
          { c: "This is a blank check that'll be wasted.", r: "It's routed through the communities themselves with transparent reporting and a public scoreboard — the same accountability every plank gets. Self-governance plus open books, not a check into a void." },
        ],
        dem: [
          { c: "Will this actually deliver, or just study the problem?", r: "It funds concrete action now — IHS, infrastructure, baby bonds, Puerto Rico's grid — while the commission examines specific harms. Investment first, with honest study running alongside, not instead." },
        ],
        ind: [
          { c: "Isn't this just symbolic guilt politics?", r: "It's the opposite of symbolic — clean water on reservations, a rebuilt grid in Puerto Rico, a nest egg for poor kids. Measurable investments with measurable results, not a speech." },
          { c: "Why does the federal government owe these specific groups?", r: "Because it made specific legal promises — treaties are the supreme law of the land — and broke them, and because the harms compound into wealth gaps we can measure today. Keeping your word is just integrity." },
        ],
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
        rep: [
          { c: "$15 will kill jobs and crush small businesses.", r: "Decades of state and city increases show modest-to-negligible job effects, and a multi-year phase-in lets businesses plan. Higher pay also cuts costly turnover and pumps spending into local shops." },
          { c: "Wages should be set by states, not Washington.", r: "States can always go higher, and many have. But a national floor of $7.25 — poverty pay since 2009 — fails workers in every state; a baseline doesn't stop anyone from doing more." },
        ],
        dem: [
          { c: "$15 isn't enough anymore in high-cost areas.", r: "That's why we index it to inflation so it never freezes again, and states and cities can set higher local minimums. $15 is the national floor, not the limit." },
        ],
        ind: [
          { c: "Won't this just raise prices?", r: "Studies find small price effects far outweighed by the raise for 20+ million workers — and taxpayers stop subsidizing employers whose workers need food stamps to get by. The cost shifts to those who can afford it." },
          { c: "How fast does it happen?", r: "Gradually and predictably over several years, so businesses adjust in stride rather than absorbing a shock overnight." },
        ],
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
        rep: [
          { c: "This tramples 'right to work' and burdens employers.", r: "Workers still choose whether to organize — we just stop employers from rigging that choice with intimidation. Sectoral standards also protect good employers from being undercut by exploitative ones." },
        ],
        dem: [
          { c: "Does this go far enough to rebuild unions?", r: "The PRO Act plus sectoral bargaining is the most significant pro-labor package in generations — it ends union-busting tactics and lets whole industries lift standards at once, not shop by shop." },
        ],
        ind: [
          { c: "Will more union power mean more strikes and red tape?", r: "Sectoral bargaining actually reduces shop-by-shop conflict by setting fair industry-wide standards, and portable benefits help workers without locking anyone into bureaucracy." },
          { c: "What's in it for gig and contract workers?", r: "Portable benefits that follow you between gigs, plus a crackdown on bogus 'contractor' labels — real protections without giving up the flexibility many gig workers value." },
        ],
        response: "A strong middle class was built on workers who could bargain. We're not against business — we're against a rigged game. Give workers real leverage and the gains of this economy start reaching the people who produce them.",
      },
    },
    {
      id: "tax-rich", cat: "economy", icon: "💰",
      title: "Tax the Ultra-Rich", tagline: "The biggest winners should pay their fair share.",
      cost: 500, costType: "revenue", costNote: "wealth tax on fortunes over $10B (billionaires) + higher top rates + closing loopholes",
      lead: "It's not fair that a billionaire can pay a lower effective tax rate than a nurse. We tax extreme wealth, raise rates at the very top, and close the loopholes that let the richest avoid tax the rest of us pay automatically — funding the platform and rebalancing an economy tilted toward the top.",
      plan: [
        { b: "A billionaire wealth tax over $10 billion.", t: "A modest annual tax on the handful of fortunes above $10B — a few hundred households — while everyone else pays nothing new." },
        { b: "Tax investment like work.", t: "End the loophole that taxes capital gains far below wages, so investors don't pay lower rates than their employees." },
        { b: "Close the loopholes.", t: "End the carried-interest and stepped-up-basis tricks and the offshore games that let the rich opt out." },
        { b: "Fund the IRS to collect it.", t: "Properly fund enforcement on the wealthiest — every dollar returns several in uncollected taxes owed." },
      ],
      detail: [
        { h: "Who it hits", p: "The wealth tax touches only fortunes above $10 billion — a few hundred people in the entire country. Everyone else sees no new wealth tax at all; this is squarely aimed at the very top." },
        { h: "It's just property tax for billionaires", p: "We already tax unrealized wealth every single day — it's called property tax, and a middle-class family pays it on their home, sale or no sale, year after year. A billionaire tax simply applies that same, long-accepted principle to fortunes over $10B — and at a far gentler rate than most people's property tax." },
        { h: "Why fairness matters", p: "When the very top opts out, everyone else pays more or gets less. Asking extreme wealth to contribute funds the things — health, housing, education — that let the next fortune get built." },
      ],
      qa: [
        { q: "Won't the rich just leave or hide it?", a: "That's why this pairs an exit tax and serious enforcement with the rate changes. Other countries' missteps came from weak enforcement and easy escape hatches — we close them." },
        { q: "Is a wealth tax even constitutional?", a: "It's debated, but states have taxed wealth (property) for centuries, and we're prepared to defend it in court — and to pair it with airtight income-and-gains reforms that achieve much of the same fairness if needed." },
      ],
      aisle: {
        rep: [
          { c: "Wealth taxes are anti-growth and the rich will flee.", r: "We pair it with an exit tax and serious enforcement, and back it up with income-and-gains reforms that achieve the same fairness if courts balk. Where other countries failed, it was weak enforcement and easy escape hatches — we close them." },
          { c: "You can't tax unrealized gains — it's unfair and unworkable.", r: "We already do, and have for over a century: it's called property tax. Every homeowner pays an annual tax on their home's value whether or not they ever sell. A wealth tax on fortunes over $10B is just that same principle — and far less aggressive than the property tax a typical family already pays every year." },
          { c: "Punishing success discourages investment.", r: "This isn't about success — it's about ending special deals (carried interest, stepped-up basis) that let the top pay a lower rate than their own employees. Most investment is untouched; only fortunes over $10B are." },
        ],
        dem: [
          { c: "Will it really raise enough to matter?", r: "Combined with higher top rates, closing loopholes, and funding the IRS to collect what's owed, it raises hundreds of billions a year — a core pillar of how we fund the platform, all shown in The Honest Budget." },
        ],
        ind: [
          { c: "Won't this somehow land on me?", r: "No — the wealth tax hits only households worth over $50 million, far less than 1%. Under the paired overhaul, most people's income tax goes to zero. You can model it yourself in the Tax Lab." },
          { c: "Can the IRS actually collect it?", r: "Yes, if we fund enforcement on the wealthiest — every dollar spent there returns several in taxes already legally owed but currently uncollected." },
        ],
        response: "This isn't about punishing success — it's about ending the special deals that let the top opt out of the system everyone else funds automatically. Try it yourself in the Tax Lab: it's how we pay for a fairer floor without taxing the middle class.",
      },
    },
    {
      id: "ai-tax", cat: "economy", icon: "🤖",
      title: "The AI Tax", tagline: "If a robot takes the job, it should help fund the future.",
      cost: 150, costType: "revenue", costNote: "tax on automation/AI that displaces labor; funds worker retraining & transition",
      lead: "AI is going to create staggering wealth — and concentrate it in very few hands while displacing millions of workers. When a company automates a job away, the productivity gain shouldn't flow only to shareholders. An AI tax shares the upside of automation with the workers and communities it disrupts.",
      plan: [
        { b: "Tax automation gains.", t: "A tax on the productivity windfall from large-scale AI and automation that displaces labor." },
        { b: "Fund the transition.", t: "Direct the revenue to displaced workers — free retraining, trade education, and transition support." },
        { b: "Keep AI accountable.", t: "Pair it with the AI Bill of Rights — the right to know when AI decides about you, and to appeal to a human." },
        { b: "Don't punish small builders.", t: "Aim it at large-scale labor-displacing deployment, not startups or everyday software." },
      ],
      detail: [
        { h: "Why tax AI", p: "We tax payroll but not the machines replacing it, which quietly pushes companies to automate purely for the tax break. An AI tax levels that distortion and shares the gains." },
        { h: "Where the money goes", p: "Straight into the things that help people ride the transition — free retraining, trade education, and worker support — so automation lifts everyone, not just shareholders." },
      ],
      qa: [
        { q: "Won't this slow down innovation?", a: "It's targeted at large-scale labor displacement, not research or small builders, and the revenue funds the workforce that keeps the economy strong. Shared prosperity is what makes rapid change politically survivable." },
        { q: "How do you even measure it?", a: "Through automation-linked productivity and labor-displacement metrics at large firms — admittedly a new and evolving tool, which we'd design carefully and transparently." },
      ],
      aisle: {
        rep: [
          { c: "Taxing AI will hand the lead to China.", r: "It's narrowly aimed at large-scale labor displacement, not research or startups, so the cutting edge keeps moving. Shared prosperity is what keeps rapid change politically survivable — backlash and bans are the real threat to U.S. leadership." },
        ],
        dem: [
          { c: "Will it actually capture the automation windfall?", r: "It taxes the productivity gains where labor is displaced at scale and routes the money straight to retraining and worker transition — sharing the upside with the workers whose jobs changed." },
        ],
        ind: [
          { c: "Is taxing AI even practical to measure?", r: "It's a new tool and we say so — built on automation-linked productivity and displacement metrics at large firms, designed transparently and refined as we learn, not pretended to be simple." },
          { c: "Won't companies just pass the cost to me?", r: "It targets the firms reaping huge automation profits, and the revenue flows back to workers as free retraining and transition support — so the net effect for workers is a cushion, not a cost." },
        ],
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
        { h: "Tiny rate, real revenue", p: "Because the volume of financial trading is enormous, even a sliver of a percent raises tens of billions a year — money that funds schools, health, or the deficit." },
        { h: "Already proven", p: "Versions exist in the UK, EU markets, and elsewhere without wrecking those exchanges — a well-tested, well-understood tool." },
      ],
      qa: [
        { q: "Will this hurt my retirement savings?", a: "Almost not at all. A buy-and-hold investor trades rarely, so the lifetime cost is trivial. The tax targets high-frequency traders making millions of trades, not your 401(k)." },
        { q: "Won't trading just move overseas?", a: "It's designed to apply to U.S.-linked transactions, and similar taxes operate abroad without exchanges fleeing. The set rate keeps the U.S. competitive." },
      ],
      aisle: {
        rep: [
          { c: "A trading tax hurts liquidity and markets.", r: "At a fraction of a percent the effect on healthy investing is tiny — it mainly trims the microsecond churn that adds risk without value. The UK and EU run versions without their exchanges collapsing." },
        ],
        dem: [
          { c: "Set too low, it won't raise much.", r: "Because trading volume is enormous, even a sliver of a percent raises tens of billions a year, while keeping the rate low enough that ordinary savers never feel it." },
        ],
        ind: [
          { c: "Will this nick my 401(k)?", r: "Almost not at all — a buy-and-hold investor trades rarely, so the lifetime cost is pennies. The burden falls on high-frequency traders making millions of trades a day." },
          { c: "Won't trading just flee overseas?", r: "It applies to U.S.-linked transactions and is set at a competitive rate. Other major markets already have one and didn't lose their exchanges." },
        ],
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
        rep: [
          { c: "Climate mandates kill fossil-fuel jobs and raise costs.", r: "We don't ban fossil fuels — we out-build them with cheaper clean power, and we site the new jobs in energy communities with wage guarantees. The frame is energy independence and lower bills, not mandates." },
          { c: "Renewables are unreliable.", r: "Exactly why this is all-of-the-above: firm nuclear and geothermal plus storage back up solar and wind so the grid is more reliable, not less. We keep the lights on by design." },
        ],
        dem: [
          { c: "Nuclear is dangerous and a distraction from renewables.", r: "Modern reactors are clean, dense, and run 24/7, with rigorous safety review — a serious decarbonization plan can't ban the largest source of firm clean power. It complements renewables, it doesn't replace them." },
        ],
        ind: [
          { c: "Will my energy bills actually go down?", r: "Yes — clean power is now the cheapest electricity ever built, more transmission cuts congestion costs, and heat-pump and weatherization rebates lower your monthly bill right away." },
          { c: "Is this affordable and reliable, or ideological?", r: "It's deliberately pragmatic — reliability and low cost are the top design constraints, and energy independence means an oil shock abroad can't wreck your budget at home." },
        ],
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
        rep: [
          { c: "Federal rail is a boondoggle that always runs over budget.", r: "We control cost with proven Japanese and European designs, standardized construction, and streamlined permitting, phased corridor by corridor — and it also serves freight, rural connectivity, and national security." },
        ],
        dem: [
          { c: "Will it actually get built this time?", r: "We build where density makes rail win first — the Northeast, California, Texas Triangle — using off-the-shelf foreign designs instead of reinventing the wheel, so corridors open in years, not decades of redesign." },
        ],
        ind: [
          { c: "$2 trillion is a staggering amount of money.", r: "It's a decade-long capital program, not a single check, with returns — growth, tourism, a car payment saved per family, revived towns — that compound for a century, like the interstate highways did." },
          { c: "Is America really suited to trains?", r: "For the busy corridors, absolutely — they beat flying door-to-door once you count the airport and security. We build where it wins and connect outward, rather than laying track across empty desert." },
        ],
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
        rep: [
          { c: "A 'wellbeing' index is soft and easy to politicize.", r: "It's built from existing, rigorous statistics — life expectancy, health, childhood outcomes — published transparently so anyone can audit the math. GDP stays right alongside it; we're adding a gauge, not hiding one." },
        ],
        dem: [
          { c: "Will a single number really change how we govern?", r: "What gets measured gets managed. Making agencies report how they move the score, and publishing it next to GDP, shifts the whole conversation from how companies are doing to how people are." },
        ],
        ind: [
          { c: "Is this just a feel-good gimmick?", r: "It's a practical dashboard — the same idea as a credit score, but for the nation's wellbeing — that forces policy to aim at outcomes people actually feel, not just output that flatters a quarterly report." },
          { c: "Who decides what goes in it and how it's weighted?", r: "An independent statistical agency, with the formula and data fully public so it can be debated and audited — not set behind closed doors by whoever's in power." },
        ],
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
        rep: [
          { c: "This is a slippery slope to confiscation and registries.", r: "It's not — no bans, no registry. Background checks and safe storage are backed by most gun owners themselves, and red-flag laws include due process. We protect lawful ownership while keeping guns from dangerous people." },
        ],
        dem: [
          { c: "Background checks don't go far enough.", r: "They're the highest-impact, most achievable step — backed by huge bipartisan majorities — and they come with red-flag laws, safe storage, and the violence-prevention funding that saves the most lives on the ground." },
        ],
        ind: [
          { c: "Can we do anything without trampling the Second Amendment?", r: "Yes — every step here (checks, due-process red-flag laws, safe storage) respects lawful ownership. It's the responsibility that comes with the right, like a license and insurance come with driving." },
          { c: "Do these laws actually reduce violence?", r: "Where enforced, background checks and red-flag laws are linked to fewer gun deaths, and community violence-interruption programs have strong evidence behind them — so we fund the research and the programs both." },
        ],
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
        rep: [
          { c: "Government shouldn't pick winners by breaking up firms.", r: "Enforcing existing antitrust law against illegal monopolies isn't picking winners — it's refereeing a fair market. Monopolies are the enemy of free enterprise; competition is what lets the next great firm rise." },
        ],
        dem: [
          { c: "Will enforcement actually stand up to Big Tech's lawyers?", r: "We fund the antitrust agencies to match them and use laws already on the books, so cases are built to win — and it pays for itself many times over in lower prices for consumers." },
        ],
        ind: [
          { c: "Will this really lower the prices I pay?", r: "That's the whole point — monopoly is a hidden tax in higher prices and worse service. More competition is the cheapest consumer protection there is, and it gives startups a real shot." },
          { c: "Is this an attack on successful American companies?", r: "No — it's pro-market and pro-small-business. We're defending competition against firms that got big by crushing it, not punishing anyone for building a great product." },
        ],
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
        rep: [
          { c: "More federal disaster money breeds waste and dependency.", r: "The biggest spend here is prevention, which returns several dollars for every one — the opposite of waste. We pre-fund a reserve so aid is ready, and rebuild stronger so we're not paying for the same disaster twice." },
        ],
        dem: [
          { c: "Will the most vulnerable really come first?", r: "Yes — 'help those in greatest need first' is written into how relief is delivered, not left to chance or to whoever has the best lawyers, because disasters hit hardest where people can least recover." },
        ],
        ind: [
          { c: "Isn't a big standing fund just money sitting idle?", r: "It's national insurance — a pre-funded reserve means help arrives the day after, not the month after, and costs far less over time than scrambling for emergency cash and rebuilding the same vulnerable structures repeatedly." },
          { c: "Will help actually reach my community fast?", r: "That's the design — a funded reserve plus less red tape means aid flows immediately and equally, with a promise that no region is left out because it's small, poor, or off-camera." },
        ],
        response: "This is the most basic thing a country owes its people: when catastrophe hits, we show up — fast, prepared, and for everyone, starting with those who can least absorb the blow. We pay a little to prevent, so we pay far less to recover, and nobody gets left behind.",
      },
    },

  ],

  /* ---------------- Humanity Score breakdown (pie chart) ----------------
     Each dimension carries:
       value  — its weight in the score (all weights sum to 100 = the pie)
       score  — how America is doing on it right now, 0–100 (illustrative)
       metrics — the specific, real statistics we'd track, with current
                 values and the agency we'd source each one from.
     The overall Humanity Score is the weighted average of the dimension
     scores. Figures are recent, rounded, and illustrative — educational,
     not an official index.
  ---------------------------------------------------------------------- */
  humanityScore: {
    scale: 100,
    slices: [
      {
        label: "Economic output (GDP)", value: 18, color: "#2a6df4", score: 78,
        note: "Still counts — but as one slice, not the whole pie.",
        metrics: [
          { name: "Real GDP growth", value: "≈2.8% / yr", source: "BEA" },
          { name: "GDP per capita", value: "≈$86,000", source: "BEA / World Bank" },
          { name: "Median household income", value: "≈$81,000", source: "U.S. Census" },
          { name: "Labor productivity growth", value: "≈1.9% / yr", source: "BLS" },
        ],
      },
      {
        label: "Economic security", value: 14, color: "#c8102e", score: 53,
        note: "Can a family absorb a sudden $400–$1,000 expense?",
        metrics: [
          { name: "Can cover a $400 emergency with cash", value: "≈63%", source: "Federal Reserve (SHED)" },
          { name: "Supplemental Poverty Measure", value: "≈12.4%", source: "U.S. Census (SPM)" },
          { name: "Adults with no retirement savings", value: "≈28%", source: "Federal Reserve (SHED)" },
          { name: "Household debt-to-income ratio", value: "elevated", source: "Federal Reserve" },
        ],
      },
      {
        label: "Physical health", value: 13, color: "#46b67a", score: 50,
        note: "Chronic disease, obesity, and healthy years of life.",
        metrics: [
          { name: "Adult obesity rate", value: "≈40%", source: "CDC (NHANES)" },
          { name: "Adults living with a chronic disease", value: "≈60%", source: "CDC" },
          { name: "Infant mortality", value: "≈5.6 / 1,000 births", source: "CDC (NCHS)" },
          { name: "Healthy life expectancy", value: "≈66 yrs", source: "IHME / WHO" },
        ],
      },
      {
        label: "Life expectancy", value: 12, color: "#f4b740", score: 58,
        note: "How long Americans live — and how it compares.",
        metrics: [
          { name: "Life expectancy at birth", value: "≈78.4 yrs", source: "CDC (NCHS)" },
          { name: "Gap vs. peer-nation average", value: "≈4 yrs below", source: "OECD" },
          { name: "Trend since 2019", value: "roughly flat", source: "CDC (NCHS)" },
        ],
      },
      {
        label: "Mental health", value: 11, color: "#8a5cf6", score: 41,
        note: "Depression, suicide, deaths of despair, loneliness.",
        metrics: [
          { name: "Adults with anxiety/depression symptoms", value: "≈32%", source: "CDC / KFF" },
          { name: "Suicide rate", value: "≈14.2 / 100,000", source: "CDC" },
          { name: "Annual drug-overdose deaths", value: "≈100,000", source: "CDC (NCHS)" },
          { name: "Adults reporting loneliness", value: "≈1 in 3", source: "U.S. Surgeon General / Gallup" },
        ],
      },
      {
        label: "Childhood & education", value: 11, color: "#ff8c42", score: 54,
        note: "Early childhood, learning outcomes, kids' odds.",
        metrics: [
          { name: "NAEP reading & math (Nation's Report Card)", value: "near multi-decade lows", source: "NCES" },
          { name: "High-school graduation rate", value: "≈87%", source: "NCES" },
          { name: "Child poverty (SPM)", value: "≈13%", source: "U.S. Census" },
          { name: "PISA math ranking", value: "middle of the OECD", source: "OECD" },
        ],
      },
      {
        label: "Affordability", value: 9, color: "#22b8cf", score: 44,
        note: "Housing, childcare, healthcare, energy vs. income.",
        metrics: [
          { name: "Cost-burdened renters (>30% of income)", value: "≈50%", source: "HUD / Census (ACS)" },
          { name: "Infant childcare vs. rent", value: "costs more than rent in most states", source: "U.S. Dept. of Labor" },
          { name: "Adults with medical debt", value: "≈1 in 12", source: "KFF" },
          { name: "Housing affordability index", value: "near record lows", source: "NAR / Atlanta Fed" },
        ],
      },
      {
        label: "Environment", value: 7, color: "#2f9e44", score: 62,
        note: "Clean air and water, and a livable climate.",
        metrics: [
          { name: "People in counties with failing air quality", value: "≈1 in 3", source: "American Lung Assoc. / EPA" },
          { name: "Water systems meeting safety standards", value: "≈92%", source: "EPA" },
          { name: "CO₂ emissions per capita", value: "declining", source: "EIA / EPA" },
          { name: "Major disaster declarations / yr", value: "rising", source: "FEMA / NOAA" },
        ],
      },
      {
        label: "Civic trust", value: 5, color: "#e64980", score: 33,
        note: "Trust in each other and in institutions.",
        metrics: [
          { name: "Trust federal gov't to do right most of the time", value: "≈22%", source: "Pew Research" },
          { name: "Say most people can be trusted", value: "≈30%", source: "GSS (NORC)" },
          { name: "Voter turnout (last presidential)", value: "≈66%", source: "Census / U.S. Elections Project" },
          { name: "Confidence in major institutions", value: "near record lows", source: "Gallup" },
        ],
      },
    ],
  },
};
