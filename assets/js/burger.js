// Fonction pour basculer le mode sombre et sauvegarder l'état dans localStorage
function toggleDarkMode() {
  // Cette fonction bascule la classe dark sur le corps du document et sauvegarde l'état actuel du mode sombre dans localStorage
  document.body.classList.toggle("dark");

  // Vérifier si le mode sombre est activé
  const isDarkMode = document.body.classList.contains("dark");

  // Sauvegarder l'état du mode sombre dans localStorage
  localStorage.setItem("darkMode", isDarkMode);
}

// Fonction pour appliquer le mode sombre sauvegardé au chargement de la page
function applySavedDarkMode() {
  // Cette fonction vérifie si une préférence de mode sombre est sauvegardée dans localStorage et l'applique au chargement de la page.
  const savedDarkMode = localStorage.getItem("darkMode");

  // Si une préférence est sauvegardée, l'appliquer
  if (savedDarkMode === "true") {
    document.body.classList.add("dark");
  }
}

// Fonction principale pour créer le menu burger
export function createBurgerMenu() {
  // Crée le bouton burger
  const burgerButton = document.createElement("button");
  burgerButton.textContent = "☰"; // icône burger
  burgerButton.style.fontSize = "24px";
  burgerButton.style.cursor = "pointer";
  burgerButton.style.position = "fixed";
  burgerButton.style.top = "50%"; // Positionné au milieu verticalement
  burgerButton.style.right = "20px";
  burgerButton.style.zIndex = "1000";
  burgerButton.style.transform = "translateY(-50%)"; // Centrer verticalement

  // Crée le menu (caché par défaut)
  const menu = document.createElement("nav");
  const style = menu.style;

  style.position = "fixed";
  style.top = "50%"; // Positionné au milieu verticalement
  style.right = "-200px"; // caché à droite
  style.width = "200px";
  style.height = "auto";
  style.background = "#333";
  style.color = "#fff";
  style.padding = "20px";
  style.transition = "right 0.3s";
  style.zIndex = "999";
  style.transform = "translateY(-50%)"; // Centrer verticalement

  // Ajoute du contenu au menu
  menu.innerHTML = `
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li><a href="#profilSection" style="color: white; text-decoration: none;">Profil</a></li>
      <li><a href="#parcours" style="color: white; text-decoration: none;">Parcours</a></li>
      <li><a href="#projets" style="color: white; text-decoration: none;">Projets</a></li>
      <li><a href="#contact" style="color: white; text-decoration: none;">Contact</a></li>
      <li><a href="#" id="darkToggleBurger" style="text-decoration: none;">🌓</a></li>
    </ul>
  `;

  // Quand on clique sur le bouton burger
  burgerButton.addEventListener("click", () => {
    // Un écouteur d'événement est ajouté au bouton de mode sombre dans le menu burger pour appeler toggleDarkMode lorsque le bouton est cliqué
    if (menu.style.right === "0px") {
      menu.style.right = "-200px"; // ferme
    } else {
      menu.style.right = "0px"; // ouvre
    }
  });

  // Ajoute le bouton et le menu à la page
  document.body.appendChild(burgerButton);
  document.body.appendChild(menu);

  // Ajoute l'event listener au bouton Dark Mode du menu burger
  const darkToggleBtn = document.getElementById("darkToggleBurger");
  if (darkToggleBtn) {
    darkToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleDarkMode(); // utilise la fonction commune
    });
  }
}

// Appliquer le mode sombre sauvegardé lorsque la page se charge
window.onload = applySavedDarkMode;
