const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.header__nav__links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the 'show' class to show/hide links
  hamburger.classList.toggle('active'); // Toggle the 'active' class for the hamburger
});

// Optional: Click outside the menu to close it
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('show'); // Hide links if clicked outside
    hamburger.classList.remove('active'); // Remove active state
  }
});



