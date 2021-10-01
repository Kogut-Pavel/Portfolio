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

// Smooth scrolliing

const smoothScrolling = (scrollLink) => {
    const scrollLinks = document.querySelectorAll(scrollLink);
    
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener('click', event => {
        event.preventDefault();
        const id = scrollLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          });
      });
    }

    let arrowUp = document.querySelector('.up');
    const clientHeight = document.documentElement.clientHeight;
    arrowUp.style.display = 'none';

    if (document.documentElement.clientWidth < 1439) {
        arrowUp.style.display = 'none';
    } else {
        arrowUp.addEventListener('click', () => {
            document.querySelector('body').scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          });
          
          window.addEventListener('scroll', () => {
            if (document.body.scrollTop > clientHeight || document.documentElement.scrollTop > clientHeight) {
              arrowUp.style.display = 'block';
            } else {
              arrowUp.style.display = 'none';
            } 
          });
    }
  };

  smoothScrolling('li>a');

  // Carousel in resume

  
  $('.carousel__inner').slick({
      speed: 800,
      dotsClass: 'slick-dots',
      dots: true,
      arrows: false,
      autoplay: true,
      adaptiveHeight: false,
      autoplaySpeed: 3000,
  });

