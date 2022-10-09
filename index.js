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

function createPopupWindow(project) {
  const popupWindow = document.createElement('div');
  popupWindow.classList.add('popup-window');
  popupWindow.innerHTML = `<div>
    <a id="close-popup"><img src="./img/close-navlist.png" alt="Close Button"></a>
    <h2 class="card-header">${project.name}</h2>
    <ul class="card-badges"></ul>`;
  project.techs.forEach((item) => {
    popupWindow.querySelector('ul').innerHTML += `<li>${item}</li>`;
  });
  popupWindow.querySelector('div').innerHTML += `
    <div class="img-placeholder"><img src="${project.imgSrc}" alt="The project preview"></div>
    <p class='card-desc'>${project.desc}</p>
    <div class="btns-container">
      <a class="card-button" href="${project.liveUrl}" target="_blank">See Live <i class="material-symbols-outlined">arrow_outward</i></a>
      <a class="card-button" href="${project.srcUrl}" target="_blank">See Source <i class="devicon-github-original"></i></a>
    </div>`;
  document.body.appendChild(popupWindow);
  document.querySelector('html').style.overflow = 'hidden';
  const closePopup = document.querySelector('#close-popup');
  closePopup.addEventListener('click', () => {
    popupWindow.remove();
    document.querySelector('html').style.overflow = 'auto';
  });
}

function createProjectCard(project, isItLast) {
  const newCard = document.createElement('div');

  if (isItLast === 1) {
    newCard.innerHTML += `<img src="${project.imgSrc}" alt="The Project Preview"></img>`;
    newCard.id = 'last-work';
    newCard.innerHTML += `<div class="card-body">
      <h2 class='card-header'>${project.name}</h2>
      <p class='card-desc'>${project.desc}</p>
      <ul class='card-badges'>`;
    project.techs.forEach((item) => {
      newCard.querySelector('ul').innerHTML += `<li>${item}</li>`;
    });
    newCard.querySelector('.card-body').innerHTML += '<a class=\'card-button\'>See Project</a></div>';
    document.querySelector('#works').appendChild(newCard);
  } else {
    newCard.classList.add('work');
    newCard.innerHTML += `
      <div>
        <h2 class='card-header'>${project.name}</h2>
        <p class='card-desc'>${project.desc}</p>
        <ul class='card-badges'>`;
    project.techs.forEach((item) => {
      newCard.querySelector('ul').innerHTML += `<li>${item}</li>`;
    });
    newCard.innerHTML += '<a class="card-button">See Project</a></div>';
    newCard.style.background = `url('${project.imgSrc}') no-repeat`;
    document.querySelector('#works').appendChild(newCard);
  }
  const popupBtn = newCard.querySelector('a');
  popupBtn.addEventListener('click', () => {
    createPopupWindow(project);
  });
}

const firstProject = {
  name: 'To Do List',
  desc: 'Simple Tool built with JavaScript and bundled with Webpack, that helps organize your day. It simply lists the things that you need to do and allows you to mark them as complete and also remove or add new tasks to the list.',
  imgSrc: './img/to-do-list.png',
  techs: ['CSS', 'HTML', 'JavaScript', 'Webpack'],
  liveUrl: 'https://ouasamine.github.io/to-do-list/',
  srcUrl: 'https://github.com/ouasamine/to-do-list',
};

const projects = [
  {
    name: 'COP22 Marrakech 2016 summit',
    desc: 'A 2 pages Website Containing Some Informations About The Global Climate Conference COP22 Held in Marrakech 2016. The website was built using plain HTML 5, CSS 3 and JavaScript.',
    imgSrc: './img/cop22.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://ouasamine.github.io/cop22-conference/',
    srcUrl: 'https://github.com/ouasamine/cop22-conference',
  },
  {
    name: 'To Do List',
    desc: 'Simple Tool built with JavaScript and bundled with Webpack, that helps organize your day. It simply lists the things that you need to do and allows you to mark them as complete and also remove or add new tasks to the list.',
    imgSrc: './img/to-do-list.png',
    techs: ['CSS', 'HTML', 'JavaScript', 'Webpack'],
    liveUrl: 'https://ouasamine.github.io/to-do-list/',
    srcUrl: 'https://github.com/ouasamine/to-do-list',
  },
  {
    name: 'COP22 Marrakech 2016 summit',
    desc: 'A 2 pages Website Containing Some Informations About The Global Climate Conference COP22 Held in Marrakech 2016. The website was built using plain HTML 5, CSS 3 and JavaScript.',
    imgSrc: './img/cop22.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://ouasamine.github.io/cop22-conference/',
    srcUrl: 'https://github.com/ouasamine/cop22-conference',
  },
  {
    name: 'To Do List',
    desc: 'Simple Tool built with JavaScript and bundled with Webpack, that helps organize your day. It simply lists the things that you need to do and allows you to mark them as complete and also remove or add new tasks to the list.',
    imgSrc: './img/to-do-list.png',
    techs: ['CSS', 'HTML', 'JavaScript', 'Webpack'],
    liveUrl: 'https://ouasamine.github.io/to-do-list/',
    srcUrl: 'https://github.com/ouasamine/to-do-list',
  },
  {
    name: 'COP22 Marrakech 2016 summit',
    desc: 'A 2 pages Website Containing Some Informations About The Global Climate Conference COP22 Held in Marrakech 2016. The website was built using plain HTML 5, CSS 3 and JavaScript.',
    imgSrc: './img/cop22.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://ouasamine.github.io/cop22-conference/',
    srcUrl: 'https://github.com/ouasamine/cop22-conference',
  },
  {
    name: 'To Do List',
    desc: 'Simple Tool built with JavaScript and bundled with Webpack, that helps organize your day. It simply lists the things that you need to do and allows you to mark them as complete and also remove or add new tasks to the list.',
    imgSrc: './img/to-do-list.png',
    techs: ['CSS', 'HTML', 'JavaScript', 'Webpack'],
    liveUrl: 'https://ouasamine.github.io/to-do-list/',
    srcUrl: 'https://github.com/ouasamine/to-do-list',
  },
];

createProjectCard(firstProject, 1);

projects.forEach((project) => {
  createProjectCard(project);
});
const form = document.querySelector('#contact-form');
const { email } = form.elements;
const fullName = form.elements.full_name;
const msg = form.elements.message;
const msgContainer = document.querySelector('.msg-container');
const pattern = /[A-Z]/;
const invalidEmail = 'Please make sure that all characters in your email are lowercase!';

function showMsg(msg, container) {
  container.innerHTML = msg;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (pattern.test(email.value) === true) {
    showMsg(invalidEmail, msgContainer);
  } else {
    form.submit();
  }
});

const Data = {
  name: '',
  email: '',
  message: '',
};

const storedData = window.localStorage.getItem('Data');
const parsedData = JSON.parse(storedData);

form.addEventListener('change', () => {
  Data.email = email.value;
  Data.name = fullName.value;
  Data.message = msg.value;
  const strngData = JSON.stringify(Data);
  window.localStorage.setItem('Data', strngData);
});

if (storedData !== null) {
  email.value = parsedData.email;
  fullName.value = parsedData.name;
  msg.value = parsedData.message;
}