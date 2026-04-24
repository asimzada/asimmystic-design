document.addEventListener("DOMContentLoaded", () => {

  // 🧲 CARD HOVER EFFECTS
  document.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    card.style.transform = "translateY(-10px) scale(1.02)";
    card.style.transition = "0.3s ease";
    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
  });

  document.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    card.style.transform = "translateY(0px) scale(1)";
    card.style.boxShadow = "none";
  });

  // ⚡ CLICK PULSE EFFECT
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    card.classList.add("clicked");

    setTimeout(() => {
      card.classList.remove("clicked");
    }, 300);
  });

  // 🌌 PAGE LOAD FADE-IN
  const container = document.querySelector(".feed-container");

  if (container) {
    container.style.opacity = 0;
    container.style.transform = "translateY(20px)";

    setTimeout(() => {
      container.style.transition = "0.6s ease";
      container.style.opacity = 1;
      container.style.transform = "translateY(0px)";
    }, 100);
  }

});