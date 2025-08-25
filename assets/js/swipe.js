document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("swiperProjectContainer");
  console.log(container);

  if (!container) {
    console.error("Le conteneur swiperProjectContainer est introuvable !");
    return;
  }

  const slidesData = [
    // variable de tableau d'objets des projets de développement web et web mobile pour la création du carousel

    {
      titre: " HACKATON régional août 2025- AccessiWeb - version 0",
      description:
        "AccessiWeb est une plateforme web permettant de consulter et gérer une bibliothèque de documents et de catégories, avec un système d'authentification sécurisé et gestion des rôles (`admin` et `user`). Elle permet aux utilisateurs de parcourir et rechercher des documents, aux administrateurs de gérer les utilisateurs, catégories et documents, le téléversement de fichiers (Cloudinary), la vérification d'email lors de l'inscription. Projet déployé en backend sur Render et frontend sur Vercel",
      image: "assets/image/hackaton.png",
      lien: "https://accessitheque-alf3.onrender.com",
    },

    {
      titre: "accessiWeb - Web app accessible de gestion de documents - Version 0",
      description: "accessiWeb est une web app accessible, en cours de développement, pour gérer des documents, avec un frontend React/Bootstrap déployé sur Vercel et un backend Node.js/Express sur Render utilisant une base MySQL et Cloudinary pour les fichiers. L'application propose l'affichage dynamique des documents et catégories, un filtrage interactif, une gestion des utilisateurs avec authentification, ainsi que des messages d'erreur et indicateurs de chargement pour une expérience utilisateur claire.",
      image: "assets/image/accessiweb.png",
      lien: "https://accessi-web.vercel.app",
    },
    {
      titre: "Site de rencontre + 50 ans - Version 0",
      description:
        "Un site dynamique en HTML/CSS/Javascript en cours de développement. Projet fil rouge de la formation DWWM (Développeur Web et Web Mobile) de l'AFEC.",
      image: "assets/image/accueil.png",
      lien: "https://charlene149611.github.io/site-de-rencontre/",
    },
    {
      titre:
        "Portfolio - Version 0, qui est la première version de mon portfolio",
      description:
        "Un site statique incluant des animations et du dynamisme en HTML/CSS/Javascript et du JSON. Le projet utilise également des bibliothèques externes telles que Bootstrap et Swipe.",
      image: "assets/image/portfolio.png",
      lien: "https://charlene149611.github.io/portfoliov2/",
    },
  ];

  // Injection HTML Swiper pour créer un carousel
  container.innerHTML = `
    <div class="swiper mySwiper">
      <div class="swiper-wrapper" id="projectSlides"></div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  `;

  const slidesWrapper = document.getElementById("projectSlides");

  slidesData.forEach((slide) => {
    console.log("Chargement image :", slide.image);

    const slideElement = document.createElement("div"); // Création du carousel et importation des données de la variable
    slideElement.className = "swiper-slide";
    slideElement.innerHTML = `
    <a href="${slide.lien}" target="_blank" class="slide-link" style="text-decoration: none;">
      <div class="slide-content">
        <img src="${slide.image}" alt="${slide.titre}" style="max-width: 100%; border-radius: 8px;">
        <h3>${slide.titre}</h3>
        <p>${slide.description}</p>
      </div>
    `;
    slidesWrapper.appendChild(slideElement);
  });
  console.log("Slides ajoutés :", slidesWrapper.innerHTML);

  // Initialisation Swiper, du carousel avec dynamisme des slides
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 6000,
    },
  });
  console.log("Swiper initialisé !");
});
