// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });
}
/* TEAM: basic keyboard focus improvement (optional) */
document.querySelectorAll('.team-social a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault(); // placeholder links
    alert('This link is a placeholder — replace href with actual contact link.');
  });
});

/* BLOGS: nothing needed (cards link to blog pages) */

/* FAQ Accordion */
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isActive = btn.classList.contains('active');

    // close all panels (optional single-open behavior)
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.classList.remove('active');
      if (b.nextElementSibling) b.nextElementSibling.style.maxHeight = null;
    });

    if (!isActive) {
      btn.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      btn.classList.remove('active');
      panel.style.maxHeight = null;
    }
  });
});

/* ensure previously-open panels are sized correctly on load/resize */
window.addEventListener('resize', () => {
  document.querySelectorAll('.accordion-btn.active').forEach(btn => {
    const panel = btn.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + 'px';
  });
});
// Newsletter form handler (placeholder)
document.querySelector('.newsletter-form').addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = e.target.querySelector('input[type="email"]');
  if (emailInput.value.trim() !== '') {
    alert(`Thanks for subscribing, ${emailInput.value}!`);
    emailInput.value = '';
  }
});

// Footer contact form handler (placeholder)
document.querySelector('.footer-contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! We’ll get back to you soon.');
});
