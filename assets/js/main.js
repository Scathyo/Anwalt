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

      document.documentElement.style.overflow = "hidden";
      
   });

   });

}

// Klick auf X
closeModal.addEventListener("click", () => {

   modal.classList.remove("active");

   document.documentElement.style.overflow = "";

});

// Klick auf dunklen Hintergrund
modal.addEventListener("click", (event) => {

   if(event.target === modal){

      modal.classList.remove("active");

      document.documentElement.style.overflow = "";

   }

});

// Bild mit ESC-Taste schließen
document.addEventListener("keydown", (event) => {

   if(event.key === "Escape"){

      modal.classList.remove("active");

      document.documentElement.style.overflow = "";
      
   }

});

// Formular auswählen
const form = document.querySelector("#contact-form");

// Popup auswählen
const successPopup = document.querySelector(".success-popup");

// Prüfen ob Formular vorhanden
if(form && successPopup){

   form.addEventListener("submit", async (event) => {

      // Normale Weiterleitung verhindern
      event.preventDefault();

      // Formulardaten sammeln
      const formData = new FormData(form);

      try{

         // Daten an Formspree senden
         const response = await fetch(form.action, {

            method: "POST",

            body: formData,

            headers: {

               Accept: "application/json"

            }

         });

         // Erfolgreich versendet?
         if(response.ok){

            // Popup anzeigen
            successPopup.classList.add("show");

            // Formular leeren
            form.reset();

            // Popup nach 4 Sekunden ausblenden
            setTimeout(() => {

               successPopup.classList.remove("show");

            }, 4000);

         }

      }catch(error){

         console.error(error);

      }

   });

}
