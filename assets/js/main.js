// // Shrink Navigation Menu
const getElement = (selector) => {
    return document.querySelector(selector);
  };

window.onscroll = () => {
  scrollHeader();
};

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