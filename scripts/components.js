/* =========================================================
   Rob Avery 2028 — shared chrome + cross-page behavior
   Injects header/footer, wires nav, reveals, counters, forms.
   ========================================================= */
(() => {
  "use strict";
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const page = document.body.dataset.page || "";

  /* ---- Brand mark SVG (shared) ---- */
  const LOGO = `<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <path d="M9 24 L16 7 L23 24 M11.6 18.5 H20.4" stroke="#f4b740" stroke-width="2.8"
      stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="16" cy="4.4" r="1.5" fill="#c8102e"/></svg>`;

  const NAV = [
    { key: "home",    href: "index.html",        label: "Home" },
    { key: "about",   href: "about.html",        label: "Meet Rob" },
    { key: "issues",  href: "issues.html",       label: "Issues" },
    { key: "budget",  href: "budget.html",       label: "Budget" },
    { key: "deficit", href: "deficit.html",      label: "Deficit" },
    { key: "govtracker", href: "govtracker.html", label: "GovTracker" },
    { key: "affect",  href: "affect.html",       label: "Your Impact" },
    { key: "tax",     href: "tax-lab.html",      label: "Tax Lab" },
    { key: "join",    href: "get-involved.html", label: "Join" },
  ];

  /* ---- Header ---- */
  const headerHTML = `
    <div class="gov-bar">🛈 <strong>PARODY</strong> — a fictional campaign. Not a real candidate, committee, or party. Not affiliated, not endorsed, not soliciting votes or money.</div>
    <header class="site-header" id="siteHeader">
      <nav class="nav" aria-label="Primary">
        <a class="brand" href="index.html" aria-label="Rob Avery 2028 — home">
          <span class="brand-mark">${LOGO}</span>
          <span class="brand-text"><b>Avery</b><span>President 2028</span></span>
        </a>
        <div class="nav-links" id="navLinks">
          ${NAV.map(n => `<a href="${n.href}" data-key="${n.key}"${n.key === page ? ' class="active"' : ''}>${n.label}</a>`).join("")}
          <span class="nav-cta"><a href="get-involved.html#donate">Donate</a></span>
        </div>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
    <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>`;

  /* ---- Footer ---- */
  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-top">
        <div class="footer-brand">
          <a class="brand" href="index.html" aria-label="Home">
            <span class="brand-mark">${LOGO}</span>
            <span class="brand-text"><b>Avery</b><span>President 2028</span></span>
          </a>
          <p>A Future Worth Building. A serious plan, written in plain language, on a clock.</p>
          <div class="socials" aria-label="Social (non-functional, parody)">
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="GitHub">⌥</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Campaign</h4>
          <a href="index.html">Home</a>
          <a href="about.html">Meet Rob</a>
          <a href="issues.html">Issues</a>
          <a href="get-involved.html">Get Involved</a>
        </div>
        <div class="footer-col">
          <h4>The Issues</h4>
          <a href="issues.html#cat-spending">Spending Policies</a>
          <a href="issues.html#cat-revenue">Revenue Policies</a>
          <a href="budget.html">The Budget</a>
          <a href="deficit.html">The Deficit &amp; Debt</a>
        </div>
        <div class="footer-col">
          <h4>Tools</h4>
          <a href="govtracker.html">GovTracker (live)</a>
          <a href="tax-lab.html">Tax Lab</a>
          <a href="affect.html">How it affects you</a>
          <a href="get-involved.html#donate">Donate</a>
        </div>
      </div>
      <div class="container footer-legal">
        <strong>This is a fictional, for-fun parody website.</strong> It is not a real political campaign and
        is not affiliated with, endorsed by, or operated on behalf of any real candidate, campaign committee,
        political party, or government body. Nothing here is a solicitation for votes, contributions, or
        volunteers, and no real donations are processed. Policy figures and the Tax Lab are simplified
        illustrations for education and entertainment — not official estimates. © ${"{year}"} · Built for fun.
      </div>
    </footer>`;

  /* ---- Inject ---- */
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML.replace("{year}", new Date().getFullYear());

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    const close = () => { toggle.classList.remove("open"); links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("open");
      links.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") close(); });
    addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---- Scroll: header shadow + progress bar ---- */
  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("scrollProgress");
  const onScroll = () => {
    const d = document.documentElement;
    if (header) header.classList.toggle("scrolled", d.scrollTop > 8);
    if (progress) {
      const max = d.scrollHeight - d.clientHeight;
      progress.style.width = (max > 0 ? (d.scrollTop / max) * 100 : 0) + "%";
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll ---- */
  const reveals = [...document.querySelectorAll("[data-reveal]")];
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const sibs = [...e.target.parentElement.children].filter(c => c.hasAttribute("data-reveal"));
        e.target.style.transitionDelay = Math.max(0, sibs.indexOf(e.target)) * 0.06 + "s";
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(el => io.observe(el));
  }

  /* ---- Animated counters ---- */
  const counters = [...document.querySelectorAll("[data-count]")];
  const run = (el) => {
    const target = parseFloat(el.dataset.count);
    const pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    if (prefersReduced) { el.textContent = pre + target + suf; return; }
    const t0 = performance.now(), dur = 1400;
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 3);
      const v = target % 1 === 0 ? Math.round(target * e) : (target * e).toFixed(1);
      el.textContent = pre + v + suf;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { run(e.target); cio.unobserve(e.target); }
    }), { threshold: 0.6 });
    counters.forEach(c => cio.observe(c));
  } else counters.forEach(run);

  /* ---- Email signup (no backend, friendly local handling) ---- */
  document.querySelectorAll("[data-signup]").forEach((form) => {
    const note = form.querySelector(".form-note");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!ok) { note.textContent = "Please enter a valid email address."; note.classList.add("error"); return; }
      note.classList.remove("error");
      note.textContent = "You're on the list! (Demo only — nothing was actually sent.) 🇺🇸";
      form.reset();
    });
  });
})();
