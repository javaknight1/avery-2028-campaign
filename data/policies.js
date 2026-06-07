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
      lead: "Every American gets comprehensive coverage from birth — doctor visits, hospital care, mental health, dental, vision, prescriptions, and long-term care — with no premiums, no deductibles, and no surprise bills. You keep your doctors; you lose the paperwork and the fear. It isn't flipped on overnight — it phases in over a single term so nobody loses care during the switch.",
      timeline: [
        { when: "Day One – Year 1", title: "Immediate relief", items: [
          "Lower the Medicare eligibility age to 60 and auto-enroll the uninsured.",
          "Cap insulin and inhalers at $5 and begin negotiating drug prices.",
          "Ban surprise medical bills and the medical-debt collection that bankrupts families.",
        ] },
        { when: "Year 2", title: "A public option for everyone", items: [
          "Open a Medicare-style public plan to every American on the marketplace.",
          "Add dental, vision, and hearing to Medicare.",
          "Lower the eligibility age to 55.",
        ] },
        { when: "Year 3", title: "Expand coverage & build capacity", items: [
          "Lower the eligibility age to 45.",
          "Extend negotiated prices to all prescription drugs.",
          "Fund clinics, training, and more doctors and nurses so access grows with coverage.",
        ] },
        { when: "Year 4", title: "Universal coverage", items: [
          "Everyone is covered — no premiums, deductibles, or copays for essential care.",
          "Long-term, maternal, and mental-health care fully included.",
          "Private supplemental coverage stays legal, and you keep your own doctors.",
        ] },
        { when: "Ongoing", title: "Measure & improve", items: [
          "Publish outcomes and wait times openly, and fix what isn't working.",
          "Total national health spending falls as administrative waste and inflated prices drop.",
        ] },
      ],
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
        { b: "Ban elected officials from trading stocks.", t: "Members of Congress, the President, and senior officials — and their families — may not trade individual stocks in office. The only thing they may hold is a strict, approved set of broad, diversified index funds (or a blind trust), so they can never profit from the decisions they make." },
        { b: "Cooling-off before lobbying.", t: "A multi-year ban on cashing out into lobbying the moment you leave office." },
        { b: "A salary tied to the people they serve.", t: "A member of Congress earns the average cost of living in the district or state they represent — so their pay tracks their constituents' reality, not a Washington bubble, giving them a direct stake in everyone's cost of living." },
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
          { c: "Does the stock-trading ban have teeth?", r: "Yes — it bars members, the President, senior officials, and their families from individual stocks, allowing only broad diversified index funds or a blind trust, with real penalties. No more legislating on an industry while quietly trading its stock." },
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
        { b: "Close the revolving door.", t: "Tougher lobbying limits and the elected-official stock-trading ban (only diversified index funds or a blind trust) from the term-limits plank." },
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
      cost: 1000, costType: "revenue", costNote: "wealth tax over $10B + higher income-tax rates over $400k (specific loopholes are closed by their own policies below)",
      lead: "It's not fair that a billionaire can pay a lower effective tax rate than a nurse. We tax extreme wealth, raise rates at the very top, and close the loopholes that let the richest avoid tax the rest of us pay automatically — funding the platform and rebalancing an economy tilted toward the top.",
      plan: [
        { b: "A billionaire wealth tax over $10 billion.", t: "A modest annual tax on the handful of fortunes above $10B — a few hundred households — while everyone else pays nothing new." },
        { b: "Tax investment like work.", t: "End the loophole that taxes capital gains far below wages, so investors don't pay lower rates than their employees." },
        { b: "Close the loopholes — by name.", t: "End the specific dodges — carried interest, stepped-up basis & 'buy, borrow, die', and like-kind exchanges — each with its own dedicated plan in this section." },
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
      cost: 200, costType: "revenue", costNote: "a per-token sales tax on AI use + a levy on automation that displaces labor; funds worker retraining & transition",
      lead: "AI is going to create staggering wealth — and concentrate it in very few hands while displacing millions of workers. When a company automates a job away, the productivity gain shouldn't flow only to shareholders. We tax AI two ways: a tiny sales tax on every token of AI used, and a levy on large-scale automation that displaces labor — and we send the money to the workers and communities it disrupts.",
      plan: [
        { b: "A sales tax on every AI token.", t: "A few cents per million tokens — the words AI models read and write. Invisible on any single query, but across billions of queries a day it funds the very transition it helps cause." },
        { b: "Tax automation gains.", t: "A levy on the productivity windfall from large-scale AI and automation that displaces labor." },
        { b: "Fund the transition.", t: "Direct the revenue to displaced workers — free retraining, trade education, and transition support." },
        { b: "Keep AI accountable.", t: "Pair it with the AI Bill of Rights — the right to know when AI decides about you, and to appeal to a human." },
        { b: "Don't punish small builders.", t: "Tier the token tax and aim the automation levy at large-scale deployment, not startups or everyday software." },
      ],
      detail: [
        { h: "A consumption tax for the AI age", p: "Just as we tax gasoline and goods, a tiny per-token tax on AI usage turns a firehose of automation into a steady stream of revenue for the people it displaces — and it scales automatically as AI use explodes, without anyone having to raise a rate." },
        { h: "Why also tax automation", p: "We tax payroll but not the machines replacing it, which quietly pushes companies to automate purely for the tax break. Taxing the automation windfall levels that distortion and shares the gains." },
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

    /* ---- Loopholes, each closed by name ---- */
    {
      id: "carried-interest", cat: "economy", icon: "🎩",
      title: "Close the Carried-Interest Loophole", tagline: "Pay for managing money is income — tax it like income.",
      cost: 20, costType: "revenue", costNote: "tax carried interest as ordinary income, not capital gains",
      lead: "Private-equity and hedge-fund managers are paid a slice of their clients' profits — 'carried interest' — for managing other people's money. Through a quirk of the tax code, that paycheck is taxed as long-term capital gains (about 20%) instead of ordinary income (up to 37%). It's the most famous loophole in America, defended by almost no one, and still open.",
      plan: [
        { b: "Tax it as the income it is.", t: "Carried interest gets taxed at ordinary income rates, the same as a salary, a bonus, or a plumber's wages." },
        { b: "No more re-labeling pay as 'gains'.", t: "Close the workarounds (holding-period tricks, fee waivers) that let managers keep dressing up wages as investment returns." },
        { b: "Protect actual investment.", t: "A manager's own money, genuinely at risk, is still taxed as investment — only the fee for managing others' money changes." },
      ],
      detail: [
        { h: "What the loophole is", p: "Fund managers typically charge '2 and 20' — a 2% management fee plus 20% of profits. That 20% is compensation for a service, but the code treats it as if the manager had invested and earned capital gains, taxing it at roughly half the wage rate." },
        { h: "Who it benefits", p: "A very small number of the highest-paid people in finance. Closing it doesn't touch your 401(k), your home sale, or a normal investor's gains." },
        { h: "Bipartisan in name only", p: "Presidents and candidates of both parties have promised to end it for two decades. It survives because the people it benefits are very good at lobbying — not because it's defensible." },
      ],
      qa: [
        { q: "Isn't carried interest just investment gains?", a: "No — it's a fee. The manager generally didn't put up the capital; they're paid a share of someone else's gains for managing the fund. Genuine personal investment stays taxed as investment." },
        { q: "Won't this dry up investment funds?", a: "The underlying investments are unaffected; only how the manager's fee is taxed changes. Funds raised capital fine in the decades before the loophole grew, and will after." },
      ],
      aisle: {
        rep: [
          { c: "This is a tax hike on capital and investment.", r: "It's a hike on a paycheck mislabeled as capital. The manager's own at-risk money still gets investment treatment — we just stop letting a service fee masquerade as a capital gain." },
        ],
        dem: [
          { c: "Why not go further on fund taxation?", r: "This is the cleanest, most agreed-upon fix — start by ending the indefensible loophole, then debate the rest. It pairs with higher top rates and the wealth tax for the bigger picture." },
        ],
        ind: [
          { c: "Does this affect my retirement or home sale?", r: "Not at all. It touches only fund managers' performance fees — your 401(k), index funds, and home-sale gains are completely untouched." },
          { c: "If everyone agrees, why isn't it done?", r: "Because a small, wealthy, well-lobbied group benefits enormously. That's exactly the kind of special deal this campaign exists to end." },
        ],
        response: "Both parties have promised to kill this for twenty years and it's still here. That tells you everything about who Washington works for. We treat a manager's paycheck like everyone else's paycheck — full stop.",
      },
    },
    {
      id: "stepped-up-basis", cat: "economy", icon: "🪜",
      title: "End Stepped-Up Basis & 'Buy, Borrow, Die'", tagline: "The trick that lets fortunes go untaxed for generations.",
      cost: 60, costType: "revenue", costNote: "tax unrealized gains at death above a large exemption; close the borrowing loophole",
      lead: "Here's how the very wealthy legally avoid income tax for life: buy assets that grow, borrow against them tax-free to spend (loans aren't income), and die — at which point 'stepped-up basis' resets the assets' value for heirs, erasing every dollar of lifetime gains. The gains are never taxed, by anyone. We close the loop, while fully protecting ordinary families.",
      plan: [
        { b: "Tax gains at death — above a big exemption.", t: "Unrealized gains are taxed when passed on, but only above a generous exemption (think $5M individual / $10M per couple) so family homes, farms, and small businesses are untouched." },
        { b: "End 'buy, borrow, die'.", t: "Treat very large loans borrowed against appreciated assets as a taxable event, so the ultra-wealthy can't live tax-free on debt forever." },
        { b: "Protect heirs of ordinary estates.", t: "The vast majority of inheritances fall under the exemption and owe nothing new; this targets only the largest fortunes." },
      ],
      detail: [
        { h: "What stepped-up basis is", p: "If you buy stock at $1M and it's worth $50M when you die, your heirs' 'cost basis' is reset to $50M. They can sell immediately and owe $0 in capital-gains tax — the $49M of gains vanishes from the tax base entirely." },
        { h: "How 'buy, borrow, die' works", p: "Rather than sell (and owe tax), billionaires borrow against their assets at low rates to fund their lifestyle — loans aren't taxable income. They never sell, never pay income tax, and stepped-up basis wipes the slate at death." },
        { h: "Family farms and homes are safe", p: "The large exemption, plus special rules letting heirs pay over time on illiquid assets like farms and businesses, means this hits only the very top — not the inheritances most families ever see." },
      ],
      qa: [
        { q: "Is this a 'death tax' on my inheritance?", a: "No. It's capital-gains tax on gains that were never taxed once — and only above a multi-million-dollar exemption. Ordinary inheritances owe nothing new; most estates are far below the threshold." },
        { q: "Will this force the sale of family farms?", a: "No. Farms, ranches, and family businesses get a generous exemption and the option to pay any tax gradually, so heirs keep operating them. The loophole we're closing is the one the ultra-wealthy use to pass billions tax-free." },
      ],
      aisle: {
        rep: [
          { c: "This is a death tax that hurts family farms.", r: "It's the opposite of a blanket death tax — it has a large exemption and farm/business protections, so families keep their land. It targets only billion-dollar fortunes escaping all income tax via the step-up." },
          { c: "Taxing unrealized gains is wrong.", r: "These gains get realized — heirs sell tax-free today. We simply tax them once, at death, above a high exemption, instead of letting them escape forever. Property tax already taxes unrealized value every year." },
        ],
        dem: [
          { c: "Will the wealthy just find another dodge?", r: "That's why we close 'buy, borrow, die' alongside the step-up — taxing large asset-backed loans removes the main escape hatch. Enforcement funding (in the tax-gap plan) backs it up." },
        ],
        ind: [
          { c: "Does this touch my house or 401(k) when I pass it on?", r: "No — the exemption is in the millions, so a typical home or retirement account passes to your kids with no new tax. This is squarely aimed at the largest fortunes." },
          { c: "Is it really that big a loophole?", r: "It's one of the biggest. Hundreds of billions in gains escape tax at death every year. Closing it is how the ultra-wealthy finally pay income tax like everyone else." },
        ],
        response: "A nurse pays tax on every paycheck. A billionaire can buy, borrow against, and pass on assets and never pay income tax at all. We end that — with a big exemption so your family's home and farm are never touched, and the bill lands only at the very top.",
      },
    },
    {
      id: "like-kind", cat: "economy", icon: "🔁",
      title: "Cap the Like-Kind (1031) Loophole", tagline: "Stop letting real-estate gains defer forever.",
      cost: 20, costType: "revenue", costNote: "cap 'like-kind exchange' deferral so property gains can't roll untaxed indefinitely",
      lead: "A 'like-kind exchange' (Section 1031) lets a real-estate investor sell a property, roll the gain into another property, and defer the capital-gains tax — then do it again, and again, forever. Stack it with stepped-up basis at death and the gains are never taxed at all. Built a century ago for farmers swapping a horse for a plow, it's now a giant shelter for real-estate fortunes.",
      plan: [
        { b: "Cap the deferral.", t: "Limit 1031 tax deferral to a reasonable amount per year (e.g., $500,000 of gains), so endless tax-free rolling stops." },
        { b: "Keep it for real businesses.", t: "Genuine small-business and farm exchanges within the cap are protected; the cap bites only on the largest investors." },
        { b: "Close the stack.", t: "Paired with ending stepped-up basis, gains that were merely deferred finally get taxed instead of vanishing at death." },
      ],
      detail: [
        { h: "What the loophole is", p: "Sell a building at a $10M gain, buy another 'like-kind' property, and you owe $0 tax now — the gain is deferred. Repeat indefinitely and you can build a real-estate empire while never paying capital-gains tax." },
        { h: "How it stacks with the step-up", p: "Defer with 1031 your whole life, then die: stepped-up basis erases the deferred gains entirely. The two loopholes together let real-estate fortunes escape capital-gains tax permanently." },
        { h: "Why cap, not abolish", p: "Real farmers and small landlords use modest exchanges legitimately. A generous annual cap protects them while shutting down the nine-figure version." },
      ],
      qa: [
        { q: "Won't this hurt small real-estate investors?", a: "No — the cap is set high enough that ordinary exchanges by farmers and small landlords are unaffected. It only limits the largest investors rolling enormous gains tax-free." },
        { q: "Isn't deferral fair since they reinvest?", a: "Reinvestment is fine — but deferral has become permanent avoidance when paired with the death step-up. A cap keeps reasonable reinvestment while ending the forever-tax-free version." },
      ],
      aisle: {
        rep: [
          { c: "This discourages real-estate investment.", r: "Investment continues — only the unlimited, permanent tax deferral is capped, and small/family exchanges are protected. We're closing a forever-shelter, not taxing ordinary deals." },
        ],
        dem: [
          { c: "Why cap instead of repeal?", r: "A cap protects genuine small-business and farm exchanges while ending the nine-figure abuse — the targeted fix that raises real money without hitting Main Street." },
        ],
        ind: [
          { c: "Does this affect me selling a rental?", r: "Almost certainly not — the cap is set well above a typical exchange. It targets the large investors using 1031 to defer millions in gains indefinitely." },
          { c: "How much does it raise?", r: "On its own, modest — but closing it removes a key piece of the stack that lets real-estate fortunes avoid capital-gains tax entirely, which is worth far more than the line item." },
        ],
        response: "A rule meant for farmers swapping equipment became a forever tax shelter for real-estate empires. We keep it working for small business and farms, and we cap the version that lets billion-dollar gains roll untaxed until they vanish at death.",
      },
    },
    {
      id: "corporate", cat: "economy", icon: "🏢",
      title: "Corporate Tax Reform", tagline: "No trillion-dollar company should pay $0.",
      cost: 450, costType: "revenue", costNote: "moderate rate increase + a 15% minimum on book profits + a global minimum tax",
      lead: "Some of the most profitable corporations on earth pay little or no federal income tax, using deductions, credits, and offshore accounting to zero out their bill. We set a fair corporate rate, a minimum tax so no giant company pays nothing, and a global minimum that ends the race to tax havens.",
      plan: [
        { b: "A fairer corporate rate.", t: "Set the corporate rate at a competitive but real level (around 28%) — below where it sat for most of modern history." },
        { b: "A 15% minimum on book profits.", t: "If a company reports billions in profit to shareholders, it can't report $0 to the IRS — a floor so the biggest firms always pay something." },
        { b: "A global minimum tax.", t: "Adopt the 21% global minimum so profits can't be shifted to havens, ending the race to the bottom most countries have already joined." },
        { b: "Reward building here.", t: "Keep credits for real domestic investment, R&D, and clean manufacturing — we tax accounting games, not factories." },
      ],
      detail: [
        { h: "How profit shifting works", p: "Multinationals book profits in low-tax havens — a patent 'owned' in Ireland, a logo licensed from Bermuda — so U.S. earnings show up untaxed overseas. A global minimum tax makes that pointless." },
        { h: "Why a book-income minimum", p: "Companies keep two scorecards: big profits for investors, tiny profits for the IRS. A minimum tax on the profits they brag about to Wall Street closes that gap." },
        { h: "Still competitive", p: "A ~28% rate with a global minimum keeps the U.S. in line with peers while ending the giveaways — and rewards firms that actually build and hire here." },
      ],
      qa: [
        { q: "Won't corporations just pass this to consumers or leave?", a: "The global minimum tax is designed so leaving doesn't help — havens stop working. Most studies find a large share of corporate tax falls on shareholders, who are disproportionately wealthy, not on everyday consumers." },
        { q: "Isn't this anti-business?", a: "It's pro-fair-competition. Small businesses pay their taxes; it's only the largest multinationals gaming offshore rules that pay near zero. Leveling that helps everyone who plays it straight." },
      ],
      aisle: {
        rep: [
          { c: "Higher corporate taxes kill jobs and competitiveness.", r: "We keep the rate competitive (~28%, below its historical norm) and protect credits for real investment and hiring. The global minimum tax actually helps U.S. firms by ending the haven advantage their offshore rivals exploit." },
        ],
        dem: [
          { c: "Why not go higher than 28%?", r: "28% plus a book-income minimum and the global minimum raises real money while keeping us competitive. The minimum taxes are what truly stop the $0 bills — and we can revisit the rate as we measure results." },
        ],
        ind: [
          { c: "Will this hit small businesses?", r: "No — small businesses already pay their share. This targets the giant multinationals using offshore accounting to pay near zero, which is exactly the unfairness most people are angry about." },
          { c: "How do you stop the offshore games?", r: "The global minimum tax (already adopted by much of the world) plus a minimum on book profits make hiding earnings in havens pointless. Pair that with IRS enforcement funding and it sticks." },
        ],
        response: "When a company makes record profits and pays nothing while a small shop down the street pays its full share, the system is broken. A fair rate, a minimum so no giant pays zero, and a global floor so havens stop working — that's all this is.",
      },
    },
    {
      id: "carbon", cat: "economy", icon: "🏭",
      title: "Carbon Fee on Big Polluters", tagline: "Make pollution pay — and send the money back.",
      cost: 200, costType: "revenue", costNote: "a rising fee on carbon pollution with a border adjustment; part returned to families",
      lead: "Right now, polluting the air is free, and everyone else pays for the damage in health and climate costs. A carbon fee charges big emitters for that pollution, steadily cuts emissions, and raises revenue — and a border adjustment means imports pay too, protecting American manufacturers. Part comes back to families so household budgets are held harmless.",
      plan: [
        { b: "A fee on carbon pollution.", t: "Charge big emitters a steadily rising fee per ton of carbon, so the cleanest options win on price." },
        { b: "A border adjustment.", t: "Imports from dirtier economies pay the same fee, so American factories aren't undercut and other countries are pushed to clean up." },
        { b: "Send money back to families.", t: "Return a share as a rebate so most households — especially lower-income ones — come out even or ahead, even as polluters pay." },
        { b: "Fund the clean build-out.", t: "Direct the rest into the grid, transmission, and home-energy upgrades from the energy plan, speeding the transition." },
      ],
      detail: [
        { h: "Why a fee works", p: "A clear, rising price on carbon lets every business and household find the cheapest way to cut — far more efficiently than micromanaging from Washington. Economists across the spectrum favor it." },
        { h: "The border adjustment", p: "Without it, pollution just moves overseas and jobs follow. Charging imports the same fee protects U.S. industry and gives trading partners a reason to clean up too." },
        { h: "Families held harmless", p: "Because much of the revenue is rebated, most households — especially working families — break even or gain, even though their energy choices get cleaner." },
      ],
      qa: [
        { q: "Won't this raise my gas and energy bills?", a: "Some prices rise, but the rebate is designed so most families — especially lower- and middle-income ones — get back as much or more than they pay. The clean-energy build-out also lowers bills over time." },
        { q: "Is this just a new tax on me?", a: "It's a fee on polluters, with the money largely returned to people. The point is to charge for the damage pollution does today for free — and hand the proceeds back, not grow government." },
      ],
      aisle: {
        rep: [
          { c: "A carbon tax raises energy costs and grows government.", r: "It's revenue-returned: much of it goes straight back to households as rebates, not into government. A clear price plus a border adjustment is the market-friendly way to cut emissions — long backed by conservative economists." },
        ],
        dem: [
          { c: "Is a fee enough without mandates?", r: "It pairs with the clean-energy build-out and grid investment, so it's price plus public investment. A rising fee with a border adjustment is one of the most powerful, efficient tools we have." },
        ],
        ind: [
          { c: "Will I actually come out okay?", r: "For most households, yes — the rebate is sized so working families break even or gain. You're rewarded for cleaner choices, not punished for getting to work." },
          { c: "Won't industry just move overseas?", r: "The border adjustment prevents that — imports pay the same fee, so dirty production abroad gets no advantage, and U.S. factories stay competitive." },
        ],
        response: "Pollution isn't free — we all pay for it in asthma, heat, and disaster bills. A carbon fee just puts that cost where it belongs, hands most of the money back to families, and uses the rest to build the clean grid. Make pollution pay, and let people keep the change.",
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
    {
      id: "data-centers", cat: "future", icon: "🖥️",
      title: "Rein In Data Centers", tagline: "Lead in AI without sticking families with the bill.",
      cost: 5, costType: "spend", costNote: "grid oversight, ratepayer protection, clean-power & siting rules — plus a usage-based water-and-energy tax (counted on the Budget page)",
      lead: "AI data centers are exploding across the country — and quietly driving up your electric bill, straining local grids, and guzzling water, often after winning sweetheart tax deals that never deliver the jobs they promised. We want America to lead in AI. But the people who live next to these warehouses shouldn't subsidize them. We tax data centers for the water and power they burn, require them to run clean, and keep the biggest ones away from our cities.",
      plan: [
        { b: "Tax their water and power use.", t: "A tax that scales directly with the electricity and water a data center consumes — the more of the shared grid and water supply it draws down, the more it pays. It raises real revenue and pushes the industry toward efficiency." },
        { b: "Make them pay the true cost.", t: "Large data centers cover the grid capacity and upgrades they require, so their demand doesn't show up as a surcharge on your household bill." },
        { b: "Site them away from cities.", t: "Require large data centers to be built away from metropolitan areas and already-strained urban grids — near their own (clean) power and water, where they relieve pressure instead of adding to it." },
        { b: "Power them with new clean energy.", t: "Require big new centers to bring their own clean generation or fund grid build-out, instead of soaking up existing supply and raising prices for everyone." },
        { b: "Lead in AI, protect workers.", t: "Pair this with the AI Bill of Rights, the AI tax, and free retraining — we win the AI race without sacrificing the workforce or the towns hosting the compute." },
      ],
      detail: [
        { h: "Why your bill is going up", p: "A single large AI campus can use as much power as a small city. When utilities build capacity to serve them and spread the cost across all ratepayers, ordinary households end up subsidizing billion-dollar tech firms." },
        { h: "A tax on what they consume", p: "Rather than a flat fee, the tax tracks actual water and electricity use — so a hyper-efficient, clean-cooled campus pays far less than a wasteful one. It's a price on the commons they draw from, and it nudges the whole industry to use less." },
        { h: "Why site them away from cities", p: "Putting massive compute loads next to dense metros strains the grids and water systems people depend on. Building them in less-populated areas, paired with their own clean power, keeps urban bills and reservoirs out of the crossfire. We weigh the trade-off honestly — some latency-sensitive uses must stay close, so the rule targets the large bulk-compute campuses." },
      ],
      qa: [
        { q: "Won't this push AI and data centers overseas?", a: "The U.S. has the talent, capital, and demand to lead regardless; we're just setting fair rules for power and water. Other countries face the same grid limits — running clean and paying your way is becoming the global norm, not a disadvantage." },
        { q: "Aren't data centers good local jobs?", a: "They create some construction jobs but few permanent ones relative to the subsidies and energy they consume. We keep the investment while ending the giveaways that don't pay off and the costs pushed onto neighbors." },
      ],
      aisle: {
        rep: [
          { c: "This is heavy-handed regulation that slows U.S. AI leadership.", r: "It's basic fairness: pay for the power you use and don't raise your neighbor's bill. We keep America leading in AI — we just stop subsidizing trillion-dollar firms on the backs of local ratepayers." },
        ],
        dem: [
          { c: "Will this actually protect ratepayers and the climate?", r: "Yes — by making centers fund their own clean power and grid upgrades, household bills are shielded and the build-out adds clean capacity instead of straining the existing grid." },
        ],
        ind: [
          { c: "Why is my power bill suddenly higher?", r: "Often because a nearby data center's demand got spread across everyone's rates. This plan puts that cost back on the company, where it belongs." },
          { c: "Do we have to choose between AI and affordable energy?", r: "No. We lead in AI and protect your bill by requiring big centers to bring clean power and pay their fair share — both, not either-or." },
        ],
        response: "I want America to win the AI race — and I want the family living next to the server farm to not get crushed by the power bill. Those aren't in conflict. Make the data centers pay their way and run clean, and we get the future without selling out the present.",
      },
    },
    {
      id: "space", cat: "future", icon: "🚀",
      title: "Invest in Space — for Humanity", tagline: "Lead the next frontier, and lift everyone with it.",
      cost: 40, costType: "spend", costNote: "boost NASA and basic space science; fund international partnerships",
      lead: "Space is the next great frontier for science, security, and human inspiration — and it should lift all of humanity, not plant one flag. We invest in NASA and a thriving space sector, and we lead by partnering with our allies to explore together. It's not about America winning. It's about humanity winning — with America out front.",
      plan: [
        { b: "Fund the mission.", t: "Boost NASA and basic space science — the Moon, Mars, deep-space exploration, and the telescopes that rewrite what we know." },
        { b: "Lead with allies, not alone.", t: "Partner with friendly nations on shared missions and standards, pooling talent and cost so humanity goes further, faster — together." },
        { b: "Bring it back to Earth.", t: "Space research spins off into medicine, materials, weather and climate monitoring, and communications that improve life down here." },
        { b: "Keep space open and peaceful.", t: "Champion rules that keep orbit and the Moon shared and peaceful, and inspire a new generation into science and engineering." },
      ],
      detail: [
        { h: "Why space pays off", p: "Public space investment returns far more than it costs — GPS, weather forecasting, medical imaging, water filtration, and countless materials began as space programs. It's R&D that compounds for generations." },
        { h: "Humanity first, together", p: "The biggest goals — a Moon base, Mars, planetary defense — are too big for any one nation. Leading a coalition of allies gets it done and builds trust on Earth in the process." },
        { h: "Inspiration is an output too", p: "Apollo created a generation of scientists and engineers. A bold, cooperative space program does the same — and the talent it inspires powers every other goal on this platform." },
      ],
      qa: [
        { q: "Why spend on space with so many problems here?", a: "At ~$40B it's a small slice of the budget that pays for itself in technology, jobs, and discovery — and it's dwarfed by the platform's investments in health, housing, and education here at home. We do both." },
        { q: "Isn't this just a billionaire space race?", a: "We harness private launch where it's cheaper, but the mission — science, exploration, planetary defense, and global cooperation — is public and shared, aimed at humanity's benefit, not any one company's or country's ego." },
      ],
      aisle: {
        rep: [
          { c: "Space spending is a luxury we can't afford, and we shouldn't share the lead.", r: "It's a high-return investment in technology and security, not a luxury — and leading a coalition of allies makes America stronger, not weaker, while splitting the cost. We're out front; we just don't go it alone." },
        ],
        dem: [
          { c: "Shouldn't this money go to needs on Earth?", r: "It mostly does — this is a small fraction beside the platform's health, housing, and education investments. Space R&D also returns enormous benefits to Earth, from climate monitoring to medicine." },
        ],
        ind: [
          { c: "What do I actually get out of space spending?", r: "More than you'd think — GPS, weather forecasts, medical and materials breakthroughs, good engineering jobs, and the inspiration that pulls kids into science. It's some of the best-returning R&D we do." },
          { c: "Why work with other countries instead of beating them?", r: "Because the hardest goals are too big to do alone, and cooperation in space builds trust everywhere else. America leads the coalition — humanity shares the win." },
        ],
        response: "We will lead in space — not by going it alone, but by bringing our partners with us. The Moon, Mars, the science that protects our planet: these are humanity's goals. America out front, the whole world better for it. That's the kind of leadership worth funding.",
      },
    },
    {
      id: "veterans", cat: "care", icon: "🎖️",
      title: "Keep Faith with Veterans", tagline: "We sent them to serve; we owe them when they come home.",
      cost: 50, costType: "spend", costNote: "shorter VA waits, mental-health & suicide prevention, benefits backlog, veteran homelessness",
      lead: "Caring for the people we send to war is part of the cost of war — and for too long we've underpaid it in peacetime. We cut VA wait times, guarantee mental-health care, clear the benefits backlog, and end veteran homelessness. A promise kept, not a slogan at a podium.",
      plan: [
        { b: "Cut VA wait times.", t: "Fund the staff and capacity for timely care — and keep the choice to see a community doctor when the VA can't deliver fast." },
        { b: "Mental health & suicide prevention.", t: "Immediate, no-copay mental-health care for every veteran, with real outreach to those at risk." },
        { b: "Clear the benefits backlog.", t: "Modernize claims so earned benefits arrive in weeks, not years." },
        { b: "End veteran homelessness.", t: "Housing-first for every veteran without a home." },
      ],
      detail: [
        { h: "An obligation, not charity", p: "We budget veterans' care as a permanent part of the cost of national defense — so it stops being the thing that gets cut once the war ends." },
        { h: "Choice when it counts", p: "Strengthen the VA, and keep the option to see a private provider when that's faster — both, not either-or." },
        { h: "The crisis we ignore", p: "Roughly 22 veterans a day die by suicide. This funds the response at the scale an emergency demands." },
      ],
      qa: [
        { q: "Is this privatizing the VA?", a: "No. We strengthen the VA and keep community care as a backstop, not a replacement — most veterans get excellent care at the VA when it's properly funded." },
        { q: "Can we afford it?", a: "It's a fraction of what we spend deploying troops. Honoring the promise is part of the price of asking people to serve." },
      ],
      aisle: {
        rep: [{ c: "Skip the bureaucracy — just give vets vouchers for private care.", r: "We expand the choice to see a private doctor when the VA can't deliver fast, while fixing the VA so most get great care close to home. Vets deserve both." }],
        dem: [{ c: "Will this actually cut wait times?", r: "Yes — it funds the staff, facilities, and modernized claims that cause the delays, with community care as a backstop while the VA catches up." }],
        ind: [
          { c: "Why is this never solved?", r: "Because the promise is made in wartime and underfunded in peace. We make veterans' care a permanent line in the defense budget, so it stops being optional." },
          { c: "What about veteran suicide?", r: "Immediate, no-copay mental-health care and real outreach, funded at emergency scale — because ~22 lost a day is an emergency." },
        ],
        response: "A country that can afford to send people to war can afford to take care of them when they come home. This isn't charity — it's the bill that comes with the uniform, and we pay it in full.",
      },
    },
    {
      id: "public-health", cat: "care", icon: "🦠",
      title: "Public Health & Pandemic Readiness", tagline: "Stay ready, so the next outbreak is a scare, not a catastrophe.",
      cost: 35, costType: "spend", costNote: "rebuild local health departments, a national reserve, disease surveillance, global cooperation",
      lead: "COVID showed what happens when public health is hollowed out: a million Americans dead and trillions lost. We rebuild the local health departments, stockpiles, and disease surveillance that catch the next outbreak early — and work with the world, because a virus doesn't carry a passport.",
      plan: [
        { b: "Rebuild public-health departments.", t: "Fund the state and local health workforce that's been gutted for decades." },
        { b: "Be ready for the next pandemic.", t: "A stocked national reserve, surge manufacturing, and a clear rapid-response playbook." },
        { b: "Catch it early.", t: "Modern disease surveillance plus fast, fair development of vaccines and treatments." },
        { b: "Lead globally.", t: "A threat anywhere is a threat everywhere — invest in global health cooperation." },
      ],
      detail: [
        { h: "Prevention is the cheapest care", p: "Every dollar spent on preparedness saves many in a crisis. The capacity that was missing in 2020 cost us trillions." },
        { h: "A scalpel, not a sledgehammer", p: "Early detection and ready capacity are what let us respond precisely — and make blunt, economy-crushing lockdowns unnecessary." },
        { h: "Not just pandemics", p: "The same backbone improves chronic-disease prevention, clean water, and food safety every ordinary year." },
      ],
      qa: [
        { q: "Isn't COVID over — why spend now?", a: "Preparedness is insurance: you buy it before the fire, not during. The next outbreak isn't a question of if, but when." },
        { q: "Is this more lockdowns?", a: "The opposite. Early detection and standing capacity are what make sweeping shutdowns avoidable." },
      ],
      aisle: {
        rep: [{ c: "This is just a bigger federal health bureaucracy.", r: "It mostly funds local and state departments and a supply reserve — the missing capacity that cost trillions in 2020. Preparedness is the cost-saving, conservative move." }],
        dem: [{ c: "Does it address health equity?", r: "Yes — it rebuilds the local departments serving the hardest-hit communities and makes sure vaccines and treatments actually reach everyone." }],
        ind: [
          { c: "Will it prevent another shutdown?", r: "That's the goal — ready capacity lets us respond with a scalpel instead of a sledgehammer." },
          { c: "Is it worth the cost?", r: "At ~$35B it's a rounding error next to the trillions a botched pandemic costs. The cheapest insurance we can buy." },
        ],
        response: "We paid trillions and lost a million Americans because we'd let public health wither. For a sliver of that, we stay ready — so the next one is a scare we handle, not a catastrophe we survive.",
      },
    },
    {
      id: "mental-health", cat: "care", icon: "🧠",
      title: "Mental Health & the Addiction Crisis", tagline: "Treat it like the health emergency it is.",
      cost: 50, costType: "spend", costNote: "988 crisis response, treatment on demand, the overdose crisis, school mental health",
      lead: "A mental-health and addiction crisis is killing Americans — roughly 100,000 overdose deaths a year, on top of rising despair. We answer it like the medical emergency it is: a real crisis-response system, treatment on demand, and an end to dying on a waitlist.",
      plan: [
        { b: "Fund the 988 crisis line & response.", t: "Trained mental-health responders for mental-health emergencies — not police as the default." },
        { b: "Treatment on demand.", t: "No waitlists for addiction or mental-health treatment, including the medications proven to work." },
        { b: "Tackle the overdose crisis.", t: "Naloxone everywhere, proven harm reduction, and going hard after the traffickers and supply." },
        { b: "Reach kids early.", t: "Counselors and real mental-health care in every school." },
      ],
      detail: [
        { h: "Care, not cuffs", p: "Routing crises to clinicians instead of jails and ERs is both more humane and far cheaper — those are the most expensive, least effective options we've got." },
        { h: "Do what works", p: "Medication-assisted treatment and harm reduction are proven to save lives and connect people to recovery. We scale them." },
        { h: "Parity, enforced", p: "Insurers must cover mental health like physical health — for real, with teeth." },
      ],
      qa: [
        { q: "Isn't addiction a personal failing?", a: "It's a treatable medical condition. Decades of evidence show treatment works far better — and costs far less — than punishment." },
        { q: "Doesn't harm reduction enable drug use?", a: "The evidence is the opposite: it saves lives and connects people to treatment without increasing use." },
      ],
      aisle: {
        rep: [{ c: "This is soft on drugs.", r: "It's tough on death. We pair treatment and naloxone with going hard after traffickers and supply. Punishment alone has failed for 50 years; this saves lives and money." }],
        dem: [{ c: "Will it reach underserved communities?", r: "Yes — the 988 system, school care, and treatment capacity are aimed squarely at the places with the fewest resources and the highest need." }],
        ind: [
          { c: "Why does this keep getting worse?", r: "Because we answer a health emergency with jails and waitlists. Treat it as medicine — crisis response, treatment on demand, prevention — and the numbers come down." },
          { c: "Why not have police handle crises?", r: "We add trained mental-health responders so officers aren't the default for someone in crisis — safer for everyone involved." },
        ],
        response: "We're losing more Americans a year to overdoses than to car crashes, and we answer it with waitlists and jail cells. Treat it like the medical emergency it is — care on demand, crisis teams, prevention — and we stop the dying.",
      },
    },
    {
      id: "infrastructure", cat: "future", icon: "🌉",
      title: "Rebuild America's Infrastructure", tagline: "Fix the backbone of the country — and build it to last.",
      cost: 150, costType: "spend", costNote: "roads & bridges, water systems & lead pipes, transit & ports, climate resilience",
      lead: "Crumbling roads, century-old water pipes, and bottlenecked ports are a hidden tax on everyone. We rebuild the physical backbone of the country — fixing what's broken first, getting the lead out of the water, and building it to withstand the storms that are already here.",
      plan: [
        { b: "Partner state by state.", t: "Work directly with each state to plan, coordinate, and manage projects — federal funding and standards, state and local delivery — so the money goes where each state actually needs it, not where Washington guesses from afar." },
        { b: "Fix what's broken.", t: "Repair the worst roads and bridges before chasing new ribbon-cuttings." },
        { b: "Get the lead out.", t: "Replace every lead water pipe and modernize aging water systems." },
        { b: "Move people and goods.", t: "Modern transit, ports, and freight that cut congestion and lower prices." },
        { b: "Build resilient.", t: "Harden every project against floods, heat, and storms, so we don't rebuild it twice." },
      ],
      detail: [
        { h: "A tax you already pay", p: "Bad roads, water-main breaks, and delays cost households thousands a year. Fixing them is effectively a raise." },
        { h: "State by state, not top-down", p: "Each state co-owns the plan: we set national standards and put up federal dollars, but states and localities pick the projects and run delivery, with a shared scoreboard so we can see what's getting built and what it costs. Local knowledge plans better than a distant agency." },
        { h: "Fix-it-first", p: "Maintaining what we have is the highest-return, least-glamorous spending there is — and far cheaper than waiting for it to fail." },
        { h: "Built here", p: "American materials and well-paid labor, with real oversight to keep costs in line." },
      ],
      qa: [
        { q: "Didn't we just pass an infrastructure bill?", a: "A down payment, not the finish. The backlog is decades deep; this sustains the investment instead of letting it lapse." },
        { q: "Won't it run over budget?", a: "Fix-it-first, standardized projects, and real oversight keep costs in check — deferring maintenance until things break is the truly expensive path." },
      ],
      aisle: {
        rep: [{ c: "Federal infrastructure spending is wasteful.", r: "Fix-it-first maintenance is the least-wasteful spending there is, built with American labor and materials. The real waste is the pothole, the water-main break, and the bridge we let fail." }],
        dem: [{ c: "Is it green and union?", r: "Built resilient, with good wages, prioritizing the lead pipes and transit that matter most to working communities." }],
        ind: [
          { c: "Will I actually notice?", r: "Yes — shorter commutes, fewer blowouts, clean water from the tap, and lower prices as freight moves faster. It shows up in your week and your wallet." },
          { c: "Why does it always cost so much?", r: "Because we defer maintenance until things break — the most expensive way to do it. Fix-it-first and steady funding are cheaper over time." },
        ],
        response: "You feel our crumbling infrastructure every day — in the pothole, the boil-water notice, the traffic. Rebuilding it isn't a luxury; it's a raise for every family and the foundation for everything else we want to build.",
      },
    },
    {
      id: "broadband", cat: "future", icon: "📡",
      title: "Internet for Every American", tagline: "In 2028, broadband is a utility — so we wire the whole country.",
      cost: 25, costType: "spend", costNote: "fiber to unserved areas, affordability subsidies, devices & digital skills",
      lead: "Internet is no longer a luxury — it's how you work, learn, see a doctor, and reach your government. We finish the job: affordable, high-speed internet to every home in America, rural and tribal areas included, treated like the essential utility it has become.",
      plan: [
        { b: "Connect everyone.", t: "Build fiber to the rural and tribal communities the market skipped for 20 years." },
        { b: "Make it affordable.", t: "Subsidies so no family is priced off the internet." },
        { b: "Close the device & skills gap.", t: "Devices and digital-skills training for the people who need them." },
        { b: "Keep it open.", t: "Net neutrality and real competition, so providers can't gouge or throttle." },
      ],
      detail: [
        { h: "An essential utility", p: "Like electricity a century ago, we wire the whole country — not just the profitable parts — because being offline now means being shut out." },
        { h: "The cost of disconnection", p: "No internet means lost jobs, missed schooling, and no telehealth. Closing the gap pays for itself in opportunity." },
        { h: "A public option where needed", p: "Municipal and co-op networks where private ISPs simply refuse to serve — filling the gap, not taking over." },
      ],
      qa: [
        { q: "Didn't we already fund broadband?", a: "Repeatedly, and it repeatedly under-delivered. We finish it with accountability, open networks, and a focus on the truly unserved." },
        { q: "Is the government becoming an ISP?", a: "Only where private providers refuse to serve. Public and co-op networks fill the gap; private ISPs compete on top." },
      ],
      aisle: {
        rep: [{ c: "Let the market handle broadband.", r: "The market skipped rural and tribal America for two decades. We seed open networks and let private ISPs compete on top — market-friendly where it works, public only where it won't." }],
        dem: [{ c: "Will it reach tribal & rural communities?", r: "They're the priority — that's where the gap is widest and the market has failed longest." }],
        ind: [
          { c: "Why is my internet so expensive and slow?", r: "Because much of the country has one provider and no competition. Open networks fix the price; affordability subsidies fix the rest." },
          { c: "Is internet really essential?", r: "Try applying for a job, doing homework, or seeing a doctor without it. In 2028 it's as essential as electricity — so we treat it that way." },
        ],
        response: "No kid should do homework in a parking lot for the Wi-Fi. We finish wiring America — affordable, high-speed, everywhere — and treat the internet like the essential utility it has become.",
      },
    },
    {
      id: "supreme-court", cat: "democracy", icon: "🧑‍⚖️",
      title: "Fix the Supreme Court", tagline: "Term limits, one pick per president, an odd number of seats.",
      cost: 0, costType: "neutral", costNote: "structural reform — likely a constitutional amendment; no real federal outlay",
      lead: "A lifetime seat on the most powerful court in the country, handed out by the luck of a death or a retirement, has turned the Supreme Court into a partisan prize. We fix the structure itself: every justice serves a single limited term, every president appoints exactly one, the Court keeps an odd number of seats — and politics stops warping it.",
      plan: [
        { b: "Term limits for justices.", t: "No more lifetime appointments — each justice serves a single, fixed term, then rotates to a lower court." },
        { b: "One pick per president.", t: "Every president appoints exactly one justice, so the Court tracks the country over time instead of the timing of a vacancy." },
        { b: "An odd number of seats.", t: "Keep an odd number of justices so the Court can never deadlock in a tie." },
        { b: "Real ethics rules.", t: "A binding code of conduct, with recusal and disclosure that actually mean something." },
      ],
      detail: [
        { h: "Why term limits", p: "Fixed terms make the Court predictable and lower the stakes of any single seat — cooling the scorched-earth confirmation wars and the temptation to time retirements for political advantage." },
        { h: "Why one per president", p: "Tying appointments to elections, not to actuarial luck, means no president gets a windfall of seats and none is shut out. The Court comes to reflect a generation of voters." },
        { h: "It takes an amendment", p: "Doing this durably likely requires a constitutional amendment — a high bar, but term limits for justices are popular across the spectrum." },
      ],
      qa: [
        { q: "Isn't this just court-packing?", a: "The opposite. Packing is a one-time grab of extra seats by one side; this is a neutral, permanent rule that binds every president of every party equally." },
        { q: "Do sitting justices lose their seats?", a: "No — the reform phases in for future appointments and respects current justices, so it's a structural fix, not a purge." },
      ],
      aisle: {
        rep: [{ c: "This is a Democratic power grab at the Court.", r: "It binds every president of every party equally — one appointment each, fixed terms. It takes the windfall away from everyone, which is exactly why those who benefit from the status quo dislike it." }],
        dem: [{ c: "Why not just add seats now?", r: "A one-time addition invites endless retaliation and an ever-growing Court. Fixed terms and one-pick-per-president is the durable, principled fix that doesn't escalate the war." }],
        ind: [
          { c: "Why should a death decide the country's direction?", r: "It shouldn't — that's the whole problem. One appointment per president, with fixed terms, ties the Court to elections instead of to who happens to retire or pass away." },
          { c: "Can this even be done?", r: "Likely through a constitutional amendment — hard by design — but justice term limits poll well across party lines, which makes it a fight worth leading." },
        ],
        response: "A lifetime seat decided by the timing of a funeral is no way to run the highest court in the land. Fixed terms, one appointment per president, an odd number of seats, and real ethics — a Court that answers to the Constitution and the country, not to luck and partisanship.",
      },
    },
    {
      id: "waste", cat: "future", icon: "♻️",
      title: "Refocus the EPA on Waste & Recycling", tagline: "Make recycling real, make reuse the default, stop drowning in our own trash.",
      cost: 0, costType: "neutral", costNote: "refocus the existing EPA + recycling/reuse infrastructure, funded by producer-responsibility fees — the polluter pays",
      lead: "America is the world's biggest trash producer, and our recycling system is half-broken: most plastic is never recycled, and what we can't bury we ship overseas or watch wash into the ocean. We refocus the EPA around one goal — waste as little as possible. Make producers responsible for what they sell, make reuse the default, and make recycling actually work — paid for by the companies that create the packaging, not the families throwing it away.",
      plan: [
        { b: "Refocus the EPA's mission.", t: "Reorient the agency around cutting waste at the source — driving down what we landfill, burn, and dump in the ocean — with recycling and reuse as the default, not an afterthought. We point an agency we already have at the problem instead of building a new one." },
        { b: "Make producers responsible.", t: "Companies that make the packaging pay to collect and recycle it. That puts the cost on the people who design throwaway products — and rewards the ones who design for reuse." },
        { b: "Reuse before recycle.", t: "Prioritize reusable and refillable systems over single-use: standardized containers, deposit-return, and a phase-down of the worst single-use plastics. A bottle reused 50 times beats 50 'recyclable' ones that mostly aren't." },
        { b: "Make recycling & composting actually work.", t: "National standards so a container recyclable in one state is recyclable in all of them, real composting for food waste (our single biggest landfilled material), and an end to exporting our trash overseas." },
        { b: "Make things last.", t: "Right-to-repair, so electronics and appliances can be fixed instead of tossed — cutting the fastest-growing waste stream there is." },
        { b: "Protect the oceans.", t: "Stop plastic at the source and fund cleanup of the rivers, coasts, and waters where our waste ends up." },
      ],
      detail: [
        { h: "The polluter pays", p: "Today, cities and taxpayers foot the bill to dispose of packaging that companies chose to make throwaway. Producer responsibility flips that: the fee funds the whole system — keeping it roughly budget-neutral — and gives companies a real reason to use less and design for reuse." },
        { h: "Reduce and reuse beat recycle", p: "Recycling is the last resort, not the first. We build the deposit-return and refill systems that make reuse easy, so we throw away less in the first place instead of pretending a blue bin fixes everything." },
        { h: "Why refactor the EPA", p: "We don't need a new agency — we need the one we have to treat waste like the priority it's become. Refocusing the EPA's mission and metrics around waste reduction is faster, cheaper, and more accountable than standing up something new." },
      ],
      qa: [
        { q: "Isn't recycling already a thing — why isn't it working?", a: "Because most packaging was never designed to be recycled, and the companies making it bear none of the cost. We fix both: producers pay, and national standards mean a container recyclable in one place is recyclable everywhere." },
        { q: "Won't this raise prices on everyday goods?", a: "Producer fees are small per item, and they're offset by ending the taxpayer-funded cleanup we already pay for through city budgets — plus reusable systems save money over time. The cheap throwaway price was never the real price; we just paid it later, in landfills and oceans." },
      ],
      aisle: {
        rep: [
          { c: "This is more federal red tape on business.", r: "It's the opposite of a subsidy: it makes companies pay for the mess their packaging creates instead of dumping the cost on your town's budget. Build throwaway junk, pay for it; build reusable, save. Producer-responsibility laws already exist in plenty of red and blue states — this is accountability and honest pricing, not red tape." },
        ],
        dem: [
          { c: "Does it tackle plastic and environmental justice?", r: "Yes — it cuts plastic at the source, funds ocean and waterway cleanup, and (paired with our communities plan) keeps new waste facilities from being dumped on the same overburdened neighborhoods again." },
        ],
        ind: [
          { c: "Is recycling even worth it, or is it all a scam?", r: "A lot of today's recycling is theater — which is exactly what we fix. By making producers pay and putting reuse first, we stop pretending and build a system where what you sort actually gets used again." },
          { c: "Why refactor the EPA instead of making a new agency?", r: "Because a new bureaucracy is slow and expensive. The EPA already exists; we point its mission and metrics at waste reduction — faster, cheaper, and accountable." },
        ],
        response: "We built a throwaway economy and called the bill someone else's problem — until it's overflowing our landfills and washing up on our beaches. Refocus the EPA on using less and reusing more, make the companies that profit from the packaging pay to deal with it, and we stop drowning in our own trash.",
      },
    },
    {
      id: "govtracker", cat: "democracy", icon: "📊",
      title: "GovTracker — A Government You Can Watch", tagline: "One official, public, live dashboard for the entire federal government.",
      cost: 0, costType: "neutral", costNote: "built and run within existing agencies; open-source keeps the cost negligible",
      lead: "You can track a $5 package across the country in real time, but you can't see where trillions of your tax dollars go. As president, we'll build GovTracker: one official, government-hosted website — open to everyone — that shows the whole federal government live. Every dollar, every vote, every contract, and a running read on whether people are actually better off.",
      plan: [
        { b: "Every dollar, in real time.", t: "A ticking national-debt and deficit clock, plus federal spending and revenue broken down like your banking app — built on the same live U.S. Treasury data this campaign already cites." },
        { b: "Every contract and grant.", t: "Searchable down to the line item, so waste and favoritism have nowhere to hide." },
        { b: "Every vote and bill, in plain English.", t: "How your representatives voted and what the bill actually does — no law degree required." },
        { b: "The Humanity Score, live.", t: "A monthly, public read on health, security, opportunity, and trust — the scoreboard for whether government is working." },
        { b: "Open by default.", t: "A free public API, FOIA-by-default, and open-source code, so journalists, researchers, and citizens can build on it." },
        { b: "States can opt in.", t: "Any state can publish to the same open standard, so transparency spreads without waiting on Washington." },
      ],
      detail: [
        { h: "Why the government should host it", p: "Transparency shouldn't depend on a campaign, a nonprofit, or a billionaire's goodwill. It belongs to the public — so it's run by the public's government: official, permanent, and nonpartisan." },
        { h: "Cheap to build, priceless to have", p: "It's mostly wiring together data the government already collects across clunky, scattered sites. Open-source and existing agency staff keep the cost negligible against what sunlight saves in waste and fraud." },
        { h: "Follow the money", p: "Lobbying and campaign cash linked to the votes they shaped — so you can see influence, not just spending." },
      ],
      qa: [
        { q: "Doesn't a lot of this data already exist?", a: "Yes — scattered across dozens of clunky federal sites (USAspending, Congress.gov, Treasury, and more). GovTracker puts it in one place, in plain language, updated live, and free to reuse." },
        { q: "Won't agencies resist showing their work?", a: "Some will — which is exactly the point. Sunlight changes behavior. We make openness the default and secrecy the narrow exception that has to be justified." },
      ],
      aisle: {
        rep: [{ c: "This is just another costly government website.", r: "It mostly wires together data taxpayers already paid to collect, built open-source within existing agencies. For a rounding error it's the strongest anti-waste, anti-fraud tool we could build — the accountability conservatives have wanted for decades." }],
        dem: [{ c: "Will it actually drive accountability?", r: "Yes — public, searchable, real-time data is how watchdogs and journalists catch waste and favoritism. What gets measured and seen gets fixed." }],
        ind: [
          { c: "Why doesn't this already exist?", r: "Because the people it would expose have little reason to build it, and the data is scattered across clunky portals almost by design. GovTracker makes it one clean, public, live picture." },
          { c: "Is it just a dashboard, or does it change anything?", r: "Visibility changes behavior. A government that has to show its work in real time spends more carefully — and you no longer have to take anyone's word for it." },
        ],
        response: "You can watch a pizza get made through an app, but you can't watch your government spend $7 trillion. That's backwards. GovTracker is a permanent, public, government-run window into every dollar and decision — because a government that shows its work is a government that behaves.",
      },
    },
    {
      id: "foreign-policy", cat: "future", icon: "🕊️",
      title: "Diplomacy First", tagline: "Lead the world with alliances and wisdom, not just weapons.",
      cost: 15, costType: "spend", costNote: "rebuild the diplomatic corps, fund conflict prevention & smart development",
      lead: "America is strongest when it leads — but leadership is more than the world's biggest military. We invest in diplomacy, alliances, and development, because preventing wars is far cheaper than fighting them. We rebuild the State Department, stand with our allies, end the forever wars, and use American power wisely: strength and restraint, not endless war.",
      plan: [
        { b: "Fund diplomacy, not just war.", t: "Rebuild the diplomatic corps so we have people in the room before conflicts start, not just troops after they do." },
        { b: "Stand with our allies.", t: "Strengthen the alliances that multiply our power — and expect partners to carry their fair share." },
        { b: "End the forever wars.", t: "No more open-ended conflicts without a clear mission, cost, and exit — and Congress, not just the president, decides when America goes to war." },
        { b: "Smart development, not just aid.", t: "Target development that builds stability and counters rivals without firing a shot." },
      ],
      detail: [
        { h: "Prevention is cheaper than war", p: "A fraction of one year's war spending, invested in diplomacy and development, can prevent the conflicts that cost trillions and thousands of lives." },
        { h: "Alliances are leverage", p: "Our network of allies is an advantage no rival can match. We invest in it instead of insulting it." },
        { h: "War powers belong to Congress", p: "We restore the constitutional rule that the people's representatives — not one person — decide when America goes to war." },
      ],
      qa: [
        { q: "Isn't this weakness?", a: "The opposite — it's strength used wisely. We keep the world's best military (see the defense-reform plan) and stop wasting it on wars without end. The strongest armies still lose wars diplomacy could have prevented." },
        { q: "Why fund other countries?", a: "Targeted development is cheap insurance: it heads off the instability, refugee crises, and conflicts that cost us far more later — and it counters rivals filling the vacuum." },
      ],
      aisle: {
        rep: [{ c: "This is retreat — it emboldens our enemies.", r: "Strength and restraint aren't opposites. We keep the world's most capable military and use diplomacy so we don't have to spend it. Reagan negotiated from strength; so do we. Endless wars with no exit are what actually drain American power." }],
        dem: [{ c: "Will it really end the forever wars?", r: "Yes — by restoring Congress's war-powers role, requiring a clear mission and exit for any deployment, and funding the diplomacy that prevents wars in the first place." }],
        ind: [
          { c: "Haven't we heard 'end the wars' before?", r: "Often, rarely delivered. The difference here is structural: war powers back to Congress, sunset clauses on authorizations, and real money for the diplomacy that makes prevention beat intervention." },
          { c: "Is $15B even enough to matter?", r: "For diplomacy, yes — the entire State Department budget is a rounding error next to the Pentagon's. A little more, spent preventing wars, saves enormously on fighting them." },
        ],
        response: "The strongest thing America can do is lead so wisely that we rarely have to fight. We keep the world's best military — and invest in the diplomacy, alliances, and development that keep it in reserve. Peace through strength and wisdom.",
      },
    },
    {
      id: "defense-reform", cat: "economy", icon: "🛡️",
      title: "A Defense That Defends", tagline: "Pass the audit, cut the waste, keep the world's best military.",
      cost: 50, costType: "revenue", costNote: "savings from passing the Pentagon audit and ending waste & failed weapons programs",
      lead: "The Pentagon has never passed an audit. It spends more than the next ten countries combined — much of it on cost-overrun weapons the generals didn't ask for — while some troops rely on food stamps. We don't gut defense; we make it accountable. Pass the audit, cut the waste and the boondoggles, and reinvest in the people and capabilities that actually keep us safe.",
      plan: [
        { b: "Pass the audit.", t: "The Pentagon must account for every dollar like every other agency — or lose the funding it can't explain." },
        { b: "Cut the waste, not the muscle.", t: "End cost-overrun weapons programs and contractor gouging; keep the readiness, pay, and modern capabilities that matter." },
        { b: "Take care of the troops.", t: "A military that relies on food stamps is a scandal — raise junior-enlisted pay and fix military housing." },
        { b: "Fund the real threats.", t: "Shift toward cyber, space, and modern defense instead of Cold-War relics." },
      ],
      detail: [
        { h: "Bigger isn't safer", p: "We outspend the next ten nations combined. The waste isn't strength — it's a tax on you and a gift to contractors." },
        { h: "The audit is the lever", p: "An agency that can't pass an audit shouldn't get a blank check. Accountability is how the savings get found." },
        { h: "Savings, reinvested", p: "Part of the savings goes back to the troops and to real modern threats; the rest helps the bottom line." },
      ],
      qa: [
        { q: "Are you cutting our defense?", a: "No — we keep the world's most capable military. We cut the waste, fraud, and failed programs the Pentagon itself can't account for, and reinvest in readiness and the troops." },
        { q: "Can you really find $50B?", a: "Failed audits and watchdog reports point to far more than that in waste, improper payments, and overpriced contracts. $50B is conservative." },
      ],
      aisle: {
        rep: [{ c: "Cutting defense makes us weaker.", r: "Passing an audit and ending contractor gouging isn't cutting defense — it's the accountability conservatives demand everywhere else. We keep the muscle, cut the fat, and pay the troops better. A military that can't pass an audit is the real risk." }],
        dem: [{ c: "Will this actually shrink the bloat?", r: "Yes — tie funding to passing the audit, kill the cost-overrun programs, rein in contractors, and raise junior pay and fix housing. Accountability with a conscience." }],
        ind: [
          { c: "Why has no one done this?", r: "Because defense contractors are in nearly every district and the politics are hard. We make the audit non-negotiable and put the savings somewhere visible — the troops and the deficit." },
          { c: "Is this safe?", r: "Safer. Money wasted on boondoggles is money not spent on readiness, cyber, and the people who serve. Efficiency is strength." },
        ],
        response: "The Pentagon spends more than the next ten countries combined and still can't pass an audit — while some of our troops are on food stamps. That's not strength, it's waste. Pass the audit, cut the boondoggles, pay the troops, and we get a defense that actually defends — for less.",
      },
    },
    {
      id: "family-farms", cat: "economy", icon: "🌾",
      title: "Family Farms & Food Security", tagline: "Back the people who feed us — not just agribusiness.",
      cost: 35, costType: "spend", costNote: "redirect support to family farms, strengthen food assistance, build resilient local food systems",
      lead: "Farm policy mostly flows to giant agribusiness while family farms go under and rural towns hollow out. We flip it: back the family farmers who actually feed us, guarantee every American access to healthy food, and build a food system that's secure, fair, and resilient.",
      plan: [
        { b: "Back family farms.", t: "Redirect support from mega-agribusiness to the small and mid-size family farms that anchor rural communities — and to new farmers." },
        { b: "Food security for all.", t: "No American should go hungry in the richest country on earth — strengthen food assistance and close food deserts." },
        { b: "Fair markets.", t: "Break up the meatpacking and seed monopolies that squeeze both farmers and shoppers (with our antitrust plan)." },
        { b: "Resilient & healthy.", t: "Support regenerative practices and local food systems that withstand drought, pests, and price shocks." },
      ],
      detail: [
        { h: "Who farm policy serves", p: "Today most farm subsidies flow to the largest operations. We tilt support back toward family farms, new farmers, and local food." },
        { h: "Hunger is a choice", p: "In the wealthiest nation on earth, no child should go hungry. Food assistance is cheap, effective, and pays off for a lifetime." },
        { h: "Food security is national security", p: "A food system run by a few monopolies and vulnerable to shocks is a strategic risk. We make it resilient." },
      ],
      qa: [
        { q: "Isn't this just more subsidies?", a: "It's a redirection — from the biggest agribusinesses toward family farms, new farmers, and local food systems that build rural economies and resilience." },
        { q: "Why food assistance?", a: "It's one of the highest-return programs there is: kids who don't go hungry do better in school, health, and earnings for life — and it keeps farmers' markets strong." },
      ],
      aisle: {
        rep: [{ c: "Washington shouldn't pick winners in farming.", r: "It already does — and the winners are giant agribusinesses. We level the field for the family farmer, break up the monopolies squeezing them, and cut red tape. That's a fairer market, not a bigger government." }],
        dem: [{ c: "Does it tackle hunger and food deserts?", r: "Directly — stronger food assistance, support for local food and farmers' markets, and incentives to bring healthy food to the communities that lack it." }],
        ind: [
          { c: "Why should city folks care about farm policy?", r: "Because it's your food, your grocery bill, and your country's resilience. A handful of monopolies set prices for both the farmer and you; fixing that helps everyone at the checkout." },
          { c: "Is rural America an afterthought here?", r: "It's the point. Family farms anchor rural towns; backing them — plus broadband and infrastructure — is how those communities come back." },
        ],
        response: "A country this rich shouldn't let its family farmers go bankrupt or its kids go hungry. Back the people who actually feed us, guarantee everyone healthy food, and break the monopolies squeezing both farmer and shopper — that's a food system worthy of America.",
      },
    },

  ],

  /* ---------------- The revenue plan + fiscal facts (Budget & Deficit pages) ---------------- */
  funding: [
    { label: "Tax the ultra-rich — wealth tax + higher top rates", amt: 1000, id: "tax-rich", icon: "💰" },
    { label: "Health savings recaptured — from Universal Healthcare", amt: 810, id: "healthcare", icon: "🩺" },
    { label: "Corporate tax reform & global minimum tax", amt: 450, id: "corporate", icon: "🏢" },
    { label: "Economic growth — a wider tax base from a healthier, trained, better-connected workforce and modern infrastructure", amt: 500, id: "education", icon: "🌱" },
    { label: "Carbon fee on big polluters", amt: 200, id: "carbon", icon: "🏭" },
    { label: "The AI tax — per-token sales tax + automation levy", amt: 200, id: "ai-tax", icon: "🤖" },
    { label: "Data-center water & energy tax", amt: 50, id: "data-centers", icon: "💧" },
    { label: "Pentagon savings — pass the audit, cut waste", amt: 50, id: "defense-reform", icon: "🛡️" },
    { label: "The financial-transaction tax", amt: 80, id: "ftt", icon: "📈" },
    { label: "End stepped-up basis & 'buy, borrow, die'", amt: 60, id: "stepped-up-basis", icon: "🪜" },
    { label: "Close the carried-interest loophole", amt: 20, id: "carried-interest", icon: "🎩" },
    { label: "Cap the like-kind (1031) loophole", amt: 20, id: "like-kind", icon: "🔁" },
  ],
  // Illustrative current fiscal facts ($B unless noted).
  fiscal: { deficitToday: 1800, debtToday: 36000, interestRate: 0.03 },

  // Average annual federal deficit (−) or surplus (+) by president, in BILLIONS
  // of nominal dollars (illustrative, ~last 50 years). `key` → portrait file.
  presidents: [
    { name: "Ford", years: "1974–77", dollars: -60, party: "R", key: "ford" },
    { name: "Carter", years: "1977–81", dollars: -60, party: "D", key: "carter" },
    { name: "Reagan", years: "1981–89", dollars: -185, party: "R", key: "reagan" },
    { name: "Bush Sr.", years: "1989–93", dollars: -290, party: "R", key: "bushsr" },
    { name: "Clinton", years: "1993–2001", dollars: 20, party: "D", key: "clinton" },
    { name: "Bush Jr.", years: "2001–09", dollars: -400, party: "R", key: "bushjr" },
    { name: "Obama", years: "2009–17", dollars: -1100, party: "D", key: "obama" },
    { name: "Trump", years: "2017–21", dollars: -1700, party: "R", key: "trump" },
    { name: "Biden", years: "2021–25", dollars: -1800, party: "D", key: "biden" },
    { name: "Trump 2.0", years: "2025–29", dollars: -1900, party: "R", key: "trump" },
    { name: "Avery", years: "2029–", dollars: 278, party: "I", key: "avery", soon: true },
  ],

  // Per-policy cost/revenue breakdown — the single headline number split into the
  // pieces that drive it ($B/yr). Each list sums to that policy's cost (or, for
  // revenue policies, its revenue). Illustrative.
  breakdowns: {
    healthcare: [
      { label: "Hospital & physician care, now publicly paid", amt: 800 },
      { label: "Prescription drugs (after negotiation)", amt: 200 },
      { label: "Newly covered: dental, vision, hearing, mental & long-term care", amt: 250 },
      { label: "Expanded capacity — clinics, training, more providers", amt: 90 },
      { label: "Administration of the single public plan", amt: 60 },
    ],
    education: [
      { label: "Universal pre-K & after-school", amt: 60 },
      { label: "Free community & technical college + dual enrollment", amt: 55 },
      { label: "Teacher pay floor (federal top-ups)", amt: 40 },
      { label: "K–12 modernization & counselors", amt: 25 },
    ],
    housing: [
      { label: "Social-housing construction & operating subsidy", amt: 60 },
      { label: "Expanded housing vouchers", amt: 55 },
      { label: "Housing-first homelessness programs", amt: 20 },
      { label: "First-home property-tax break (net of second-home surtax)", amt: 15 },
    ],
    childcare: [
      { label: "Capped / free childcare subsidies", amt: 180 },
      { label: "12 weeks paid family & medical leave (insurance pool)", amt: 90 },
      { label: "Living wage for early educators", amt: 30 },
    ],
    "social-security": [
      { label: "Higher benefits, especially for low-income retirees", amt: 150 },
      { label: "Fully offset by lifting the ~$168k payroll-tax cap", amt: -150 },
    ],
    "term-limits": [
      { label: "A constitutional amendment + enforcing the stock-trading ban — no real federal outlay", amt: 0 },
    ],
    "money-politics": [
      { label: "Small-donor public matching fund", amt: 9 },
      { label: "Dark-money disclosure & enforcement", amt: 1 },
    ],
    voting: [
      { label: "Automatic registration & secure election systems", amt: 3 },
      { label: "Election Day holiday ops, early & mail voting", amt: 2 },
      { label: "Paper backups & routine audits", amt: 1 },
    ],
    rights: [
      { label: "Clinic & reproductive-care funding", amt: 1.5 },
      { label: "Enforcement & data-privacy protection", amt: 0.5 },
    ],
    justice: [
      { label: "Reentry & violence-interruption programs", amt: 6 },
      { label: "Public defense & ending cash-bail systems", amt: 4 },
      { label: "Mental-health crisis responders", amt: 3 },
      { label: "Police training, standards & misconduct registry", amt: 2 },
    ],
    immigration: [
      { label: "More immigration judges & courts", amt: 10 },
      { label: "Processing & system modernization", amt: 8 },
      { label: "Border technology", amt: 5 },
      { label: "Integration services", amt: 2 },
    ],
    communities: [
      { label: "Baby bonds — a public nest egg per child", amt: 60 },
      { label: "Fully fund the Indian Health Service + treaty obligations", amt: 35 },
      { label: "Reservation infrastructure: water, housing, broadband", amt: 15 },
      { label: "Puerto Rico & Native Hawaiian investment", amt: 10 },
    ],
    "min-wage": [
      { label: "A wage floor paid by employers — no federal spending, and it lowers public-assistance costs", amt: 0 },
    ],
    "worker-power": [
      { label: "Mostly new labor rules; only modest enforcement funding", amt: 1 },
    ],
    energy: [
      { label: "Grid & transmission modernization (Grid Corps)", amt: 120 },
      { label: "Home heat-pump & weatherization rebates", amt: 90 },
      { label: "Clean-energy deployment incentives", amt: 60 },
      { label: "Clean-energy jobs guarantee & training", amt: 30 },
    ],
    rail: [
      { label: "High-speed line construction (per year of a 10-yr build)", amt: 150 },
      { label: "Stations & local-transit connections", amt: 30 },
      { label: "Trains (rolling stock)", amt: 20 },
    ],
    "humanity-first": [
      { label: "A modern statistical agency — staff & data systems", amt: 1.5 },
      { label: "Publishing the score & independent audits", amt: 0.5 },
    ],
    "gun-safety": [
      { label: "Universal background-check system", amt: 2 },
      { label: "Community violence-interruption grants", amt: 2 },
      { label: "Research & red-flag implementation", amt: 1 },
    ],
    antitrust: [
      { label: "Antitrust enforcement staff & litigation at DOJ / FTC", amt: 2 },
    ],
    disaster: [
      { label: "Pre-disaster mitigation grants", amt: 20 },
      { label: "A larger pre-funded emergency reserve (annualized)", amt: 15 },
      { label: "Faster relief & rebuild-stronger", amt: 5 },
    ],
    "data-centers": [
      { label: "Grid oversight & ratepayer protection", amt: 2 },
      { label: "Clean-power & grid-resilience support", amt: 2 },
      { label: "Water & siting standards enforcement", amt: 1 },
    ],
    space: [
      { label: "NASA missions & basic science boost", amt: 25 },
      { label: "International partnership programs", amt: 8 },
      { label: "Launch & ground infrastructure", amt: 7 },
    ],
    "tax-rich": [
      { label: "Higher top income-tax rates (over $400k)", amt: 500 },
      { label: "Wealth tax on fortunes over $10B", amt: 350 },
      { label: "IRS enforcement on the wealthiest", amt: 150 },
    ],
    "ai-tax": [
      { label: "Per-token sales tax on AI use", amt: 80 },
      { label: "Levy on large-scale labor-displacing automation", amt: 90 },
      { label: "Surcharge on big automation / compute profits", amt: 30 },
    ],
    ftt: [
      { label: "0.1% tax on stock & bond trades", amt: 60 },
      { label: "Tax on derivatives & high-frequency trading", amt: 20 },
    ],
    "carried-interest": [
      { label: "Tax carried interest as ordinary income, not capital gains", amt: 20 },
    ],
    "stepped-up-basis": [
      { label: "Tax unrealized gains at death above the exemption", amt: 45 },
      { label: "Close 'buy, borrow, die' (large asset-backed loans)", amt: 15 },
    ],
    "like-kind": [
      { label: "Cap 1031 like-kind deferral above ~$500k/yr", amt: 20 },
    ],
    corporate: [
      { label: "Corporate rate to ~28%", amt: 250 },
      { label: "15% minimum tax on book profits", amt: 120 },
      { label: "Global minimum tax (end offshore shifting)", amt: 80 },
    ],
    carbon: [
      { label: "Fee on domestic carbon pollution", amt: 150 },
      { label: "Border carbon adjustment on imports", amt: 50 },
    ],
    veterans: [
      { label: "VA health-care capacity & shorter waits", amt: 25 },
      { label: "Mental-health & suicide prevention", amt: 12 },
      { label: "Benefits-backlog modernization", amt: 8 },
      { label: "Housing & homelessness for veterans", amt: 5 },
    ],
    "public-health": [
      { label: "Rebuild state & local health departments", amt: 12 },
      { label: "National stockpile & surge capacity", amt: 12 },
      { label: "Disease surveillance & vaccine readiness", amt: 7 },
      { label: "Global health cooperation", amt: 4 },
    ],
    "mental-health": [
      { label: "988 crisis line & community crisis teams", amt: 18 },
      { label: "Treatment on demand (incl. addiction / opioid)", amt: 20 },
      { label: "School & youth mental health", amt: 8 },
      { label: "Grow the provider workforce", amt: 4 },
    ],
    infrastructure: [
      { label: "Roads & bridges (fix-it-first)", amt: 60 },
      { label: "Water systems & lead-pipe replacement", amt: 40 },
      { label: "Transit, ports & freight", amt: 30 },
      { label: "Resilience & climate-hardening", amt: 20 },
    ],
    broadband: [
      { label: "Build fiber to unserved rural & tribal areas", amt: 15 },
      { label: "Affordability subsidies", amt: 6 },
      { label: "Devices & digital-skills training", amt: 4 },
    ],
    "supreme-court": [
      { label: "A constitutional / structural reform — no federal spending", amt: 0 },
    ],
    waste: [
      { label: "Recycling, composting & reuse infrastructure + ocean cleanup", amt: 20 },
      { label: "Fully offset by producer-responsibility fees on packaging", amt: -20 },
    ],
    govtracker: [
      { label: "Wiring together data agencies already collect — open-source, within existing budgets", amt: 0 },
    ],
    "foreign-policy": [
      { label: "Rebuild the diplomatic corps & State Department", amt: 7 },
      { label: "Conflict prevention & smart development", amt: 5 },
      { label: "Alliance & treaty programs", amt: 3 },
    ],
    "defense-reform": [
      { label: "End cost-overrun weapons & failed programs", amt: 25 },
      { label: "Recover improper payments & contractor overcharges", amt: 15 },
      { label: "Trim Cold-War-era overhead", amt: 10 },
    ],
    "family-farms": [
      { label: "Support for family & new farmers (redirected from agribusiness)", amt: 15 },
      { label: "Food assistance & ending food deserts", amt: 14 },
      { label: "Local food systems & resilience", amt: 6 },
    ],
  },

  // Per-policy honest self-assessment. difficulty/priority are 1–5; odds is the
  // campaign's estimated % chance of becoming law. Illustrative, not a promise.
  metrics: {
    healthcare:        { time: "5–10 years (phased)",     difficulty: 5, priority: 5, odds: 30 },
    education:         { time: "3–5 years",               difficulty: 4, priority: 5, odds: 45 },
    housing:           { time: "3–7 years",               difficulty: 4, priority: 4, odds: 40 },
    childcare:         { time: "2–4 years",               difficulty: 3, priority: 4, odds: 50 },
    "social-security": { time: "1–2 years",               difficulty: 3, priority: 4, odds: 55 },
    veterans:          { time: "1–3 years",               difficulty: 2, priority: 4, odds: 70 },
    "public-health":   { time: "1–3 years",               difficulty: 2, priority: 3, odds: 60 },
    "mental-health":   { time: "2–4 years",               difficulty: 3, priority: 4, odds: 55 },
    "term-limits":     { time: "10+ years (amendment)",   difficulty: 5, priority: 3, odds: 15 },
    "money-politics":  { time: "5–10 years (amendment)",  difficulty: 5, priority: 4, odds: 25 },
    voting:            { time: "1–2 years",               difficulty: 3, priority: 4, odds: 45 },
    rights:            { time: "1–3 years",               difficulty: 4, priority: 4, odds: 40 },
    justice:           { time: "2–4 years",               difficulty: 4, priority: 3, odds: 40 },
    immigration:       { time: "2–5 years",               difficulty: 5, priority: 4, odds: 30 },
    "supreme-court":   { time: "10+ years (amendment)",   difficulty: 5, priority: 3, odds: 12 },
    govtracker:        { time: "1–2 years",               difficulty: 2, priority: 4, odds: 65 },
    communities:       { time: "2–4 years",               difficulty: 4, priority: 3, odds: 35 },
    "min-wage":        { time: "1–2 years",               difficulty: 3, priority: 4, odds: 55 },
    "worker-power":    { time: "1–3 years",               difficulty: 3, priority: 3, odds: 50 },
    antitrust:         { time: "Day one (enforcement)",   difficulty: 2, priority: 3, odds: 65 },
    "tax-rich":        { time: "1–2 years",               difficulty: 4, priority: 5, odds: 35 },
    "ai-tax":          { time: "2–4 years",               difficulty: 4, priority: 3, odds: 30 },
    ftt:               { time: "1–2 years",               difficulty: 3, priority: 3, odds: 40 },
    "carried-interest":{ time: "Within 1 year",           difficulty: 2, priority: 3, odds: 50 },
    "stepped-up-basis":{ time: "1–2 years",               difficulty: 3, priority: 3, odds: 40 },
    "like-kind":       { time: "Within 1 year",           difficulty: 2, priority: 2, odds: 50 },
    corporate:         { time: "1–2 years",               difficulty: 4, priority: 4, odds: 45 },
    carbon:            { time: "2–4 years",               difficulty: 4, priority: 4, odds: 35 },
    energy:            { time: "5–10 years",              difficulty: 4, priority: 4, odds: 50 },
    rail:              { time: "10+ years",               difficulty: 5, priority: 2, odds: 25 },
    infrastructure:    { time: "5–10 years",              difficulty: 3, priority: 4, odds: 60 },
    broadband:         { time: "3–5 years",               difficulty: 2, priority: 3, odds: 60 },
    "data-centers":    { time: "1–3 years",               difficulty: 3, priority: 3, odds: 45 },
    space:             { time: "Ongoing",                 difficulty: 2, priority: 2, odds: 65 },
    waste:             { time: "1–3 years",               difficulty: 2, priority: 3, odds: 55 },
    disaster:          { time: "1–2 years",               difficulty: 2, priority: 3, odds: 60 },
    "gun-safety":      { time: "1–3 years",               difficulty: 4, priority: 3, odds: 35 },
    "humanity-first":  { time: "1–2 years",               difficulty: 2, priority: 3, odds: 60 },
    "foreign-policy":  { time: "1–3 years",               difficulty: 3, priority: 3, odds: 45 },
    "defense-reform":  { time: "2–5 years",               difficulty: 4, priority: 3, odds: 30 },
    "family-farms":    { time: "2–4 years",               difficulty: 3, priority: 3, odds: 45 },
  },

  // The cabinet — placeholder people for now (random portraits). Each department
  // is the "owner" that spearheads its policies. See `governance` below.
  // Each entry is a SEAT (a job description), not a fixed person. `candidates`
  // is an illustrative shortlist — public figures who'd fit the JD *if* they
  // shared the platform and joined the team. Not affiliated; not endorsements.
  cabinet: [
    { key: "president", role: "President of the United States", dept: "The White House", icon: "🇺🇸", self: true, holder: "Rob Avery", img: "assets/rob.svg",
      mission: "Set the agenda, pick the team, and answer to the country for results.",
      responsibilities: ["Own the Humanity Score — the scoreboard every policy is judged against.", "Lead the constitutional fights, including Supreme Court reform.", "Appoint and hold accountable the cabinet below.", "Report honestly to the public, on a clock."],
      daily: ["Set priorities and break ties across the cabinet.", "Make the final call on the hardest trade-offs.", "Take the case to Congress and the country."] },

    { key: "vp", role: "Vice President", dept: "The White House", icon: "🤝", tbd: true,
      mission: "Governing partner, Senate tie-breaker, and successor-in-waiting.",
      responsibilities: ["Be a true governing partner, not a figurehead.", "Break ties in the Senate to move the agenda.", "Champion priority reforms like congressional term limits.", "Be ready to lead on day one."],
      daily: ["Work the Senate and Congress.", "Lead assigned initiatives end-to-end.", "Represent the administration at home and abroad."] },

    { key: "state", role: "Secretary of State", dept: "Department of State", icon: "🕊️",
      mission: "Lead with diplomacy and alliances — and end the forever wars.",
      responsibilities: ["Run U.S. foreign policy and rebuild the diplomatic corps.", "Strengthen alliances and negotiate from strength.", "Wind down open-ended wars; restore Congress's war-powers role.", "Direct development that prevents conflict before it starts."],
      daily: ["Brief the President on global crises and openings.", "Meet counterparts and lead negotiations.", "Run embassies and the State Department workforce."],
      candidates: [
        { name: "William J. Burns", background: "Career ambassador and former CIA Director — among the most respected American diplomats of his generation.", why: "Unflappable, globally trusted, and a master of negotiating from strength instead of bluster." },
        { name: "Fiona Hill", background: "Russia and Europe scholar who served on the National Security Council and testified with rare candor.", why: "Fearless, incorruptible, and credible across the political spectrum." },
        { name: "Ben Rhodes", background: "Former deputy national security advisor and foreign-policy author.", why: "Pairs a diplomacy-first strategy with the ability to explain it to the public." },
      ] },

    { key: "treasury", role: "Secretary of the Treasury", dept: "Department of the Treasury", icon: "💰",
      mission: "Make the tax code fair and fund the agenda without deficits.",
      responsibilities: ["Design and pass progressive tax reform — the wealth tax, top rates, and closing loopholes.", "Run the IRS and rebuild enforcement on the wealthiest filers and corporations.", "Manage the debt and steer toward a lasting surplus.", "Safeguard financial stability."],
      daily: ["Advise the President on revenue, debt, and markets.", "Work Congress on tax and reconciliation bills.", "Oversee Treasury, the IRS, and the financial agencies."],
      candidates: [
        { name: "Gabriel Zucman", background: "Economist (Berkeley) who co-designed the modern wealth tax and pioneered measuring hidden wealth.", why: "If the billionaire tax is the flagship, he is literally its architect." },
        { name: "Lily Batchelder", background: "NYU tax-law professor and former Treasury official.", why: "Knows how to actually draft progressive tax reform and move it through Congress." },
        { name: "Natasha Sarin", background: "Economist specializing in tax compliance and IRS capacity.", why: "The 'collect what's legally owed' hire — closing the tax gap is her expertise." },
      ] },

    { key: "defense", role: "Secretary of Defense", dept: "Department of Defense", icon: "🛡️",
      mission: "A defense that defends — accountable, modern, and lean.",
      responsibilities: ["Pass the Pentagon's first clean audit.", "Cut waste and failed weapons programs while protecting readiness.", "Raise junior-enlisted pay and fix military housing.", "Reorient toward cyber, space, and real threats."],
      daily: ["Command the department and advise the President on security.", "Hold contractors and programs to account.", "Care for service members and their families."],
      candidates: [
        { name: "Mandy Smithberger", background: "Spent a career exposing Pentagon waste and overspending (Project On Government Oversight).", why: "Built precisely for the 'pass the audit, cut the boondoggles' mandate." },
        { name: "William Hartung", background: "Defense-budget analyst who can tell muscle from boondoggle.", why: "Knows where the waste hides and how to reinvest the savings in readiness." },
        { name: "A reform-minded retired flag officer", background: "A respected general or admiral known for integrity over careerism.", why: "Adds operational credibility to a reform agenda the brass will resist." },
      ] },

    { key: "ag", role: "Attorney General", dept: "Department of Justice", icon: "⚖️",
      mission: "Equal justice, clean elections, and fair markets.",
      responsibilities: ["Protect voting rights and civil rights.", "Revive antitrust enforcement against monopolies.", "Pursue corruption and enforce the elected-official stock-trading ban.", "Reform the justice system and reduce gun violence."],
      daily: ["Run the Department of Justice independently.", "Set litigation and enforcement priorities.", "Defend the rule of law."],
      candidates: [
        { name: "Vanita Gupta", background: "Led DOJ's Civil Rights Division and served as Associate Attorney General.", why: "A proven coalition-builder with deep DOJ chops on rights and policing." },
        { name: "Zephyr Teachout", background: "Law professor and author on anti-corruption and antitrust.", why: "The ideal lead for the money-in-politics and monopoly fights." },
        { name: "Kristen Clarke", background: "Civil-rights litigator who ran DOJ's Civil Rights Division.", why: "Voting rights and equal protection are her life's work." },
      ] },

    { key: "interior", role: "Secretary of the Interior", dept: "Department of the Interior", icon: "🏔️",
      mission: "Honor our obligations to Native nations and steward public lands.",
      responsibilities: ["Fully fund the Indian Health Service and honor treaty obligations.", "Invest in reservation infrastructure and community equity.", "Advance Puerto Rico and Native Hawaiian investment.", "Manage public lands and conservation."],
      daily: ["Lead Interior and the Bureau of Indian Affairs.", "Consult tribal nations as sovereign partners.", "Balance conservation and use on public lands."],
      candidates: [
        { name: "Deb Haaland", background: "First Native American Interior Secretary and a member of the Pueblo of Laguna.", why: "The precedent and the credibility for a Native-investment-first Interior." },
        { name: "A sitting tribal-nation leader", background: "A current chairperson or president of a federally recognized tribe.", why: "Puts the communities the plank serves directly in the driver's seat." },
        { name: "Jonathan Jarvis", background: "Former director of the National Park Service.", why: "Steady, respected steward for the public-lands side of the job." },
      ] },

    { key: "agriculture", role: "Secretary of Agriculture", dept: "Department of Agriculture", icon: "🌾",
      mission: "Back family farms and guarantee food security.",
      responsibilities: ["Redirect support from agribusiness to family and new farmers.", "Strengthen food assistance and close food deserts.", "Break up agriculture monopolies (with DOJ).", "Build resilient, healthy local food systems."],
      daily: ["Lead USDA's farm and nutrition programs.", "Engage farmers, ranchers, and rural communities.", "Coordinate food safety and supply resilience."],
      candidates: [
        { name: "Austin Frerick", background: "Agricultural-economy expert who wrote the book on farm monopolies (“Barons”).", why: "Squarely on-mission: break up Big Ag and back the family farmer." },
        { name: "Ricardo Salvador", background: "Led the food-and-environment program at the Union of Concerned Scientists.", why: "A leading voice for sustainable, equitable food systems." },
        { name: "Marion Nestle", background: "The dean of American food and nutrition policy.", why: "Unmatched authority for the food-security and healthy-food half of the job." },
      ] },

    { key: "commerce", role: "Secretary of Commerce", dept: "Department of Commerce", icon: "📡",
      mission: "Wire the whole country and lead in science and space.",
      responsibilities: ["Deliver affordable broadband to every home.", "Lead civil space investment and international partnerships.", "Support innovation and a fair digital economy.", "Run the Census and core economic statistics."],
      daily: ["Lead Commerce, NOAA, and related agencies.", "Coordinate the broadband build-out with states.", "Engage industry and researchers."],
      candidates: [
        { name: "Susan Crawford", background: "Law professor and the country's clearest thinker on broadband as a public utility.", why: "Exactly the vision the 'internet for every American' plank needs." },
        { name: "Gigi Sohn", background: "Telecom-reform and net-neutrality advocate who knows the FCC inside out.", why: "A relentless fighter for affordable, open networks." },
        { name: "Tom Wheeler", background: "Former FCC chairman.", why: "Proven at moving big, contested telecom policy to the finish line." },
      ] },

    { key: "labor", role: "Secretary of Labor", dept: "Department of Labor", icon: "👷",
      mission: "Raise wages and rebuild worker power.",
      responsibilities: ["Enact and enforce a $15 minimum wage.", "Strengthen the right to organize.", "Enforce wage, hour, and workplace-safety law.", "Fund retraining for the AI transition."],
      daily: ["Lead the Department of Labor and OSHA.", "Work with unions and employers.", "Direct wage-and-hour enforcement."],
      candidates: [
        { name: "Sara Nelson", background: "President of the flight attendants' union and the most prominent labor leader in America.", why: "A movement-builder and an operator — equal parts inspiration and execution." },
        { name: "David Weil", background: "Labor economist and former Wage and Hour Administrator (“The Fissured Workplace”).", why: "The country's expert on actually enforcing wage and hour law." },
        { name: "Liz Shuler", background: "President of the AFL-CIO.", why: "Convenes all of organized labor behind the agenda." },
      ] },

    { key: "hhs", role: "Secretary of Health & Human Services", dept: "Dept. of Health & Human Services", icon: "🏥",
      mission: "Health and care as a right — cradle to retirement.",
      responsibilities: ["Stand up universal healthcare on a careful, phased timeline.", "Deliver universal childcare and paid family leave.", "Protect and expand Social Security.", "Lead public health, pandemic readiness, and the mental-health and addiction response."],
      daily: ["Lead HHS, CMS, CDC, FDA, and NIH.", "Manage the healthcare transition with no gaps in care.", "Advise the President on public-health threats."],
      candidates: [
        { name: "Don Berwick", background: "Ran Medicare & Medicaid; world authority on health-system quality and a single-payer ally.", why: "No one understands how to actually run — and transform — public health coverage better." },
        { name: "Atul Gawande", background: "Surgeon, writer, and former head of global health at USAID.", why: "A rare clinical + operational + communication trifecta for the biggest build on the board." },
        { name: "Abdul El-Sayed", background: "Epidemiologist and universal-care champion who has run a public health department.", why: "Combines the policy vision with hands-on health-department experience." },
      ] },

    { key: "hud", role: "Secretary of Housing & Urban Development", dept: "Dept. of Housing & Urban Development", icon: "🏠",
      mission: "A safe, affordable home for everyone.",
      responsibilities: ["Build social and affordable housing at scale.", "Expand rental assistance.", "End homelessness with a housing-first approach.", "Implement primary-residence relief and the second-home surtax."],
      daily: ["Lead HUD.", "Partner with cities and states on housing supply.", "Direct vouchers and homelessness programs."],
      candidates: [
        { name: "Matthew Desmond", background: "Sociologist and Pulitzer-winning author of “Evicted.”", why: "The moral and empirical authority on housing and poverty in America." },
        { name: "Diane Yentel", background: "Led the National Low Income Housing Coalition.", why: "Knows the levers of affordable-housing policy cold." },
      ] },

    { key: "transportation", role: "Secretary of Transportation", dept: "Department of Transportation", icon: "🚄",
      mission: "Move people and goods — fast, safe, and fixed-first.",
      responsibilities: ["Build high-speed rail.", "Fix roads, bridges, and water systems first.", "Modernize transit, ports, and freight.", "Coordinate infrastructure with each state."],
      daily: ["Lead DOT and its modal agencies.", "Run major capital programs and safety.", "Partner with states and localities on delivery."],
      candidates: [
        { name: "Janette Sadik-Khan", background: "Transformed New York City's streets and transit as transportation commissioner.", why: "A proven big-system builder who ships projects, not press releases." },
        { name: "Beth Osborne", background: "Director of Transportation for America and former DOT official.", why: "The fix-it-first and transit gospel, with the policy fluency to match." },
        { name: "Phillip Washington", background: "Ran major transit agencies and a large airport.", why: "Operational scale — exactly what a high-speed-rail program demands." },
      ] },

    { key: "energy", role: "Secretary of Energy", dept: "Department of Energy", icon: "⚡",
      mission: "A clean, reliable, affordable grid.",
      responsibilities: ["Modernize the grid and accelerate clean-energy deployment.", "Run home rebates and the clean-energy jobs guarantee.", "Oversee data centers' energy and water footprint.", "Maintain energy security and the national labs."],
      daily: ["Lead DOE and the national labs.", "Finance and speed clean deployment.", "Coordinate with utilities and states."],
      candidates: [
        { name: "Jigar Shah", background: "Clean-energy financier who ran DOE's Loan Programs Office.", why: "The deployment-at-scale expert the grid build-out is crying out for." },
        { name: "Saul Griffith", background: "Engineer and founder of Rewiring America (“electrify everything”).", why: "The technical visionary for an all-electric, clean grid." },
        { name: "Ernest Moniz", background: "Physicist and former Energy Secretary.", why: "Gravitas plus deep grid, nuclear, and labs experience." },
      ] },

    { key: "education", role: "Secretary of Education", dept: "Department of Education", icon: "🎓",
      mission: "World-class public education, pre-K through college.",
      responsibilities: ["Launch universal pre-K and after-school.", "Make community and technical college free.", "Lift teacher pay and modernize K-12.", "Expand dual enrollment and apprenticeships."],
      daily: ["Lead the Department of Education.", "Partner with states and districts.", "Direct student-aid and college-access programs."],
      candidates: [
        { name: "Linda Darling-Hammond", background: "One of the most cited education researchers in the country; led California's state board.", why: "Combines evidence, equity, and the experience of running a big system." },
        { name: "Diane Ravitch", background: "Education historian and fierce defender of public schools.", why: "A powerful voice against privatization and for public education." },
        { name: "A community-college system chancellor", background: "A leader who has scaled access and completion at a large two-year system.", why: "The free-college build needs someone who has actually run open-access higher ed." },
      ] },

    { key: "va", role: "Secretary of Veterans Affairs", dept: "Department of Veterans Affairs", icon: "🎖️",
      mission: "Keep faith with those who served.",
      responsibilities: ["Cut VA wait times and modernize claims.", "Guarantee mental-health care and suicide prevention.", "End veteran homelessness.", "Keep the community-care option when the VA can't deliver fast."],
      daily: ["Lead the VA and its hospital system.", "Advocate for veterans across the whole government.", "Manage benefits delivery."],
      candidates: [
        { name: "Jon Stewart", background: "Drove the PACT Act for sick veterans through Congress; relentless veterans' advocate.", why: "Unmatched at making the VA deliver — and at making the country watch." },
        { name: "Paul Rieckhoff", background: "Combat veteran and founder of Iraq and Afghanistan Veterans of America.", why: "A veteran-organization operator who knows the system's failures firsthand." },
        { name: "A turnaround VA hospital CEO", background: "An executive who has fixed a failing VA medical center.", why: "Proven executional spine for the agency's hardest problem: delivery." },
      ] },

    { key: "dhs", role: "Secretary of Homeland Security", dept: "Department of Homeland Security", icon: "🛂",
      mission: "Secure and humane — at the border and in disasters.",
      responsibilities: ["Run a humane, orderly immigration system; expand courts and processing.", "Lead FEMA and disaster readiness and response.", "Protect critical infrastructure and cybersecurity.", "Help integrate new Americans."],
      daily: ["Lead DHS, FEMA, and the immigration agencies.", "Coordinate disaster response with states.", "Balance security with rights."],
      candidates: [
        { name: "Craig Fugate", background: "The gold-standard FEMA administrator under President Obama.", why: "Disaster competence personified — and the bar for getting the response right." },
        { name: "Cecilia Muñoz", background: "Veteran immigration-policy leader and former White House Domestic Policy Council director.", why: "Deep, humane expertise on a humane, orderly immigration system." },
        { name: "Roberta Jacobson", background: "Career diplomat who handled the border portfolio at the White House.", why: "Serious, steady hand on the hardest part of the job." },
      ] },

    { key: "epa", role: "EPA Administrator", dept: "Environmental Protection Agency", icon: "♻️",
      mission: "Clean air and water, less waste, a livable climate.",
      responsibilities: ["Implement the carbon fee and border carbon adjustment.", "Refocus the agency on recycling, reuse, and producer responsibility.", "Protect air, water, and overburdened communities.", "Drive ocean and waterway cleanup."],
      daily: ["Lead the EPA.", "Set and enforce environmental standards.", "Center environmental justice in every decision."],
      candidates: [
        { name: "Gina McCarthy", background: "Former EPA Administrator and the first White House National Climate Advisor.", why: "Knows how to move the agency and the whole government on climate." },
        { name: "Mustafa Santiago Ali", background: "Founding leader of the EPA's environmental-justice work.", why: "The conscience and expertise for fair siting and frontline communities." },
        { name: "A circular-economy expert", background: "A leader in extended-producer-responsibility and zero-waste systems.", why: "The waste-and-recycling refocus needs a true circular-economy specialist." },
      ] },

    { key: "omb", role: "Director of OMB & Government Transparency", dept: "Office of Management & Budget", icon: "📊",
      mission: "Make government deliver — and show its work.",
      responsibilities: ["Build and run GovTracker — the live public dashboard.", "Assemble and manage the federal budget toward the surplus.", "Drive open-by-default transparency and FOIA reform.", "Fix government technology and delivery."],
      daily: ["Lead OMB.", "Oversee the budget and agency performance.", "Push agencies on delivery, data, and openness."],
      candidates: [
        { name: "Jennifer Pahlka", background: "Founder of Code for America and author of “Recoding America.”", why: "The single best fit for 'make government deliver and show its work.'" },
        { name: "Mikey Dickerson", background: "Founding administrator of the U.S. Digital Service.", why: "Rescues broken government technology at scale." },
        { name: "Danielle Brian", background: "Longtime executive director of the Project On Government Oversight.", why: "Decades of transparency and watchdog credibility for the GovTracker mandate." },
      ] },
  ],

  // Per-policy governance: who leads it (cabinet key) and the route to passage.
  // route ∈ congress | reconciliation | amendment | executive | agency.
  // court:true flags a likely Supreme Court fight.
  governance: {
    healthcare:        { owner: "hhs", route: "congress" },
    education:         { owner: "education", route: "congress" },
    housing:           { owner: "hud", route: "congress" },
    childcare:         { owner: "hhs", route: "congress" },
    "social-security": { owner: "hhs", route: "reconciliation" },
    veterans:          { owner: "va", route: "congress" },
    "public-health":   { owner: "hhs", route: "congress" },
    "mental-health":   { owner: "hhs", route: "congress" },
    "term-limits":     { owner: "vp", route: "amendment" },
    "money-politics":  { owner: "ag", route: "amendment" },
    voting:            { owner: "ag", route: "congress", court: true },
    rights:            { owner: "ag", route: "congress", court: true },
    justice:           { owner: "ag", route: "congress" },
    immigration:       { owner: "dhs", route: "congress" },
    "supreme-court":   { owner: "president", route: "amendment" },
    govtracker:        { owner: "omb", route: "executive" },
    communities:       { owner: "interior", route: "congress" },
    "min-wage":        { owner: "labor", route: "congress" },
    "worker-power":    { owner: "labor", route: "congress" },
    antitrust:         { owner: "ag", route: "executive" },
    "tax-rich":        { owner: "treasury", route: "reconciliation", court: true },
    "ai-tax":          { owner: "treasury", route: "congress" },
    ftt:               { owner: "treasury", route: "reconciliation" },
    "carried-interest":{ owner: "treasury", route: "reconciliation" },
    "stepped-up-basis":{ owner: "treasury", route: "reconciliation" },
    "like-kind":       { owner: "treasury", route: "reconciliation" },
    corporate:         { owner: "treasury", route: "reconciliation" },
    carbon:            { owner: "epa", route: "reconciliation" },
    energy:            { owner: "energy", route: "congress" },
    rail:              { owner: "transportation", route: "congress" },
    infrastructure:    { owner: "transportation", route: "congress" },
    broadband:         { owner: "commerce", route: "congress" },
    "data-centers":    { owner: "energy", route: "agency" },
    space:             { owner: "commerce", route: "congress" },
    waste:             { owner: "epa", route: "executive" },
    disaster:          { owner: "dhs", route: "congress" },
    "gun-safety":      { owner: "ag", route: "congress", court: true },
    "humanity-first":  { owner: "president", route: "executive" },
    "foreign-policy":  { owner: "state", route: "congress" },
    "defense-reform":  { owner: "defense", route: "congress" },
    "family-farms":    { owner: "agriculture", route: "congress" },
  },

  // Role requirements per seat — the "what it takes" qualifications for the JD.
  seatReqs: {
    state: ["Deep foreign-policy and negotiation experience.", "The judgment to use restraint as strength.", "Trust from allies and credibility with adversaries."],
    treasury: ["Mastery of tax policy and public finance.", "Credibility with Congress and financial markets.", "The spine to take on concentrated wealth."],
    defense: ["Knows the Pentagon budget cold — and where the waste hides.", "Willingness to fight contractors and inertia.", "Operational credibility with the uniformed military."],
    ag: ["A first-rate legal mind and manager.", "Independence and an incorruptible reputation.", "Commitment to civil rights, antitrust, and clean elections."],
    interior: ["Deep relationships with and respect for Native nations.", "Conservation and public-lands expertise.", "A record of delivering for overlooked communities."],
    agriculture: ["Understands farm economics and rural America.", "Sides with family farmers over agribusiness.", "Cares about food security and nutrition."],
    commerce: ["Fluency in broadband, tech, and innovation policy.", "Ability to coordinate big build-outs with states.", "Belief in connectivity as a public good."],
    labor: ["Stands with workers and unions, in practice.", "Knows wage, hour, and safety enforcement.", "Can convene labor, business, and government."],
    hhs: ["Proven at running large health systems.", "Public-health and clinical credibility.", "The skill to manage a careful, no-gaps transition."],
    hud: ["Authority on housing supply and homelessness.", "Partners well with cities and states.", "Treats housing as a right, not a market afterthought."],
    transportation: ["A proven builder of big infrastructure.", "Transit, rail, and safety expertise.", "Delivers projects on time and on budget."],
    energy: ["Deep clean-energy and grid knowledge.", "Experience deploying technology at scale.", "Can work with utilities, labs, and states."],
    education: ["Evidence-based education leadership.", "Experience running or shaping large systems.", "Commitment to public, accessible education."],
    va: ["Relentless advocate for veterans.", "Can fix a sprawling health and benefits bureaucracy.", "Earns the trust of those who served."],
    dhs: ["Elite disaster-management competence.", "Humane, serious immigration expertise.", "Balances security with rights and the rule of law."],
    epa: ["Climate and environmental-policy command.", "A record of moving an agency.", "Centers environmental justice."],
    omb: ["Government-delivery and digital-services expertise.", "Budget and management discipline.", "A genuine commitment to transparency."],
  },

  // Per-candidate enrichment, keyed by name: portrait slug, a 'learn more' link,
  // and the fuller case for the fit. Illustrative; not affiliated, not endorsements.
  candidateInfo: {
    "William J. Burns": { slug: "william-burns", wiki: "https://en.wikipedia.org/wiki/William_J._Burns_(diplomat)", why: "Over four decades he negotiated with adversaries and allies alike and rose to run the CIA — the rare official both parties trust in a crisis. He'd rebuild a hollowed-out State Department and pursue diplomacy from strength, exactly the 'lead, don't just fight' mandate this seat carries." },
    "Fiona Hill": { slug: "fiona-hill", wiki: "https://en.wikipedia.org/wiki/Fiona_Hill_(presidential_advisor)", why: "A coal-miner's daughter who became America's foremost Russia expert, she's known for telling hard truths under oath without flinching. That spine and depth are exactly what an honest, alliance-first foreign policy demands." },
    "Ben Rhodes": { slug: "ben-rhodes", wiki: "https://en.wikipedia.org/wiki/Ben_Rhodes_(White_House_staffer)", why: "He helped design and sell some of the last era's hardest diplomatic wins, and can translate a restraint-minded strategy into plain English for the public. He'd keep the focus on preventing wars, not just managing them." },
    "Gabriel Zucman": { slug: "gabriel-zucman", wiki: "https://en.wikipedia.org/wiki/Gabriel_Zucman", why: "He didn't just study wealth inequality — he built the data and the blueprint behind the wealth taxes now debated worldwide. If the flagship is taxing fortunes over $10B, you want the person who wrote the manual designing and defending it." },
    "Lily Batchelder": { slug: "lily-batchelder", wiki: "https://en.wikipedia.org/wiki/Lily_Batchelder", why: "A tax-law scholar who served at Treasury and on the Senate Finance Committee, she knows the gap between a good idea and a bill that can actually pass. She'd turn the platform's tax goals into durable, litigation-proof law." },
    "Natasha Sarin": { why: "Her research quantified just how much revenue goes uncollected because the IRS was starved — the very gap this administration would close. She'd rebuild enforcement so the wealthy and corporations pay what they already legally owe." },
    "Mandy Smithberger": { why: "She spent years at the Project On Government Oversight forcing the Pentagon's waste into daylight, from cost-plus contracts to failed programs. Nobody is better prepared to make the Pentagon finally pass an audit and spend like it respects taxpayers." },
    "William Hartung": { slug: "william-hartung", wiki: "https://en.wikipedia.org/wiki/William_D._Hartung", why: "One of the country's leading analysts of the defense budget and the arms industry, he can tell genuine readiness from contractor giveaways. He'd cut the boondoggles while protecting the muscle and the troops." },
    "Vanita Gupta": { slug: "vanita-gupta", wiki: "https://en.wikipedia.org/wiki/Vanita_Gupta", why: "She ran DOJ's Civil Rights Division and served as Associate Attorney General, building coalitions on policing and voting rights. She has the management depth and moral clarity to run Justice independently and well." },
    "Zephyr Teachout": { slug: "zephyr-teachout", wiki: "https://en.wikipedia.org/wiki/Zephyr_Teachout", why: "A law professor who literally wrote the book on American corruption and antitrust, she's spent her career on money-in-politics and monopoly power. She'd lead the anti-corruption and trust-busting fights with rare expertise and zeal." },
    "Kristen Clarke": { slug: "kristen-clarke", wiki: "https://en.wikipedia.org/wiki/Kristen_Clarke", why: "A career civil-rights litigator who led DOJ's Civil Rights Division, voting rights and equal protection are her life's work. She'd defend the ballot and the law without fear or favor." },
    "Deb Haaland": { slug: "deb-haaland", wiki: "https://en.wikipedia.org/wiki/Deb_Haaland", why: "The first Native American Interior Secretary and a member of the Pueblo of Laguna, she has both the lived experience and the record to put tribal investment first. She'd treat Native nations as the sovereign partners they are." },
    "Fawn Sharp": { slug: "fawn-sharp", wiki: "https://en.wikipedia.org/wiki/Fawn_Sharp", why: "A former president of the National Congress of American Indians and the Quinault Indian Nation, she's a national voice for treaty rights and tribal sovereignty. She'd bring the communities this seat serves directly into the room." },
    "Jonathan Jarvis": { slug: "jonathan-jarvis", wiki: "https://en.wikipedia.org/wiki/Jonathan_Jarvis", why: "He led the National Park Service for eight years, a steady steward of the nation's public lands. He'd balance conservation and use with quiet competence." },
    "Austin Frerick": { why: "An agricultural-economy expert whose book ‘Barons' exposed how a few giants captured American food, he's become the clearest voice for the family farmer. He'd redirect farm policy from agribusiness toward the people who actually feed us." },
    "Ricardo Salvador": { why: "He led the food-and-environment program at the Union of Concerned Scientists, championing sustainable and equitable food systems. He'd build a food policy that's healthy, fair, and resilient." },
    "Marion Nestle": { slug: "marion-nestle", wiki: "https://en.wikipedia.org/wiki/Marion_Nestle", why: "The dean of American food and nutrition policy, she has spent decades fighting for food security and against industry capture of public health. She'd make ending hunger and food deserts a first-order goal." },
    "Susan Crawford": { slug: "susan-crawford", wiki: "https://en.wikipedia.org/wiki/Susan_P._Crawford", why: "A law professor and the country's clearest thinker on broadband as a public utility, she's argued for years that universal, affordable internet is essential infrastructure. She'd finally wire the whole country, not just the profitable parts." },
    "Gigi Sohn": { slug: "gigi-sohn", wiki: "https://en.wikipedia.org/wiki/Gigi_Sohn", why: "A relentless telecom-reform and net-neutrality advocate who knows the FCC inside out, she's fought for affordable, open networks her whole career. She'd hold providers accountable to the public, not the other way around." },
    "Tom Wheeler": { slug: "tom-wheeler", wiki: "https://en.wikipedia.org/wiki/Tom_Wheeler", why: "As FCC chairman he proved he could move big, contested telecom policy — including the strongest net-neutrality rules in U.S. history. He'd bring that finish-the-job experience to the broadband build-out." },
    "Sara Nelson": { slug: "sara-nelson", wiki: "https://en.wikipedia.org/wiki/Sara_Nelson_(union_leader)", why: "President of the flight attendants' union and the most effective labor leader in the country, she's both a movement-builder and a hard-nosed negotiator. She'd put real weight behind a $15 wage and the right to organize." },
    "David Weil": { why: "As the country's Wage and Hour Administrator he wrote ‘The Fissured Workplace' and enforced the laws that protect ordinary workers. He'd make wage and hour rules mean something again." },
    "Liz Shuler": { slug: "liz-shuler", wiki: "https://en.wikipedia.org/wiki/Liz_Shuler", why: "President of the AFL-CIO, she can convene all of organized labor behind the agenda. She'd keep workers at the center of every economic decision." },
    "Don Berwick": { slug: "don-berwick", wiki: "https://en.wikipedia.org/wiki/Donald_Berwick", why: "He ran Medicare and Medicaid and is a world authority on health-system quality and a longtime ally of universal coverage. No one better understands how to actually run — and transform — public health insurance without dropping a single patient." },
    "Atul Gawande": { slug: "atul-gawande", wiki: "https://en.wikipedia.org/wiki/Atul_Gawande", why: "A surgeon, celebrated writer, and former head of global health at USAID, he pairs clinical credibility with proven operational leadership. He'd manage the biggest build on the board — universal healthcare — and explain it to the country." },
    "Abdul El-Sayed": { slug: "abdul-el-sayed", wiki: "https://en.wikipedia.org/wiki/Abdul_El-Sayed", why: "An epidemiologist and universal-care champion who has actually run a city health department, he blends the vision with hands-on management. He'd be a tireless public face for health as a right." },
    "Matthew Desmond": { slug: "matthew-desmond", wiki: "https://en.wikipedia.org/wiki/Matthew_Desmond", why: "His Pulitzer-winning ‘Evicted' made him the moral and empirical authority on housing and poverty in America. He'd anchor a housing-first agenda in evidence and in the lives of the people it serves." },
    "Diane Yentel": { why: "She ran the National Low Income Housing Coalition, where she mastered every lever of affordable-housing policy and the budget fights behind them. She'd turn 'a home for everyone' into concrete programs." },
    "Janette Sadik-Khan": { slug: "janette-sadik-khan", wiki: "https://en.wikipedia.org/wiki/Janette_Sadik-Khan", why: "She transformed New York City's streets and transit at scale and against fierce resistance. She's a proven builder who ships projects, not press releases — exactly what high-speed rail and fix-it-first demand." },
    "Beth Osborne": { why: "As director of Transportation for America and a former senior DOT official, she's the policy conscience of fix-it-first and transit. She'd make sure the money goes to maintenance and people, not just ribbon-cuttings." },
    "Phillip Washington": { slug: "phillip-washington", wiki: "https://en.wikipedia.org/wiki/Phil_Washington", why: "He has run major transit agencies and a large international airport — operational scale most officials never touch. That's precisely the muscle a national high-speed-rail program requires." },
    "Jigar Shah": { slug: "jigar-shah", wiki: "https://en.wikipedia.org/wiki/Jigar_Shah", why: "A clean-energy financier who ran DOE's Loan Programs Office, he's deployed billions to get technology built. He's the deployment-at-scale expert the grid build-out is crying out for." },
    "Saul Griffith": { slug: "saul-griffith", wiki: "https://en.wikipedia.org/wiki/Saul_Griffith", why: "An engineer and founder of Rewiring America, he turned 'electrify everything' from a slogan into a costed national plan. He'd bring the technical vision for a clean, all-electric grid." },
    "Ernest Moniz": { slug: "ernest-moniz", wiki: "https://en.wikipedia.org/wiki/Ernest_Moniz", why: "A physicist and former Energy Secretary, he brings gravitas and deep grid, nuclear, and national-labs experience. He'd keep the lights on and affordable while the grid goes clean." },
    "Linda Darling-Hammond": { slug: "linda-darling-hammond", wiki: "https://en.wikipedia.org/wiki/Linda_Darling-Hammond", why: "One of the most cited education researchers in the country, she led California's state board and knows how to turn evidence into system-wide change. She'd ground pre-K through free college in what actually works." },
    "Diane Ravitch": { slug: "diane-ravitch", wiki: "https://en.wikipedia.org/wiki/Diane_Ravitch", why: "A historian of education who became its fiercest defender against privatization, she's a powerful, principled voice for public schools. She'd keep the focus on strengthening — not selling off — public education." },
    "Jon Stewart": { slug: "jon-stewart", wiki: "https://en.wikipedia.org/wiki/Jon_Stewart", why: "He shamed Congress into passing the PACT Act for sick veterans and 9/11 responders, then kept fighting. No one is better at making the VA deliver — and at making the whole country watch until it does." },
    "Paul Rieckhoff": { slug: "paul-rieckhoff", wiki: "https://en.wikipedia.org/wiki/Paul_Rieckhoff", why: "A combat veteran who founded Iraq and Afghanistan Veterans of America, he knows the system's failures from the inside. He'd be a fierce, credible advocate for those who served." },
    "Craig Fugate": { slug: "craig-fugate", wiki: "https://en.wikipedia.org/wiki/Craig_Fugate", why: "Widely regarded as the best FEMA administrator in modern history, he set the standard for competent disaster response. With climate disasters rising, this is the steady hand you want in charge." },
    "Cecilia Muñoz": { slug: "cecilia-munoz", wiki: "https://en.wikipedia.org/wiki/Cecilia_Mu%C3%B1oz", why: "A longtime immigration-policy leader and former White House Domestic Policy Council director, she pairs humane values with deep operational know-how. She'd build an immigration system that's orderly and humane at once." },
    "Roberta Jacobson": { slug: "roberta-jacobson", wiki: "https://en.wikipedia.org/wiki/Roberta_S._Jacobson", why: "A career diplomat who handled the border portfolio at the White House, she's a serious, steady hand on the hardest part of the job. She'd bring competence and calm to a politically charged brief." },
    "Gina McCarthy": { slug: "gina-mccarthy", wiki: "https://en.wikipedia.org/wiki/Gina_McCarthy", why: "She ran the EPA and then served as the first White House National Climate Advisor, so she knows how to move both the agency and the whole government. She'd drive the carbon fee and the waste refocus with proven command." },
    "Mustafa Santiago Ali": { why: "He helped found and lead the EPA's environmental-justice work over decades, centering the communities pollution hits hardest. He'd make fair siting and frontline communities core to every decision." },
    "Jennifer Pahlka": { slug: "jennifer-pahlka", wiki: "https://en.wikipedia.org/wiki/Jennifer_Pahlka", why: "Founder of Code for America and author of ‘Recoding America,' she's the country's clearest voice on making government actually deliver and show its work. She is the ideal builder for GovTracker and an OMB that ships." },
    "Mikey Dickerson": { slug: "mikey-dickerson", wiki: "https://en.wikipedia.org/wiki/Mikey_Dickerson", why: "He led the rescue of HealthCare.gov and founded the U.S. Digital Service, fixing broken government technology at scale. He'd make transparency and delivery a reality, not a slogan." },
    "Danielle Brian": { why: "She ran the Project On Government Oversight for decades, building the country's premier nonpartisan watchdog. Her instincts for rooting out waste and forcing openness are exactly what the GovTracker mandate needs." },
  },

  // The First 100 Days, as a sprint plan: each phase → the departments involved
  // → that department's specific deliverables for the phase. Owners are cabinet keys.
  firstHundredDays: [
    {
      when: "Day One", title: "Sign, direct, and set the clock",
      blurb: "Executive actions a president can take alone — the first afternoon, no Congress required.",
      teams: [
        { key: "president", items: [
          { t: "Sign the <strong>ethics order</strong>: no individual-stock trading by appointees, public disclosures, assets in a blind trust — <strong>starting with me</strong>.", pid: "term-limits" },
          { t: "Direct every agency to publish in <strong>plain language</strong> and operate <strong>FOIA-by-default</strong>.", pid: "govtracker" },
          { t: "Convene the full cabinet and lock in each department's <strong>100-day targets</strong>." },
        ] },
        { key: "omb", items: [
          { t: "Stand up <strong>GovTracker</strong> v1 and the live <strong>national-debt clock</strong>.", pid: "govtracker" },
          { t: "Order every agency to begin publishing <strong>budget-vs-actual</strong> spending.", pid: "govtracker" },
        ] },
        { key: "ag", items: [
          { t: "Revive <strong>antitrust enforcement</strong> and reopen <strong>voting-rights</strong> protection.", pid: "antitrust" },
          { t: "Issue guidance enforcing the <strong>elected-official stock-trading ban</strong>.", pid: "term-limits" },
        ] },
        { key: "treasury", items: [
          { t: "Order the IRS to refocus enforcement on the <strong>wealthiest filers</strong> and the <strong>tax gap</strong>.", pid: "tax-rich" },
          { t: "Begin drafting the full <strong>revenue package</strong> for reconciliation.", pid: "corporate" },
        ] },
        { key: "epa", items: [
          { t: "Refocus the agency on <strong>recycling, reuse, and producer responsibility</strong>.", pid: "waste" },
          { t: "Re-anchor federal <strong>climate and clean-energy</strong> standards.", pid: "carbon" },
        ] },
        { key: "defense", items: [
          { t: "Order the Pentagon to prepare for a <strong>clean audit</strong>; freeze cost-overrun programs pending review.", pid: "defense-reform" },
        ] },
        { key: "state", items: [
          { t: "Order a review to <strong>wind down open-ended deployments</strong>; reaffirm our alliances.", pid: "foreign-policy" },
        ] },
      ],
    },
    {
      when: "Week 1", title: "The first bills to Congress",
      blurb: "Send the popular, high-odds reforms first — and stand up the teams that will run the big builds.",
      teams: [
        { key: "labor", items: [
          { t: "Introduce the <strong>$15</strong> federal minimum wage.", pid: "min-wage" },
          { t: "Begin ramping up <strong>wage, hour, and safety</strong> enforcement.", pid: "worker-power" },
        ] },
        { key: "hhs", items: [
          { t: "Introduce <strong>universal childcare</strong> and <strong>12 weeks</strong> of paid family leave.", pid: "childcare" },
          { t: "Convene the <strong>Universal Healthcare</strong> phased-rollout task force.", pid: "healthcare" },
          { t: "Stand up the <strong>pandemic-readiness</strong> posture and protect the public-health workforce.", pid: "public-health" },
        ] },
        { key: "treasury", items: [
          { t: "Send the quick loophole-closers — <strong>carried interest</strong> and <strong>like-kind</strong> — for fast passage.", pid: "carried-interest" },
        ] },
        { key: "va", items: [
          { t: "Send the <strong>fully-fund-the-VA</strong> bill and launch the <strong>wait-time strike team</strong>.", pid: "veterans" },
        ] },
      ],
    },
    {
      when: "Days 1–30", title: "Open the big builds",
      blurb: "Kick off the multi-year programs and get the money moving.",
      teams: [
        { key: "treasury", items: [
          { t: "Move the full revenue plan into <strong>budget reconciliation</strong>: corporate reform, the <strong>billionaire tax</strong>, the financial-transaction tax, and the carbon fee.", pid: "tax-rich" },
        ] },
        { key: "hhs", items: [
          { t: "Begin <strong>Universal Healthcare Phase 1</strong> and the addiction & <strong>988</strong> crisis response.", pid: "healthcare" },
          { t: "Launch <strong>universal pre-K</strong> planning with the Education department.", pid: "education" },
        ] },
        { key: "transportation", items: [
          { t: "Open the <strong>state-by-state</strong> infrastructure partnership.", pid: "infrastructure" },
          { t: "Select the first <strong>high-speed-rail</strong> corridors.", pid: "rail" },
        ] },
        { key: "energy", items: [
          { t: "Launch <strong>grid modernization</strong>, home heat-pump rebates, and the <strong>clean-energy jobs guarantee</strong>.", pid: "energy" },
        ] },
        { key: "education", items: [
          { t: "Begin the <strong>free community- and technical-college</strong> rollout and the teacher pay floor.", pid: "education" },
        ] },
        { key: "hud", items: [
          { t: "Start <strong>social-housing</strong> construction and expand housing vouchers.", pid: "housing" },
        ] },
      ],
    },
    {
      when: "Days 31–60", title: "Reach every community",
      blurb: "Carry the agenda into communities, to the border, and into the Pentagon's books.",
      teams: [
        { key: "interior", items: [
          { t: "Fully fund the <strong>Indian Health Service</strong>; launch <strong>baby bonds</strong> and reservation-infrastructure projects.", pid: "communities" },
        ] },
        { key: "agriculture", items: [
          { t: "Redirect farm support toward <strong>family farms</strong>; expand food assistance and close <strong>food deserts</strong>.", pid: "family-farms" },
        ] },
        { key: "commerce", items: [
          { t: "Begin the <strong>broadband build-out</strong> to unserved rural and tribal areas; restore <strong>net neutrality</strong>.", pid: "broadband" },
        ] },
        { key: "dhs", items: [
          { t: "Expand <strong>immigration courts</strong> and humane processing; fund <strong>FEMA pre-disaster mitigation</strong>.", pid: "immigration" },
        ] },
        { key: "defense", items: [
          { t: "Begin the <strong>audit</strong>, cut the first wave of boondoggles, and <strong>raise junior-enlisted pay</strong>.", pid: "defense-reform" },
        ] },
        { key: "energy", items: [
          { t: "Stand up <strong>data-center regulation</strong> and the water-and-energy usage tax.", pid: "data-centers" },
        ] },
      ],
    },
    {
      when: "Days 61–100", title: "Pass it — and start the long fights",
      blurb: "Land the revenue package, bank the surplus, and introduce the reforms that take years.",
      teams: [
        { key: "treasury", items: [
          { t: "Pass the reconciliation revenue package (<strong>51 votes</strong>) and start <strong>paying down the debt</strong> with the surplus.", pid: "tax-rich" },
        ] },
        { key: "hhs", items: [
          { t: "Pass <strong>universal childcare</strong> and paid leave; move Healthcare into <strong>Phase 2</strong>.", pid: "childcare" },
        ] },
        { key: "president", items: [
          { t: "Introduce the constitutional reforms — <strong>congressional term limits</strong> and the <strong>Supreme Court fixes</strong> — knowing they're multi-year fights.", pid: "supreme-court" },
        ] },
        { key: "ag", items: [
          { t: "Send the <strong>money-in-politics</strong> package and the <strong>voting-rights</strong> bill.", pid: "money-politics" },
        ] },
        { key: "state", items: [
          { t: "Submit <strong>war-powers reform</strong> and bank the first diplomacy-first wins.", pid: "foreign-policy" },
        ] },
      ],
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
        label: "Economic output (GDP)", value: 12, color: "#2a6df4", score: 78,
        note: "Still counts — but as one slice, not the whole pie.",
        metrics: [
          { name: "Real GDP growth", value: "≈2.8% / yr", source: "BEA" },
          { name: "GDP per capita", value: "≈$86,000", source: "BEA / World Bank" },
          { name: "Median household income", value: "≈$81,000", source: "U.S. Census" },
          { name: "Labor productivity growth", value: "≈1.9% / yr", source: "BLS" },
        ],
      },
      {
        label: "Economic security", value: 11, color: "#c8102e", score: 53,
        note: "Can a family absorb a sudden $400–$1,000 expense?",
        metrics: [
          { name: "Can cover a $400 emergency with cash", value: "≈63%", source: "Federal Reserve (SHED)" },
          { name: "Supplemental Poverty Measure", value: "≈12.4%", source: "U.S. Census (SPM)" },
          { name: "Adults with no retirement savings", value: "≈28%", source: "Federal Reserve (SHED)" },
          { name: "Household debt-to-income ratio", value: "elevated", source: "Federal Reserve" },
        ],
      },
      {
        label: "Physical health", value: 10, color: "#46b67a", score: 50,
        note: "Chronic disease, obesity, and healthy years of life.",
        metrics: [
          { name: "Adult obesity rate", value: "≈40%", source: "CDC (NHANES)" },
          { name: "Adults living with a chronic disease", value: "≈60%", source: "CDC" },
          { name: "Infant mortality", value: "≈5.6 / 1,000 births", source: "CDC (NCHS)" },
          { name: "Healthy life expectancy", value: "≈66 yrs", source: "IHME / WHO" },
        ],
      },
      {
        label: "Life expectancy", value: 9, color: "#f4b740", score: 58,
        note: "How long Americans live — and how it compares.",
        metrics: [
          { name: "Life expectancy at birth", value: "≈78.4 yrs", source: "CDC (NCHS)" },
          { name: "Gap vs. peer-nation average", value: "≈4 yrs below", source: "OECD" },
          { name: "Trend since 2019", value: "roughly flat", source: "CDC (NCHS)" },
        ],
      },
      {
        label: "Mental health", value: 9, color: "#8a5cf6", score: 41,
        note: "Depression, suicide, deaths of despair, loneliness.",
        metrics: [
          { name: "Adults with anxiety/depression symptoms", value: "≈32%", source: "CDC / KFF" },
          { name: "Suicide rate", value: "≈14.2 / 100,000", source: "CDC" },
          { name: "Annual drug-overdose deaths", value: "≈100,000", source: "CDC (NCHS)" },
          { name: "Adults reporting loneliness", value: "≈1 in 3", source: "U.S. Surgeon General / Gallup" },
        ],
      },
      {
        label: "Childhood & education", value: 9, color: "#ff8c42", score: 54,
        note: "Early childhood, learning outcomes, kids' odds.",
        metrics: [
          { name: "NAEP reading & math (Nation's Report Card)", value: "near multi-decade lows", source: "NCES" },
          { name: "High-school graduation rate", value: "≈87%", source: "NCES" },
          { name: "Child poverty (SPM)", value: "≈13%", source: "U.S. Census" },
          { name: "PISA math ranking", value: "middle of the OECD", source: "OECD" },
        ],
      },
      {
        label: "Affordability", value: 8, color: "#22b8cf", score: 44,
        note: "Housing, childcare, healthcare, energy vs. income.",
        metrics: [
          { name: "Cost-burdened renters (>30% of income)", value: "≈50%", source: "HUD / Census (ACS)" },
          { name: "Infant childcare vs. rent", value: "costs more than rent in most states", source: "U.S. Dept. of Labor" },
          { name: "Adults with medical debt", value: "≈1 in 12", source: "KFF" },
          { name: "Housing affordability index", value: "near record lows", source: "NAR / Atlanta Fed" },
        ],
      },
      {
        label: "Safety", value: 7, color: "#f06595", score: 56,
        note: "Crime, gun deaths, road safety, and whether people feel safe.",
        metrics: [
          { name: "Gun deaths", value: "≈14 / 100,000", source: "CDC" },
          { name: "Traffic fatalities", value: "≈12.5 / 100,000", source: "NHTSA" },
          { name: "Violent crime vs. peer nations", value: "elevated", source: "FBI (UCR/NIBRS)" },
          { name: "Feel safe walking alone at night", value: "≈70%", source: "Gallup" },
        ],
      },
      {
        label: "Opportunity & mobility", value: 7, color: "#1098ad", score: 46,
        note: "Can a kid born poor rise? Inequality and the American Dream.",
        metrics: [
          { name: "Odds a child born poor reaches the top fifth", value: "≈7.5%", source: "Opportunity Insights" },
          { name: "Income inequality (Gini)", value: "≈0.49 (high)", source: "U.S. Census" },
          { name: "Wealth: top 1% vs. bottom 50%", value: "≈31% vs. 3%", source: "Federal Reserve" },
          { name: "Racial & gender wage gaps", value: "persistent", source: "BLS / Census" },
        ],
      },
      {
        label: "Work & leisure", value: 6, color: "#f59f00", score: 50,
        note: "Job quality, hours, paid leave, and work-life balance.",
        metrics: [
          { name: "Federally guaranteed paid leave", value: "0 weeks (worst among peers)", source: "U.S. DOL / OECD" },
          { name: "Average annual hours worked", value: "high vs. peers", source: "OECD" },
          { name: "Union membership", value: "≈10%", source: "BLS" },
          { name: "Workers reporting burnout", value: "≈ half", source: "Gallup" },
        ],
      },
      {
        label: "Life satisfaction", value: 5, color: "#ae3ec9", score: 60,
        note: "Are people actually thriving — happiness, stress, and meaning?",
        metrics: [
          { name: "World Happiness Report rank", value: "≈ mid-teens", source: "Gallup World Poll" },
          { name: "Adults 'thriving' in life evaluation", value: "≈50%", source: "Gallup" },
          { name: "Report a lot of daily stress", value: "≈ half", source: "Gallup" },
          { name: "Sense of meaning & purpose", value: "mixed", source: "Pew / Gallup" },
        ],
      },
      {
        label: "Environment", value: 4, color: "#2f9e44", score: 62,
        note: "Clean air and water, and a livable climate.",
        metrics: [
          { name: "People in counties with failing air quality", value: "≈1 in 3", source: "American Lung Assoc. / EPA" },
          { name: "Water systems meeting safety standards", value: "≈92%", source: "EPA" },
          { name: "CO₂ emissions per capita", value: "declining", source: "EIA / EPA" },
          { name: "Major disaster declarations / yr", value: "rising", source: "FEMA / NOAA" },
        ],
      },
      {
        label: "Civic trust", value: 3, color: "#e64980", score: 33,
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
