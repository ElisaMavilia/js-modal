'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    });

const removeModal = function(event){
    event.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
}
removeModal(btnCloseModal);

// remove the modal by clicking on the overlay
removeModal(overlay);