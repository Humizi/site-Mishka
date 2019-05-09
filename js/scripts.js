'use strict';

const btnHamburger = document.querySelector(".site-list__button-hamburger");
const itemCatalog = document.querySelector(".site-list__item--catalog");
const itemKnitting = document.querySelector(".site-list__item--knitting");
const itemSearch = document.querySelector(".site-list__item--search");
const itemBasket = document.querySelector(".site-list__item--basket");
const navNojs = document.querySelector(".main-nav--nojs");

const buttonOrder = document.querySelector(".button-order--js");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

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