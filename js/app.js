// MOBILE MENU
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

btn?.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// SMOOTH PAGE TRANSITION (fake SPA feel)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    if (href.startsWith("/") || href.includes(".html")) {
      e.preventDefault();

      document.body.style.opacity = "0.2";

      setTimeout(() => {
        window.location.href = href;
      }, 250);
    }
  });
});


// MICRO CLICK EFFECT (ripple-lite SaaS feel)
document.querySelectorAll(".nav-item, .menu-btn").forEach(el => {
  el.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 120);
  });
});