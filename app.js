/**
 * LEON HOME — Architectural Editorial Platform Master Script
 * Interactive Featured Projects Carousel, Smooth Navigation, Keyboard Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectCarousel();
  initSmoothScroll();
  initNavStates();
});

/**
 * Featured Projects Carousel Interaction
 * Center card is large (50% width), fully opaque (.is-center)
 * Side cards are smaller, cropped, and faded (.is-side)
 */
function initProjectCarousel() {
  const cards = Array.from(document.querySelectorAll('.carousel-card'));
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!cards.length || !prevBtn || !nextBtn) return;

  let activeIndex = 1; // Center card (Modern Family Home) is index 1

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove('is-center', 'is-side');
      if (index === activeIndex) {
        card.classList.add('is-center');
        card.setAttribute('aria-hidden', 'false');
        card.removeAttribute('tabindex');
      } else {
        card.classList.add('is-side');
        card.setAttribute('aria-hidden', 'true');
        card.setAttribute('tabindex', '0');
      }
    });
  }

  // Next / Previous Click
  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % cards.length;
    updateCarousel();
  });

  // Direct Click on Side Cards to bring into Center
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (index !== activeIndex) {
        activeIndex = index;
        updateCarousel();
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (index !== activeIndex) {
          e.preventDefault();
          activeIndex = index;
          updateCarousel();
        }
      }
    });
  });

  // Keyboard navigation for buttons
  prevBtn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      activeIndex = (activeIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      activeIndex = (activeIndex + 1) % cards.length;
      updateCarousel();
    }
  });

  updateCarousel();
}

/**
 * Smooth keyboard-accessible anchor scrolling
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          targetElement.focus({ preventScroll: true });
        }
      }
    });
  });
}

/**
 * Active navigation pill state switching
 */
function initNavStates() {
  const navPills = document.querySelectorAll('.nav-links-cluster .nav-pill');
  if (!navPills.length) return;

  navPills.forEach(pill => {
    pill.addEventListener('click', () => {
      navPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
    });
  });
}
