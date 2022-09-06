const navBtn = document.querySelector('#nav-button');
const closeNav = document.querySelector('#close-navlist');
const navList = document.querySelector('#nav-list');
const navListItems = document.querySelectorAll('#nav-list > ul > li');
navBtn.addEventListener('click', () => {
  navList.classList.remove('hide');
  navList.classList.add('mobile-menu');
});

closeNav.addEventListener('click', () => {
  navList.classList.add('hide');
  navList.classList.remove('mobile-menu');
});

navListItems.forEach((item) => item.addEventListener('click', () => {
  navList.classList.add('hide');
  navList.classList.remove('mobile-menu');
}));
