/* =========================================================
   Rob Avery 2028 — interaction layer
   Vanilla JS, no dependencies.
   ========================================================= */
(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ----------------------------------------------------- *
   * 1. Hero headline: split into animated words
   * ----------------------------------------------------- */
  $$(".hero-title [data-words]").forEach((line, li) => {
    const words = line.textContent.trim().split(/\s+/);
    line.textContent = "";
    words.forEach((w, i) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = w;
      span.style.animationDelay = `${0.15 + (li * 3 + i) * 0.09}s`;
      line.appendChild(span);
      line.appendChild(document.createTextNode(" "));
    });
  });

  /* ----------------------------------------------------- *
   * 2. Typewriter rotating promises
   * ----------------------------------------------------- */
  (() => {
    const el = $("#typed");
    if (!el) return;
    const phrases = [
      "wire every town for the future.",
      "make the basics affordable again.",
      "build a clean, reliable grid.",
      "fund the science that matters.",
      "treat governing like engineering.",
    ];
    if (prefersReduced) { el.textContent = phrases[0]; return; }

    let p = 0, c = 0, deleting = false;
    const tick = () => {
      const full = phrases[p];
      c += deleting ? -1 : 1;
      el.textContent = full.slice(0, c);
      let delay = deleting ? 38 : 64;
      if (!deleting && c === full.length) { delay = 1800; deleting = true; }
      else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 320; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 900);
  })();

  /* ----------------------------------------------------- *
   * 3. Scroll progress bar + nav background
   * ----------------------------------------------------- */
  const progress = $("#scrollProgress");
  const nav = $("#nav");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    nav.classList.toggle("scrolled", h.scrollTop > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----------------------------------------------------- *
   * 4. Mobile nav toggle
   * ----------------------------------------------------- */
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  if (toggle && links) {
    const close = () => { toggle.classList.remove("open"); links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("open");
      links.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") close(); });
  }

  /* ----------------------------------------------------- *
   * 5. Reveal-on-scroll
   * ----------------------------------------------------- */
  const revealables = $$("[data-reveal]");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealables.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          // small stagger for siblings entering together
          const sibs = [...e.target.parentElement.children].filter((c) => c.hasAttribute("data-reveal"));
          const idx = sibs.indexOf(e.target);
          e.target.style.transitionDelay = `${Math.max(0, idx) * 0.07}s`;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------- *
   * 6. Animated number counters
   * ----------------------------------------------------- */
  const counters = $$("[data-count]");
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1500;
    if (prefersReduced) { el.textContent = prefix + target + suffix; return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target % 1 === 0 ? Math.round(target * eased) : (target * eased).toFixed(1);
      el.textContent = prefix + val + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach(runCounter);
  }

  /* ----------------------------------------------------- *
   * 7. Pillars: pointer-tracked glow + expandable detail
   * ----------------------------------------------------- */
  const extras = {
    "Technology & Innovation":
      "We treat connectivity, compute, and clean research like roads and bridges — shared public infrastructure. Standards are open, audits are public, and the people who fund the breakthroughs get to share in them.",
    "Economy & Jobs":
      "Prosperity you can feel: re-shore critical industries, reward firms that pay well and build clean, and make the price of housing, childcare, and starting a business something a normal family can actually manage.",
    "Climate & Energy":
      "A clean grid isn't a sacrifice — it's the cheapest, most reliable power we've ever built, and millions of good jobs wiring it together. We modernize transmission, electrify homes, and bring nature back.",
    "Education & Health":
      "Knowledge and care are the floor a free society stands on. Skills training and community college are free, essential medicines are capped at pocket change, and every kid gets a real shot from pre-K on.",
  };
  $$(".pillar").forEach((card) => {
    // glow follows pointer
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });

    // inject expandable detail
    const title = $("h3", card)?.textContent.replace(/\s+/g, " ").trim();
    const copy = extras[title];
    const btn = $(".pillar-more", card);
    if (copy && btn) {
      const wrap = document.createElement("div");
      wrap.className = "pillar-extra";
      wrap.innerHTML = `<div><p>${copy}</p></div>`;
      btn.before(wrap);
      btn.addEventListener("click", () => {
        const open = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
        btn.firstChild.textContent = open ? "Less " : "More ";
      });
    }
  });

  /* ----------------------------------------------------- *
   * 8. Cursor glow (desktop / fine pointer only)
   * ----------------------------------------------------- */
  const glow = $("#cursorGlow");
  if (glow && window.matchMedia("(pointer: fine)").matches && !prefersReduced) {
    let gx = 0, gy = 0, cx = 0, cy = 0, raf = null;
    window.addEventListener("pointermove", (e) => {
      gx = e.clientX; gy = e.clientY; glow.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(loop);
    });
    const loop = () => {
      cx += (gx - cx) * 0.12; cy += (gy - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = Math.abs(gx - cx) > 0.5 || Math.abs(gy - cy) > 0.5 ? requestAnimationFrame(loop) : null;
    };
  }

  /* ----------------------------------------------------- *
   * 9. Particle field on canvas
   * ----------------------------------------------------- */
  (() => {
    const canvas = $("#particles");
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, particles = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      const count = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * dpr,
        vy: (Math.random() - 0.5) * 0.25 * dpr,
        r: (Math.random() * 1.6 + 0.4) * dpr,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const linkDist = 130 * dpr;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(62,230,255,0.55)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const a = (1 - Math.sqrt(d2) / linkDist) * 0.18;
            ctx.strokeStyle = `rgba(124,150,255,${a})`;
            ctx.lineWidth = dpr * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };

    let resizeT;
    addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(resize, 200); });
    resize();
    draw();
  })();

  /* ----------------------------------------------------- *
   * 10. Confetti burst
   * ----------------------------------------------------- */
  const fireConfetti = (x, y) => {
    if (prefersReduced) return;
    const colors = ["#3ee6ff", "#7c5cff", "#ffcb52", "#46e6a4", "#ffffff"];
    const n = 90;
    for (let i = 0; i < n; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = x + "px";
      piece.style.top = y + "px";
      piece.style.background = colors[(Math.random() * colors.length) | 0];
      document.body.appendChild(piece);

      const angle = Math.random() * Math.PI * 2;
      const velocity = 6 + Math.random() * 9;
      const dx = Math.cos(angle) * velocity * (12 + Math.random() * 14);
      const dy = Math.sin(angle) * velocity * (12 + Math.random() * 14) - 120;
      const rot = (Math.random() * 720 - 360) + "deg";

      piece.animate(
        [
          { transform: "translate(0,0) rotate(0)", opacity: 1 },
          { transform: `translate(${dx}px, ${dy + 400}px) rotate(${rot})`, opacity: 0 },
        ],
        { duration: 1400 + Math.random() * 700, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "forwards" }
      ).onfinish = () => piece.remove();
    }
  };
  $$("[data-confetti]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const r = btn.getBoundingClientRect();
      fireConfetti(r.left + r.width / 2, r.top + r.height / 2);
    });
  });

  /* ----------------------------------------------------- *
   * 11. Join form (no backend — celebratory local handling)
   * ----------------------------------------------------- */
  const form = $("#joinForm");
  if (form) {
    const note = $("#formNote");
    const submitBtn = $("#joinSubmit");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#name").value.trim();
      const email = $("#email").value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !validEmail) {
        note.textContent = "Add your name and a valid email — then you're in.";
        note.classList.add("error");
        return;
      }
      note.classList.remove("error");
      note.textContent = `You're in, ${name.split(" ")[0]}! (This is a demo — nothing was actually sent.) 🎉`;
      submitBtn.textContent = "Welcome aboard ✦";
      submitBtn.disabled = true;

      const r = submitBtn.getBoundingClientRect();
      fireConfetti(r.left + r.width / 2, r.top + r.height / 2);
      form.reset();
    });
  }

})();

/* footer year token replace + scroll-spy (separate pass so DOM is settled) */
window.addEventListener("DOMContentLoaded", () => {
  const disclaimer = document.querySelector(".disclaimer");
  if (disclaimer) disclaimer.innerHTML = disclaimer.innerHTML.replace("{now}", new Date().getFullYear());

  const sections = [...document.querySelectorAll("main section[id]")];
  const navMap = new Map(
    [...document.querySelectorAll(".nav-links a")].map((a) => [a.getAttribute("href").slice(1), a])
  );
  if (!("IntersectionObserver" in window)) return;
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const a = navMap.get(e.target.id);
      if (a && e.isIntersecting) {
        document.querySelectorAll(".nav-links a").forEach((x) => x.style.color = "");
        if (!a.classList.contains("nav-cta")) a.style.color = "var(--ink)";
      }
    });
  }, { threshold: 0.5 });
  sections.forEach((s) => spy.observe(s));
});
