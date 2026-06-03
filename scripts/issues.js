/* Issues page — Q&A accordion + sticky TOC scroll-spy */
(() => {
  "use strict";

  /* Accordion */
  document.querySelectorAll(".qa-item").forEach((item) => {
    const btn = item.querySelector(".qa-q");
    btn.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    btn.setAttribute("aria-expanded", "false");
  });

  /* TOC scroll-spy */
  const tocLinks = [...document.querySelectorAll("#toc a")];
  const map = new Map(tocLinks.map((a) => [a.dataset.target, a]));
  const sections = [...document.querySelectorAll(".policy[id]")];
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      tocLinks.forEach((a) => a.classList.remove("active"));
      const a = map.get(e.target.id);
      if (a) {
        a.classList.add("active");
        // keep active chip visible in the horizontal scroller
        a.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  sections.forEach((s) => spy.observe(s));
})();
