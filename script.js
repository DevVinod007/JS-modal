"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosemodal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  console.log(btnOpenModal[i].addEventListener("click", openModal));

btnClosemodal.addEventListener("click", closemodal);

overlay.addEventListener("click", closemodal);

document.addEventListener('keydown',function(e){
   console.log('A key was pressed',e.key)
   if(e.key ==='Escape' && !modal.classList.contains('hidden')){
      // if(!modal.classList.contains('hidden')){
        closemodal()
      // }
     }
   }
)
