let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let map = document.querySelector('.contacts__wrapper-map');

map.classList.remove('contacts__wrapper-map--nojs');

let headerWrap = document.querySelector('.main-header__wrap');

headerWrap.classList.remove('main-header__wrap--nojs');
