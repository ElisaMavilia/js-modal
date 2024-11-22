'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

/* const openModal = function(){
    for (let i = 0; i < btnsOpenModal.length; i++)
        btnsOpenModal[i].addEventListener('click', function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        });
}

openModal();

const closeModal = function(event){
    event.addEventListener('click', function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
}

// remove the modal by clicking on the x button
closeModal(btnCloseModal);

// remove the modal by clicking on the overlay
closeModal(overlay);
 */

//  OR

const openModal = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    });

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Adding a keypress escape 
    document.addEventListener('keydown', function(e) {
        //console.log('a key was pressed'); 
        //console.log(e.key);
        if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            //console.log('Escape was pressed');
            closeModal();
        }     
    })


