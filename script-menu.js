const menuBase = document.querySelector('.j-menu-base');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      menuBase.classList.remove('hidden');
    } else {
      menuBase.classList.add('hidden');
    }
  });
}, {
  root: null,
  threshold: 0,
});

observer.observe(menuBase);