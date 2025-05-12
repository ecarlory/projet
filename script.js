// Gestion du toggle pour les détails
const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    details.classList.toggle('hidden');
    btn.textContent = details.classList.contains('hidden') ? 'Voir détails' : 'Réduire';
  });
});

// Validation du formulaire de contact
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message')?.value;
    if (email.includes('@') && message.length > 10) {
      alert('Merci pour votre message !');
      form.reset();
    } else {
      alert('Veuillez entrer un email valide et un message de plus de 10 caractères.');
    }
  });
}