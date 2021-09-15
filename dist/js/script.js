'use strict';

// menu-hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
    hamburger.classList.add('active');
});

document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.menu__close') || target.closest('.menu__overlay')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// percent progress bar

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});