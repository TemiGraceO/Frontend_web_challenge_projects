/* ----------------- Utility: safe query ----------------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ----------------- Particles (loads config file) ----------------- */
function loadParticles(file = 'particles.json') {
  if (window.particlesJS && file) {
    try {
      particlesJS.load('particles-js', file, () => {
        // console.log('Particles loaded:', file);
      });
    } catch (e) {
      // silently fail if not available
      // console.warn('Particles load failed', e);
    }
  }
}

/* ----------------- Theme toggle (class-based + localStorage) ----------------- */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    $('#icon-sun').style.display = 'none';
    $('#icon-moon').style.display = 'inline';
    loadParticles('darkmode.json'); // optional: ensure you have this file
  } else {
    document.documentElement.classList.remove('dark');
    $('#icon-sun').style.display = 'inline';
    $('#icon-moon').style.display = 'none';
    loadParticles('particles.json');
  }
  localStorage.setItem('site-theme', theme);
}

/* init theme from storage or prefers-color-scheme */
(function initTheme() {
  const saved = localStorage.getItem('site-theme');
  if (saved) applyTheme(saved);
  else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();

/* toggle button */
$('#mode-toggle').addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
});

/* ----------------- Burger menu (mobile) ----------------- */
const burger = $('#burger');
const navLinks = $('#nav-links');
burger.addEventListener('click', (e) => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('show');
});

/* close menu when clicking outside on mobile */
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove('show');
    burger.setAttribute('aria-expanded', 'false');
  }
});

/* ----------------- Typing effect ----------------- */
const words = ["an Engineer.", "an Expert.", "a Leader.", "a Lifelong Learner.", "Proficient.", "Skilled."];
let wIndex = 0, chIndex = 0, deleting = false;
const speed = 120;
function typeTick() {
  const el = $('#typing');
  if (!el) return;
  const word = words[wIndex];
  if (!deleting) {
    chIndex++;
    el.textContent = word.substring(0, chIndex);
    if (chIndex === word.length) {
      deleting = true;
      setTimeout(typeTick, 1400);
      return;
    }
  } else {
    chIndex--;
    el.textContent = word.substring(0, chIndex);
    if (chIndex === 0) {
      deleting = false;
      wIndex = (wIndex + 1) % words.length;
    }
  }
  setTimeout(typeTick, speed);
}
typeTick();

/* ----------------- Contact form submit (Formspree) ----------------- */
const contactForm = $('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = $('#status-msg');
    const data = new FormData(contactForm);
    try {
      const res = await fetch('https://formspree.io/f/xqaynvng', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Message sent! Thanks.';
        contactForm.reset();
      } else {
        status.textContent = 'Submission failed. Please try again.';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try later.';
    }
  });
}

/* ----------------- Experience cards: expand / keyboard accessible ----------------- */
$$('.exp-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('open'));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('open');
    }
  });
});

/* ----------------- Scroll reveal for cards (simple) ----------------- */
function revealOnScroll() {
  $$('.exp-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealOnScroll();
  // initial particles load for current theme
});

/* ------------- safe initial particle load if not yet ---------- */
loadParticles(document.documentElement.classList.contains('dark') ? 'darkmode.json' : 'particles.json');
