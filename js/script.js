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
    let popupWindow = document.createElement('div');
    popupWindow.classList.add('popup-window');
    popupWindow.innerHTML = `<div><a id="close-popup"><img src="./img/close-navlist.png" alt="Close Button"></a>
    <h2 class="card-header">${project.name}</h2>
    <ul class="card-badges padding-reset margin-reset"></ul>`;
    for (item of project.techs) {
        popupWindow.querySelector('ul').innerHTML += '<li>' + item + '</li>';
    };
    popupWindow.querySelector('div').innerHTML += `<img src="${project.imgSrc}" alt="The project preview">
    <p class='card-desc'>${project.desc}</p>
    <div><a class="card-button" href="${project.liveUrl}">See Live <img src="./img/icon-export.png"></a>
    <a class="card-button" href="${project.srcUrl}">See Source <img src="./img/Icon-Github.png"></a></div>`;
    document.body.appendChild(popupWindow);
    let closePopup = document.querySelector('#close-popup');
    closePopup.addEventListener('click', function() {
        popupWindow.remove();
    })
};

function createProjectCard(project, isItLast) {
    let newCard = document.createElement('div');

    if (isItLast === 1) {
        newCard.innerHTML += `<img src="${project.imgSrc}" alt="The Project Preview"></img>`;
        newCard.id = 'last-work';
        newCard.innerHTML += `<div class="card-body">
      <h2 class='card-header'>${project.name}</h2>
      <p class='card-desc'>${project.desc}</p>
      <ul class='card-badges padding-reset margin-reset'>`;
        for (item of project.techs) {
            newCard.querySelector('ul').innerHTML += '<li>' + item + '</li>';
        };
        newCard.querySelector('.card-body').innerHTML += `<a class='card-button'>See Project</a></div>`;
        document.querySelector('#works').appendChild(newCard);
    } else {
        newCard.classList.add('work');
        newCard.innerHTML += `<div>
      <h2 class='card-header'>${project.name}</h2>
      <p class='card-desc'>${project.desc}</p>
      <ul class='card-badges padding-reset margin-reset'>`;
        for (item of project.techs) {
            newCard.querySelector('ul').innerHTML += '<li>' + item + '</li>';
        };
        newCard.innerHTML += `<a class='card-button'>See Project</a></div>`;
        newCard.style.background = `url('${project.imgSrc}') no-repeat`;
        document.querySelector('#works').appendChild(newCard);
    }
    let popupBtn = newCard.querySelector('a');
    popupBtn.addEventListener('click', function() {
        createPopupWindow(project);
    });
};

const project1 = {
    name: 'Multi-Post Stories',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    imgSrc: './img/Img-placeholder.jpg',
    techs: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    liveUrl: '#',
    srcUrl: '#'
};

const project2 = {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    imgSrc: './img/card-background1.jpg',
    techs: ['Html', 'Bootstrap', 'Ruby'],
    liveVerLink: '#',
    srcLink: '#'
};

const project3 = {
    name: 'Data Dashboard Healthcare',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    imgSrc: './img/card-background2.jpg',
    techs: ['Html', 'Bootstrap', 'Ruby'],
    liveVerLink: '#',
    srcLink: '#'
};

const project4 = {
    name: 'Website Protfolio',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    imgSrc: './img/card-background1.jpg',
    techs: ['Html', 'Bootstrap', 'Ruby'],
    liveVerLink: '#',
    srcLink: '#'
};

const project5 = {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    imgSrc: './img/card-background1.jpg',
    techs: ['Html', 'Bootstrap', 'Ruby'],
    liveVerLink: '#',
    srcLink: '#'
};

const project6 = {
    name: 'Data Dashboard Healthcare',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    imgSrc: './img/card-background2.jpg',
    techs: ['Html', 'Bootstrap', 'Ruby'],
    liveVerLink: '#',
    srcLink: '#'
};

const project7 = {
    name: 'Website Protfolio',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    imgSrc: './img/card-background1.jpg',
    techs: ['Html', 'Bootstrap', 'Ruby'],
    liveVerLink: '#',
    srcLink: '#'
};

createProjectCard(project1, 1);

const projects = [project2, project3, project4, project5, project6, project7];

projects.forEach((project) => {
    createProjectCard(project);
});