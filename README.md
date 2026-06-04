# Rob Avery for President 2028 — *A Future Worth Building*

A multi-page, official-style **campaign website** for a fictional 2028
presidential run — including an interactive **Tax Lab** that lets visitors
design their own federal income-tax brackets and see the revenue. Built as a
zero-build static site that drops straight onto **Cloudflare Pages**.

> ⚠️ **This is a parody / for-fun project.** It is not a real political
> campaign and is not affiliated with, endorsed by, or operated for any real
> candidate, committee, party, or government body. No votes, money, or
> volunteers are actually solicited or collected. Policy numbers and the Tax
> Lab are simplified illustrations, not official estimates.

---

## 🗺️ Pages

| Page | File | What's on it |
|------|------|--------------|
| **Home** | `index.html` | Hero, message, top issues, goals, Tax Lab promo, signup |
| **Meet Rob** | `about.html` | Candidate bio, values, the road to 2028 |
| **Issues** | `issues.html` | The full **24-policy platform**, rendered from `data/policies.js`. Each policy has a plan, how-it-works, **common questions & concerns**, **what Republicans / Democrats / Independents say**, and a **transparent cost badge**. Includes the **Humanity Score** pie chart and **The Honest Budget** (auto-totaled from the data) |
| **Tax Lab** | `tax-lab.html` | Interactive: build your own income-tax brackets, see estimated revenue, compare to current law. Includes the **★ Avery plan** preset ($0 income tax under $250k) |
| **Get Involved** | `get-involved.html` | Volunteer form, events, parody donate, signup |
| **404** | `404.html` | Styled not-found page |

The header and footer are defined once in `scripts/components.js` and injected
into every page, so the navigation never drifts out of sync.

## 🏛️ The platform & "The Honest Budget"

All 24 policies live in **`data/policies.js`** as a single source of truth
(title, plan, how-it-works, Q&A, cross-party views, and a cost). The Issues page
renders every section from that file — and the same data auto-generates **The
Honest Budget**, which totals the cost of every plank, lists the identified
funding, and shows the remaining gap. Add, edit, or re-cost a policy in one place
and both the section and the budget update. The **Humanity Score** donut chart is
driven by `humanityScore` in the same file.

## 🧮 The Tax Lab

`tax-lab.html` + `scripts/tax.js` + `data/income-distribution.js`

Design any set of marginal federal **income-tax** brackets and a standard
deduction; the estimated annual revenue updates live and is compared, head to
head, with current law.

**How the estimate works**
- Starts from an approximate **IRS-SOI-style distribution** of U.S. returns by
  income (`data/income-distribution.js`): number of returns and average income
  per band.
- For each band: subtracts the deduction, applies your marginal brackets,
  multiplies by the number of returns, and sums.
- A single **calibration factor** is tuned so the model's *current-law* output
  equals real-world collections (~$2.2T individual income tax). The same factor
  is applied to your plan, making the comparison apples-to-apples. It stands in
  for credits, itemized deductions, joint filing, and avoidance.

**Deliberately scoped to income tax for now.** The data model and engine are
structured so additional revenue sources (capital gains, corporate, payroll,
estate) can be added as new modules later — see the "coming soon" roadmap on
the page.

> The numbers are intentionally approximate and clearly labeled as educational.
> To make them more precise, refine the bins in `data/income-distribution.js`
> with the latest IRS SOI data and adjust `ACTUAL_CURRENT_REVENUE`.

## 📁 Structure

```
rob-avery-2028/
├── index.html  about.html  issues.html  tax-lab.html  get-involved.html  404.html
├── styles/
│   ├── main.css      # shared site styles (campaign look)
│   ├── issues.css    # issues-page layout (TOC, Q&A, "across the aisle")
│   └── tax.css       # Tax Lab UI + charts
├── scripts/
│   ├── components.js # shared header/footer + nav, reveals, counters, signup
│   ├── issues.js     # Q&A accordion + sticky TOC scroll-spy
│   └── tax.js        # Tax Lab engine, live UI, SVG charts
├── data/
│   └── income-distribution.js  # IRS-SOI-style data + current brackets
├── assets/           # favicon + candidate portrait (SVG placeholders)
├── _headers          # Cloudflare Pages caching + security headers
├── wrangler.toml     # Cloudflare Pages config
└── package.json      # dev server + deploy scripts
```

No frameworks, no build step — HTML, CSS, and vanilla JS.

## 🧪 Run locally

```bash
npm run dev          # serves at http://localhost:5173
```

(or `python3 -m http.server 5173`). Use a server rather than opening files
directly so the shared scripts load over HTTP.

## 🚀 Deploy to Cloudflare Pages

### Option A — Direct upload with Wrangler

```bash
npx wrangler login      # one-time
npm run deploy          # wrangler pages deploy . --project-name=rob-avery-2028
```

### Option B — Connect a Git repo (auto-deploy on push)

1. Push to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings: **Framework preset** `None`, **Build command** blank,
   **Build output directory** `/`.
4. **Save and Deploy** — every push to main redeploys.

## 🎨 Make it yours

- **Colors / fonts:** CSS variables at the top of `styles/main.css`.
- **Policy content:** `issues.html` (each `<section class="policy">`).
- **Tax model & data:** `data/income-distribution.js`.
- **Candidate photo:** replace `assets/rob.svg` with a real image (update the
  `<img src>` on `index.html` and `about.html`).
- **Nav / footer:** edit once in `scripts/components.js`.

## License

MIT — have fun with it.
