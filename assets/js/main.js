// Hamburger Button auswählen
const hamburger = document.querySelector(".hamburger");

// Navigation auswählen
const navLinks = document.querySelector(".nav-links");

// Alle Menüpunkte auswählen
const navItems = document.querySelectorAll(".nav-links a");

// Hamburger Menü öffnen/schließen
hamburger.addEventListener("click", () => {

   navLinks.classList.toggle("active");

   // Hamburger Symbol wechseln
   if(navLinks.classList.contains("active")){

      hamburger.textContent = "✕";

   }else{

      hamburger.textContent = "☰";

   }

});

// Menü nach Klick auf einen Link schließen
navItems.forEach(item => {

   item.addEventListener("click", () => {

      navLinks.classList.remove("active");

      hamburger.textContent = "☰";

   });

});
