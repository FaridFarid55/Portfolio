/*=============== SERVICES MODAL ===============*/
const servicesButtons = document.querySelectorAll('.services__button');
const servicesModals = document.querySelectorAll('.services__modal');
const servicesCloses = document.querySelectorAll('.services__modal-close');

// Open modal by data-modal attribute
servicesButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.querySelector(`.services__modal[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.add('active-modal');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close modal - X button
servicesCloses.forEach((close) => {
  close.addEventListener('click', () => {
    closeAllServicesModals();
  });
});

// Close when clicking outside content
window.addEventListener('click', (e) => {
  servicesModals.forEach((modal) => {
    if (e.target === modal) {
      closeAllServicesModals();
    }
  });
});

// Close with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllServicesModals();
  }
});

function closeAllServicesModals() {
  servicesModals.forEach((modal) => {
    modal.classList.remove('active-modal');
  });
  document.body.style.overflow = '';
}

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);