'use strict';
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');

const overlay = document.querySelector('.overlay');

const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');

const btnsOpenModal1 = document.querySelector('.show-modal1');
const btnsOpenModal2 = document.querySelector('.show-modal2');
const btnsOpenModal3 = document.querySelector('.show-modal3');



// open modal
const openModal = function (modal) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
// close modal
const closeModal = function (modal) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
// open modal btn
btnsOpenModal1.addEventListener('click',() => openModal(modal1));
btnsOpenModal2.addEventListener('click',() => openModal(modal2));
btnsOpenModal3.addEventListener('click',() => openModal(modal3));

// close modal
btnCloseModal1.addEventListener('click',() => closeModal(modal1));
btnCloseModal2.addEventListener('click',() => closeModal(modal2));
btnCloseModal3.addEventListener('click',() => closeModal(modal3));

