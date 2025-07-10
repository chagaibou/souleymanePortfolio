// Gestion du menu mobile
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Simple animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(".animate-fadeIn");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  animateElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    observer.observe(el);
  });
});

// Récupérer tous les boutons
const buttons = document.querySelectorAll("button[data-filter]");
const portfolioItems = document.querySelectorAll(".project-item");
const allButton = document.getElementById("filter-all"); // Le bouton "Tous"

allButton.classList.add("active-button");

// Ajouter un écouteur d'événements pour chaque bouton
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const filter = this.getAttribute("data-filter");

    // Enlever la classe active de tous les boutons
    buttons.forEach((btn) => {
      btn.classList.remove("active-button");
      btn.classList.add("inactive-button");
    });

    // Ajouter la classe active au bouton cliqué
    this.classList.add("active-button");
    this.classList.remove("inactive-button");

    // Filtrer les éléments du portfolio en fonction de la catégorie sélectionnée
    portfolioItems.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block"; // Afficher tous les éléments
      } else {
        // Afficher ou cacher l'élément en fonction de sa catégorie
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });

    // Désactiver le bouton "Tous" lorsqu'un autre bouton est cliqué
    if (filter !== "all") {
      allButton.classList.add("inactive-button");
      allButton.classList.remove("active-button");
    } else {
      allButton.classList.add("active-button");
      allButton.classList.remove("inactive-button");
    }
  });
});
