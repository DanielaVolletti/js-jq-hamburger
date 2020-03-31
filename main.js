/*
Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
primo click, appare il menù;
se cliccko che è già visibile, invece scompare.
*/

// creo variabili di appoggio
var iconaHamburger = $(".fa-bars");
var menuHamburger = $(".hamburger-menu");
var close = $(".close");

// quando clicco sul menu hamburger, appare il menu
iconaHamburger.click(
  function() {
    menuHamburger.fadeIn();
  }
);

// quando clicco sulla x, chiudo il menu
close.click(
  function() {
    menuHamburger.fadeOut();
  }
);
