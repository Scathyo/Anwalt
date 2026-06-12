// Hamburger Button auswählen
const hamburger = document.querySelector(".hamburger");

// Navigation auswählen
const navLinks = document.querySelector(".nav-links");

// Alle Menüpunkte auswählen
const navItems = document.querySelectorAll(".nav-links a");

//Prüfung ob Hamburger und Navigation vorhanden
if (hamburger && navLinks) {
   
   // Hamburger Menü öffnen/schließen
   hamburger.addEventListener("click", () => {

   // Klasse "active" hinzufügen oder entfernen   
   navLinks.classList.toggle("active");

   // Prüfen, ob das Menü aktuell geöffnet ist
   if(navLinks.classList.contains("active")) {

      //Symbol für geöffnetes Menü anzeigen
      hamburger.textContent = "✕";

   }
   else{
      //Symbol für geschlossenes Menü
      hamburger.textContent = "☰";

   }

   }

)};

// Menü nach Klick auf einen Link schließen
navItems.forEach(item => {
   //Sobald du klickst
   item.addEventListener("click", () => {
      //Schließt das Menü
      navLinks.classList.remove("active");
      //Wieder Hamburger anzeigen
      hamburger.textContent = "☰";

   });

});

// Alle Bilder auswählen
const images = document.querySelectorAll(".page-image img, .hero-portrait img, .about-image img");

// Modal auswählen
const modal = document.querySelector(".image-modal");

// Großes Bild auswählen
const modalImage = document.querySelector(".modal-image");

// Schließen-Button auswählen
const closeModal = document.querySelector(".close-modal");

//Prüfung ob modal, modalImage,closeModal vorhanden
if(modal && modalImage && closeModal){

   // Klick auf Bild
images.forEach(image => {

   image.addEventListener("click", () => {

      modal.classList.add("active");

      modalImage.src = image.src;

      modalImage.alt = image.alt;

   });

   });

}

// Klick auf X
closeModal.addEventListener("click", () => {

   modal.classList.remove("active");

});

// Klick auf dunklen Hintergrund
modal.addEventListener("click", (event) => {

   if(event.target === modal){

      modal.classList.remove("active");

   }

});

// Bild mit ESC-Taste schließen
document.addEventListener("keydown", (event) => {

   if(event.key === "Escape"){

      modal.classList.remove("active");

   }

});

