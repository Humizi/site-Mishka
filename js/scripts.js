let btnHamburger = document.querySelector(".site-list__button-hamburger");
let itemCatalog = document.querySelector(".site-list__item--catalog");
let itemKnitting = document.querySelector(".site-list__item--knitting");
let itemSearch = document.querySelector(".site-list__item--search");
let itemBasket = document.querySelector(".site-list__item--basket");
let navNojs = document.querySelector(".main-nav--nojs");

let buttonOrder = document.querySelector(".button-order--js");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");

navNojs.classList.remove("main-nav--nojs");

btnHamburger.addEventListener('click', () => {

  btnHamburger.classList.toggle("site-list__button-hamburger--close");
  itemCatalog.classList.toggle("site-list__item--hidden");
  itemKnitting.classList.toggle("site-list__item--hidden");
  itemSearch.classList.toggle("site-list__item--hidden");
  itemBasket.classList.toggle("site-list__item--hidden");

});

buttonOrder.addEventListener('click', ()=> {
  overlay.classList.add("overlay--on");
  modal.classList.add("modal--on");
});


overlay.addEventListener('click', ()=> {

  overlay.classList.remove("overlay--on");
  modal.classList.remove("modal--on");
});