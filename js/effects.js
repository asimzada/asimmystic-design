
// 💥 PAGE CLICK FADE TRANSITION (SPA FEEL)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    document.body.style.opacity = "0.2";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 250);
  });
});


// ⚡ CARD MICRO INTERACTION BOOST
document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.filter = "brightness(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.filter = "brightness(1)";
  });

  // 💥 CLICK POP EFFECT
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "scale(1.05)";
    }, 120);
  });

});