const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.cards');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
let autoScroll;
let userInteracted = false;
let resumeTimeout;

// Función de scroll hacia la tarjeta con índice idx
function scrollToCard(idx) {
  if (cards[idx]) {
    cards[idx].scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });
  }
}

// Botones
nextBtn?.addEventListener('click', () => {
  if (index < cards.length - 1) {
    index++;
    scrollToCard(index);
    handleUserInteraction();
  }
});

prevBtn?.addEventListener('click', () => {
  if (index > 0) {
    index--;
    scrollToCard(index);
    handleUserInteraction();
  }
});

// Swipe manual detectado por scroll
track?.addEventListener('scroll', () => {
  const cardWidth = cards[0].offsetWidth + 32; // Ajusta según tu gap real
  const scrollLeft = track.scrollLeft;
  index = Math.round(scrollLeft / cardWidth);
  handleUserInteraction();
});

// Autoplay: cambia de tarjeta cada 3 segundos
function startAutoScroll() {
  stopAutoScroll(); // evita duplicar intervalos
  autoScroll = setInterval(() => {
    index = (index + 1) % cards.length;
    scrollToCard(index);
  }, 3000);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

function handleUserInteraction() {
  if (!userInteracted) {
    userInteracted = true;
    stopAutoScroll();
    resumeTimeout = setTimeout(() => {
      userInteracted = false;
      startAutoScroll();
    }, 8000); // reanuda tras 8s de inactividad
  } else {
    clearTimeout(resumeTimeout); // reinicia temporizador si sigue interactuando
    resumeTimeout = setTimeout(() => {
      userInteracted = false;
      startAutoScroll();
    }, 8000);
  }
}

// Iniciar autoplay al cargar
startAutoScroll();

// Scroll con ratón (drag to scroll en escritorio)
let isDragging = false;
let startX;
let scrollStart;

track?.addEventListener('mousedown', (e) => {
  isDragging = true;
  track.classList.add('dragging');
  startX = e.pageX;
  scrollStart = track.scrollLeft;
});

track?.addEventListener('mouseup', () => {
  isDragging = false;
  track.classList.remove('dragging');
});

track?.addEventListener('mouseleave', () => {
  isDragging = false;
  track.classList.remove('dragging');
});

track?.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = x - startX;
  track.scrollLeft = scrollStart - walk;
});


