/**
 * Leon Home - Luxury Construction & Real Estate
 * Interactive Features & Carousel Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroParallax();
  initStatsCounter();
  initCarousel();
  initNavigation();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Carousel Engine (3-Card Active/Flanking Slider)
   -------------------------------------------------------------------------- */
const projectsData = [
  {
    id: 0,
    title: "Sunset Modern Villa",
    price: "$1,620,00",
    image: "assets/proj_left_exact.jpg",
    badge: "Available Property",
    description: "Serene architectural marvel with sweeping ocean sunset panoramas."
  },
  {
    id: 1,
    title: "Modern Family Home",
    price: "$4,500,00",
    image: "assets/proj_center_exact.jpg",
    badge: "Available Property",
    description: "Award-winning mountain stone & timber residence with private infinity pool."
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa",
    price: "$2,850,00",
    image: "assets/proj_right_exact.jpg",
    badge: "Available Property",
    description: "Ultra-contemporary beachfront estate with private coastal access."
  }
];

let activeIndex = 1; // Default: Modern Family Home in center

function initCarousel() {
  const track = document.getElementById('projectsCarouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track || !dotsContainer) return;

  // Render dots
  dotsContainer.innerHTML = '';
  projectsData.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${idx === activeIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => {
      setActiveSlide(idx);
    });
    dotsContainer.appendChild(dot);
  });

  function updateCarouselView() {
    const cards = track.querySelectorAll('.carousel-card');
    cards.forEach((card) => {
      const cardIdx = parseInt(card.dataset.index, 10);
      card.classList.remove('is-active', 'is-flanking', 'is-left', 'is-right');

      if (cardIdx === activeIndex) {
        card.classList.add('is-active');
      } else {
        card.classList.add('is-flanking');
        if ((cardIdx === 0 && activeIndex === 1) || (cardIdx === 1 && activeIndex === 2) || (cardIdx === 0 && activeIndex === 2)) {
          card.classList.add('is-left');
        } else {
          card.classList.add('is-right');
        }
      }
    });

    // Update dots
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  function setActiveSlide(newIdx) {
    if (newIdx < 0) {
      activeIndex = projectsData.length - 1;
    } else if (newIdx >= projectsData.length) {
      activeIndex = 0;
    } else {
      activeIndex = newIdx;
    }
    updateCarouselView();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      setActiveSlide(activeIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      setActiveSlide(activeIndex + 1);
    });
  }

  // Allow clicking on any flanking card to bring it to center
  const cards = track.querySelectorAll('.carousel-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const cardIdx = parseInt(card.dataset.index, 10);
      if (cardIdx !== activeIndex) {
        setActiveSlide(cardIdx);
      }
    });
  });

  // Keyboard navigation
  track.parentElement.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      setActiveSlide(activeIndex - 1);
    } else if (e.key === 'ArrowRight') {
      setActiveSlide(activeIndex + 1);
    }
  });

  // Touch Swipe
  let startX = 0;
  let endX = 0;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveSlide(activeIndex + 1);
      } else {
        setActiveSlide(activeIndex - 1);
      }
    }
  }, { passive: true });

  updateCarouselView();
}

/* --------------------------------------------------------------------------
   2. Interactive Navigation States
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-pill-cluster .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Phone Call CTA
  const phoneBtn = document.querySelector('.nav-phone-pill');
  if (phoneBtn) {
    phoneBtn.addEventListener('click', (e) => {
      const phone = phoneBtn.getAttribute('data-phone') || "+02 390.548.008";
      navigator.clipboard?.writeText(phone.replace(/\s/g, ''));
      const originalText = phoneBtn.innerHTML;
      phoneBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        <span>Copied!</span>
      `;
      setTimeout(() => {
        phoneBtn.innerHTML = originalText;
      }, 2000);
    });
  }
}

/* --------------------------------------------------------------------------
   3. Animated Stat Counters
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = stat.innerText;
          if (target.includes('5.9K+')) {
            animateNumber(stat, 0, 5.9, 1000, 'K+');
          } else if (target.includes('10K+')) {
            animateNumber(stat, 0, 10, 1000, 'K+');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, duration, suffix = '') {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuad = 1 - (1 - progress) * (1 - progress);
    const currentVal = (start + (end - start) * easeOutQuad).toFixed(end % 1 === 0 ? 0 : 1);
    element.innerText = `${currentVal}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

/* --------------------------------------------------------------------------
   4. Smooth Scroll for Primary CTAs
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const discoverBtn = document.querySelector('.btn-discover-pill');
  if (discoverBtn) {
    discoverBtn.addEventListener('click', () => {
      const target = document.getElementById('valueProposition');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const aboutBtn = document.querySelector('.btn-dark-pill');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('teamSection');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const viewAllBtn = document.querySelector('.btn-white-pill');
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('featuredProjects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* --------------------------------------------------------------------------
   5. Subtle Subtle Gyroscopic / Mouse Parallax on Hero Container
   -------------------------------------------------------------------------- */
function initHeroParallax() {
  const hero = document.querySelector('.hero-container');
  const title = document.querySelector('.hero-brand-title');
  if (!hero || !title || window.innerWidth < 1024) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    title.style.transform = `translate(${x * 8}px, ${y * 6}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    title.style.transform = 'translate(0px, 0px)';
  });
}
