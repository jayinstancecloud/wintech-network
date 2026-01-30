// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Dropdown menu functionality (works on all devices)
const gamesButton = document.querySelector('.has-dropdown .nav-button');
const gamesDropdown = document.querySelector('.has-dropdown .dropdown');
const hasDropdown = document.querySelector('.has-dropdown');

if (gamesButton && gamesDropdown && hasDropdown) {
  // Toggle dropdown on button click
  gamesButton.addEventListener('click', (e) => {
    e.stopPropagation();
    gamesDropdown.classList.toggle('open');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!hasDropdown.contains(e.target)) {
      gamesDropdown.classList.remove('open');
    }
  });

  // Prevent dropdown from closing when clicking inside it
  gamesDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});

// Simple contact handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    console.log('Wintech contact form submitted', Object.fromEntries(formData.entries()));
    alert('Thank you for contacting Wintech. Our team will be in touch shortly.');
    contactForm.reset();
  });
}
