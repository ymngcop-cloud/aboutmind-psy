/* Light enhancements only — FAQ uses native <details> */
document.addEventListener("DOMContentLoaded", () => {
  // Mark current nav link from path
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a[data-page]").forEach((a) => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  // Contact form: visual only
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
});
