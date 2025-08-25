// form.js
function handleFormSubmit(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les valeurs des champs
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Vérifier que les champs obligatoires sont remplis
  if (!email || !message) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  // Créer l'objet FormData
  const formData = new FormData();
  formData.append("email", email);
  formData.append("message", message);

  // Vérifier si un fichier est attaché
  const fileInput = document.getElementById("file");
  if (fileInput && fileInput.files.length > 0) {
    formData.append("file", fileInput.files[0]);
  }

  // Envoyer les données à Formsubmit (remplacer l'email par le tien !)
  fetch("https://formsubmit.co/ajax/6a412ce97022e91ed1a11abe3c3631a5", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);

      // Supprimer les anciens messages de confirmation
      removeMessages();

      // Afficher un message de confirmation
      const confirmationMessage = document.createElement("p");
      confirmationMessage.textContent = "Merci pour votre message!";
      confirmationMessage.style.color = "green";
      document.getElementById("contactForm").appendChild(confirmationMessage);

      // Réinitialiser le formulaire
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);

      // Supprimer les anciens messages d'erreur
      removeMessages();

      // Afficher un message d'erreur
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Erreur lors de l'envoi du message.";
      errorMessage.style.color = "red";
      document.getElementById("contactForm").appendChild(errorMessage);
    });
}

// Supprimer les anciens messages pour éviter les doublons
function removeMessages() {
  const form = document.getElementById("contactForm");
  const existingMessages = form.querySelectorAll("p");
  existingMessages.forEach((msg) => msg.remove());
}

// Ajout de l'écouteur d'événement
document
  .getElementById("contactForm")
  .addEventListener("submit", handleFormSubmit);
