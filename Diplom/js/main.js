const burger = document.querySelector('.burger');
const body = document.body;
const nav = document.querySelector('.header__nav');

if (burger && nav) {
  // клик по бургеру — переключаем меню
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    const opened = body.classList.toggle('body--opened-menu');
    burger.classList.toggle('active', opened);
    burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  // клик по ссылке в меню — закрываем
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      body.classList.remove('body--opened-menu');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
    // клик по фону (самому nav, а не по ссылке) — тоже закрыть
    if (e.target === nav) {
      body.classList.remove('body--opened-menu');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Esc — закрыть меню
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('body--opened-menu')) {
      body.classList.remove('body--opened-menu');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}
