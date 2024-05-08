// // Shrink Navigation Menu
const getElement = (selector) => {
  return document.querySelector(selector);
};

window.onscroll = () => {
  scrollHeader();
  scrollFunctionBackToTop();
};

// BACK TO TOP
function scrollFunctionBackToTop() {
  let backToTop = document.querySelector('#backToTop');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
}

const scrollHeader = () => {
  if (document.documentElement.scrollTop > 10) {
    getElement("#header").classList.add('header__active');
    getElement("#header .container").classList.remove('py-3');
  } else {
    getElement("#header").classList.remove('header__active');
    getElement("#header .container").classList.add('py-3');
  }
};

// BUTTON SEARCH
let btnSearch = document.getElementById('btnSearch');
let btnCloseSearch = document.getElementById('btnCloseSearch');
let searchContainer = document.getElementById('search__container');

btnSearch.onclick = function () {
  searchContainer.style.display = 'flex';
}

btnCloseSearch.onclick = function () {
  searchContainer.style.display = 'none';
}

// BUTTON DARK MODE
let btnDarkMode = document.querySelector('#btnDarkMode');
let bodyDark = document.querySelector('body');

btnDarkMode.addEventListener('click', () => {
  bodyDark.classList.toggle('darkMode');
});

// BTN OPEN MENU
let btnMenu = document.querySelector('#btnMenu');
let header = document.querySelector('header');

btnMenu.onclick = () => {
  header.classList.toggle('headerBG');
};


