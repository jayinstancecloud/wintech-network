// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // allow tapping Games to show dropdown on mobile
  const gamesButton = navMenu.querySelector('.has-dropdown .nav-button');
  const gamesDropdown = navMenu.querySelector('.has-dropdown .dropdown');
  if (gamesButton && gamesDropdown) {
    gamesButton.addEventListener('click', (e) => {
      // prevent smooth-scroll logic
      e.stopPropagation();
      gamesDropdown.style.display = gamesDropdown.style.display === 'grid' ? 'none' : 'grid';
    });
  }
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
