'use strict';

const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navButton.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navButton.classList.toggle('nav-button-close');
});


document.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);
    if (target !== mobileNav) {
        mobileNav.classList.remove('mobile-nav-active');
        navButton.classList.remove('nav-button-close');
    }
});

