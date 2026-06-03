# Rob Avery 2028 — *A Future Worth Building*

A polished, animation-heavy **single-page campaign site** for a fictional 2028
presidential run. Built as a zero-build static site that drops straight onto
**Cloudflare Pages**.

> ⚠️ **This is a parody / for-fun project.** It is not a real political
> campaign, is not affiliated with any candidate, committee, or party, and is
> not soliciting votes or donations.

---

## ✨ What's inside

- **Animated hero** — split-word headline reveal, gradient shimmer, a rotating
  typewriter of promises, and a confetti-firing CTA.
- **Living background** — drifting aurora blobs, a connected-particle canvas
  field, and a masked grid.
- **Scroll choreography** — progress bar, sticky glass nav, scroll-spy, and
  `IntersectionObserver` reveal animations with stagger.
- **Animated stat counters** that count up when they enter the viewport.
- **Four policy pillars** (Tech, Economy, Climate, Education/Health) with
  pointer-tracked glow and expandable detail.
- **The Plan**, an **endorsement marquee**, a **roadmap timeline**, a **Meet Rob**
  bio, and a **Join** form with floating labels + a celebratory (demo-only) submit.
- Fully **responsive**, with a `prefers-reduced-motion` path that calms every
  animation.

No frameworks, no build step — just HTML, CSS, and vanilla JS.

## 📁 Structure

```
rob-avery-2028/
├── index.html          # all content / markup
├── 404.html            # styled not-found page
├── styles/main.css     # all styling + animations
├── scripts/main.js     # all interaction (canvas, reveals, confetti, form…)
├── assets/favicon.svg  # logo / favicon
├── _headers            # Cloudflare Pages caching + security headers
├── wrangler.toml       # Cloudflare Pages config
└── package.json        # dev server + deploy scripts
```

## 🧪 Run locally

Any static server works. The simplest:

```bash
npm run dev          # serves at http://localhost:5173
```

(That just runs `npx serve .` — or use `python3 -m http.server 5173`, or open
`index.html` directly.)

## 🚀 Deploy to Cloudflare Pages

You need a (free) Cloudflare account. Two ways:

### Option A — Direct upload with Wrangler (fastest)

```bash
# one-time login
npx wrangler login

# deploy the current folder
npm run deploy
# └─ runs: wrangler pages deploy . --project-name=rob-avery-2028
```

Wrangler prints a `*.pages.dev` URL when it finishes. Re-run anytime to
publish updates.

### Option B — Connect the Git repo (auto-deploy on push)

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. When asked for build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (the repo root)
4. **Save and Deploy.** Every push to the main branch redeploys automatically.

## 🎨 Make it yours

- **Slogan / copy:** edit `index.html`.
- **Colors:** tweak the CSS variables at the top of `styles/main.css`
  (`--cyan`, `--violet`, `--gold`, `--green`).
- **Policy detail text:** the `extras` object in `scripts/main.js`.
- **Typewriter promises:** the `phrases` array in `scripts/main.js`.

## License

MIT — have fun with it.
