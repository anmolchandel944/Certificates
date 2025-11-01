 // Scroll Animation
const cards = document.querySelectorAll('.cert-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 250);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

cards.forEach(card => observer.observe(card));

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');

function openModal(card) {
  const img = card.querySelector('img');
  const title = card.querySelector('h3').textContent;
  const desc = card.querySelector('p').textContent;

  modal.classList.add('active');
  modalImg.src = img.src;
  caption.innerHTML = `<strong>${title}</strong><br><small>${desc}</small>`;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  setTimeout(() => {
    modalImg.src = '';
  }, 300);
  document.body.style.overflow = 'auto';
}

// Close with ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});







// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();



