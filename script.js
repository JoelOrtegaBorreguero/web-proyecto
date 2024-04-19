const menuBase = document.querySelector('.j-menu-base');
let lastScrollDirection = null;

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const newScrollDirection = scrollY > lastScrollDirection ? 'down' : 'up';

  if (newScrollDirection === 'down' && !menuBase.classList.contains('hidden')) {
    menuBase.classList.add('hidden');
  } else if (newScrollDirection === 'up' && menuBase.classList.contains('hidden')) {
    menuBase.classList.remove('hidden');
  }

  lastScrollDirection = scrollY;
});