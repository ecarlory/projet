const btns = document.querySelectorAll('.toggle-btn');
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    details.classList.toggle('hidden');
    btn.textContent = details.classList.contains('hidden') ? 'En savoir plus' : 'Réduire';
  });
});


const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email.includes('@')) {
    alert('Merci pour votre message !');
    form.reset();
  } else {
    alert('Veuillez saisir un email valide.');
  }
});