// Hamburger Button auswählen
const hamburger = document.querySelector(".hamburger");

// Navigation auswählen
const navLinks = document.querySelector(".nav-links");

// Klick auf Hamburger
hamburger.addEventListener("click", () => {

   // Klasse active hinzufügen/entfernen
   navLinks.classList.toggle("active");

});
