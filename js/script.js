'use strict';
//Слайдер
let sliders = document.querySelectorAll('.slide');
let sliderBtns = document.querySelectorAll('.slider__btn');

for (let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].onclick = function () {
    for (let j = 0; j < sliderBtns.length; j++) {
      if (i === j) {
        sliderBtns[j].classList.add('current');
        sliders[j].classList.add('slide-current');
      } else {
        sliderBtns[j].classList.remove('current');
        sliders[j].classList.remove('slide-current');
      }
    }
  }
}

//Открытие/закрытие модального окна
let modalClose = document.querySelector('.modal-close');
let contactsBtn = document.querySelector('.contacts-btn');
let modal = document.querySelector('.modal');

contactsBtn.onclick = function () {
  modal.classList.add('modal-current');
}

modalClose.onclick = function () {
  modal.classList.remove('modal-current');
}


