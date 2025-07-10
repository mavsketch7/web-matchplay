const scrollUpImg = document.getElementById('scrollUpImg');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpImg.classList.add('visible');
  } else {
    scrollUpImg.classList.remove('visible');
  }
});

// Asegúrate que el evento se añade siempre:
scrollUpImg.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
