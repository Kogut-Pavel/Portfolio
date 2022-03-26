const wow = require('wow.js');

window.wow = new wow();
window.wow.init();

const btnMore = document.getElementById('btn-more');
const text = document.getElementById('text');
const btnMoreIcon = document.querySelector('.btn--more-icon');
const portfolioCardHidden = document.querySelectorAll('.portfolio__card--hidden');

btnMore.addEventListener('click', () => {
   if (btnMoreIcon.classList.contains('load-more')) {

      addRotateIcon('load-more', 'load-more-back');
      timeout('Показать еще', -90);
      showHiddenCards();
   } else {

      addRotateIcon('load-more-back', 'load-more');
      timeout('Скрыть', 90);
      showHiddenCards();
   }

});

function addRotateIcon(more, back) {
   btnMoreIcon.classList.remove(more);
   btnMoreIcon.classList.add(back);
}

function timeout(content, degNumber) {
   setTimeout(function () {
      text.textContent = content;
      btnMoreIcon.style.transform = `rotate(${degNumber}deg)`;
   }, 1000);
}

function showHiddenCards() {
   portfolioCardHidden.forEach(item => {
      item.classList.toggle('portfolio__card--hidden');
   })
}

