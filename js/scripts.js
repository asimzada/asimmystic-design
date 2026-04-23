const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu ul");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});