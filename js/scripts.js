/* =========================================
   FILE: script.js
   TYPE: UI Behavior Layer
   PURPOSE: Scroll animations + interaction logic
========================================= */

/* Scroll reveal system */
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});