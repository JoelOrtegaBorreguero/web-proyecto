const menu = document.querySelector('.j-menu-base');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    menu.classList.remove('hidden'); // Show menu on scroll up
  } else {
    menu.classList.add('hidden'); // Hide menu on scroll down
  }
  prevScrollPos = currentScrollPos;
};