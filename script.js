const stickyMenu = document.querySelector('.j-menu-base');
let lastScrollPosition = 0; // To track scroll direction

window.addEventListener('scroll', function() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    stickyMenu.classList.add('hidden');
  } else {
    stickyMenu.classList.remove('hidden');
  }

  lastScrollPosition = currentScrollPosition;
});
