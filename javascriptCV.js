// zoom sur ma photo de profil du cv
const profilePhoto = document.getElementById('profile-photo');
const profileModal = document.getElementById('profile-modal');
profilePhoto.onclick = function () {
  profileModal.style.display = 'flex';
  setTimeout(() => {
    profileModal.classList.add('active');
  }, 10);
}
profileModal.onclick = function () {
  profileModal.classList.remove('active');
  setTimeout(() => {
    profileModal.style.display = 'none';
  }, 300);
}

const backToTopBtn = document.getElementById("btn-back-to-top");

// Affiche le bouton juste quand on scrolle vers le bas
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Clique pour remonter en haut de la page de mon cv ( tips pierre : ajouter un timer delai experience utilisateur)
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Configuration EmailJS 
emailjs.init("VVJAp976kpbrQI5jq");

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    // Désactiver le bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';
    formStatus.textContent = '';

    // Attendre pour voir si emailjs est chargé
    setTimeout(() => {
      // Récupérer les vraies données du formulaire
      const formData = new FormData(this);
      const templateParams = {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        subject: formData.get('subject') || '',
        message: formData.get('message') || ''
      };

      console.log('Données du formulaire:', templateParams);

      // Service d'email fonctionnel
      emailjs.send('service_b8nfrnj', 'template_lhsz7jb', templateParams)
        .then(function () {

          formStatus.innerHTML = '<span style="color: green;">✅ Message envoyé avec succès !</span>';
          document.getElementById('contact-form').reset();
        }, function (error) {
          formStatus.innerHTML = '<span style="color: red;">❌ Erreur lors de l\'envoi. Veuillez réessayer.</span>';
          console.log('Erreur EmailJS:', error);
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Envoyer';
        });
    }, 100);
  });
});





document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.cv-header');
  header.addEventListener('mouseenter', () => {
    header.classList.add('hover-anim');
  });
  header.addEventListener('mouseleave', () => {
    header.classList.remove('hover-anim');
  });
});
