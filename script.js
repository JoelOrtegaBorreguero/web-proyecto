const menuBase = document.querySelector('.j-menu-base');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY; // Get the current scroll position

  if (scrollY > 0) {
    menuBase.classList.add('scrolled');
  } else {
    menuBase.classList.remove('scrolled');
  }
});