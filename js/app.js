document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    document.body.style.opacity = "0.4";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 200);
  });
});