const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.header__nav__links');

// Toggle active state and show/hide navigation links
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the 'show' class to display links
  hamburger.classList.toggle('active'); // Toggle the 'active' class for the hamburger
});

// Optional: Close the menu if clicked outside
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('show'); // Hide links when clicking outside
    hamburger.classList.remove('active'); // Remove active state when clicking outside
  }
});
