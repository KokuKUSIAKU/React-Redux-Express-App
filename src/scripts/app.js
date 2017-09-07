module.exports = window.onload = (function appScript() {
  // general global variables
  var d = document;
  var w = window;

  // custom variables
  var smallScreenDim = 760;
  var zIndexStep = 2;
  var sliderTransition = 5000; 
  var navbar = d.querySelector( ".navbar" );

  // controls toggle button behavior and manages the display 
  // of the navbar items on small screens  
  var menuButton = d.querySelector( ".nv-toggle" );
  menuButton.addEventListener( "click", toggleNavBar );

  function toggleNavBar() {
    menuButton.classList.toggle( "close-tag" );
    navbar.classList.toggle( "ps-left-zero" );
  }

  // style the active nav menu link
  //var navbarLinks = Array.from(navbar.querySelectorAll(".menuItem"));
  navbar.addEventListener( "click", navbarListerner );

  function navbarListerner( e ) {
    var oldMenu = navbar.querySelector( "[aria-current=page]" );
    var newMenu = e.target;
    if ( oldMenu !== newMenu ) {
      oldMenu.removeAttribute( "aria-current" );
      newMenu.setAttribute( "aria-current", "page" );
      // need to understand why, it looks like querySelector behaves asynchronously 
      // var main = document.querySelector("#main"); works well and give the right 
      // main content when recipelist is mounted the first time 
      // but impossible to get h2= document.createElement("section"); or with h2 or any 
      // other child works !! build an example for help on stact overflow 

      //var main = document.querySelector("#main");
      // which one is faster, getting h2 from the document or from main that has been selected already
      var header = document.querySelector( "#listofrecipes" );
      if ( header ) {
        header.focus();
      }
    }
    // close the navbar on small screen when a na item has been selected 
    if ( w.innerWidth <= smallScreenDim ) {
      menuButton.classList.toggle( "close-tag" );
      navbar.classList.toggle( "ps-left-zero" );
    }
  }

  /*
  * slider managing 
  */
  //var slider = new InitSlider( "slides", "slider-pages", sliderTransition );
  //slider.start();

  /*
  @function InitSlider
  * rotate a list collection of images, required pagination 
  @param { String } slides : a class or id of an undordered list ul container of the slides 
  @param { String } pages: the pagination element corresponding to slides, an unordered list 
  @param { Number } time : a delay between consecutive transition and/or animation
  @return none:
  */

  function InitSlider( slides, pages, time ) {
    var _slides = Array.from( d.querySelectorAll("." + slides + ">li") );
    var _pages = Array.from( d.querySelectorAll("." + pages + ">li") );
    var zIndex; 
    var ln = _slides.length;
    // simple version now, to be optimised
    // could of course use a third code or library !!!  
    // Full accessibility standard not acheived yet ! 
    // need to handle focuseIn, focuseOut, next & prev button and hovering interaction. 
    var start = () => setInterval( () => {
      RotateZIndex( _slides );
      let index = _slides.findIndex( el => el.style.zIndex === "0" );
      setActivePage( _pages, index );
    }, time);

    // rotate the slides zindex 
    function RotateZIndex( list ) {
      list.forEach( ( el ) => {
        zIndex = parseInt(el.style.zIndex);
        el.style.zIndex = zIndex ? zIndex + zIndexStep : -zIndexStep * (ln - 1);
      } );
    }

    // set active class on slide page 
    function setActivePage( pages, index ) {
      pages.forEach( page => page.classList.remove( "active" ) );
      pages[index].classList.add( "active" );
    }
    return {
      start
    };
  }


})();