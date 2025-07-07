  const menuLinks = document.querySelectorAll('.menu-responsive a');
  const sidebar = document.querySelector('.side-bar');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active'); // Oculta el menú
    });
  });
