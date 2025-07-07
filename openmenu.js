document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector('nav:not(.side-bar) .menu-icon'); // hamburguesa
  const closeBtn = document.querySelector('.side-bar .menu-icon'); // cruz
  const sideBar = document.querySelector('.side-bar');

  openBtn.addEventListener('click', () => {
    sideBar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('active');
  });
});
