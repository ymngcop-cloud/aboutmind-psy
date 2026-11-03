/* Light enhancements — FAQ uses native <details>; mobile nav toggle */
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a[data-page]").forEach((a) => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.getElementById("form-note");
      if (note) {
        note.textContent = "感謝您的查詢。表單目前為示範，聯絡方式稍後填寫。";
        note.hidden = false;
      }
    });
  }

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (!header || !toggle || !nav) return;

  const setOpen = (open) => {
    header.classList.toggle("is-nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
    document.body.classList.toggle("nav-lock", open);
  };

  toggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("is-nav-open"));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  const cta = header.querySelector(".header-cta");
  if (cta) cta.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Close if resizing up to desktop
  const mq = window.matchMedia("(min-width: 901px)");
  const onMq = () => {
    if (mq.matches) setOpen(false);
  };
  if (mq.addEventListener) mq.addEventListener("change", onMq);
  else if (mq.addListener) mq.addListener(onMq);
});
