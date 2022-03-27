let button = document.querySelector('.header_button');

/*button_header*/

button.addEventListener('click' , (evt)=> {
    window.location.href = "https://github.com/Rostisla8?tab=repositories";
    window.open(evt.target.href, '_blank');
})

'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();


/********************** Mobile Menu ***********************/
