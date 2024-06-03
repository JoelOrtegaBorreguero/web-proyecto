let lastScrollTop = 0;
const menu = document.querySelector('.j-menu-base');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});