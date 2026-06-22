// Mark that
//  JavaScript is running, which switches on the reveal styles.
/*document.documentElement.classList.add('js-enabled');

// Collect the elements we need to work with.
const revealSections = document.querySelectorAll('main section:not(#hero)');
const allSections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav__links a');

// --- 1. Fade each section in as it scrolls into view ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealSections.forEach((section) => revealObserver.observe(section));

// --- 2. Highlight the nav link for the section at screen center ---
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

allSections.forEach((section) => navObserver.observe(section)); */

// --- Projects dropdown ---
const dropdown = document.querySelector('.nav__item--dropdown');
if (dropdown) {
  const toggle = dropdown.querySelector('.nav__dropdown-toggle');
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
}