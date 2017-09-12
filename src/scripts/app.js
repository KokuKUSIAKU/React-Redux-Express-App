module.exports = window.onload = (function appScript() {
  var d = document;
  var w = window;

  var smallScreenDim = 760;
  var zIndexStep = 2;
  var sliderTransition = 5000; 
  var navbar = d.querySelector( ".navbar" );
  var menuButton = d.querySelector( ".nv-toggle" );
  // controls toggle button behavior and manages the display 
  // of the navbar items on small screens  


  function toggleNavBar() {
    menuButton.classList.toggle( "close-tag" );
    navbar.classList.toggle( "ps-left-zero" );
  }
  
  menuButton.addEventListener( "click", toggleNavBar );
  // style the active nav menu link

  function navbarListerner( e ) {
    var oldMenu = navbar.querySelector( "[aria-current=page]" );
    var newMenu = e.target;
    if ( oldMenu !== newMenu ) {
      let header = document.querySelector( "#listofrecipes" );

      oldMenu.removeAttribute( "aria-current" );
      newMenu.setAttribute( "aria-current", "page" );
      // sub/pub to be adde here instead
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

  navbar.addEventListener( "click", navbarListerner );
  
  /*
  * slider managing 
  */

  /*
  @function InitSlider
  * rotate a list collection of images, required pagination 
  @param { String } slides : a class or id of an undordered list ul container of the slides 
  @param { String } pages: the pagination element corresponding to slides, an unordered list 
  @param { Number } time : a delay between consecutive transition and/or animation
  @return { Object } { start } : start (public) to initialise the slider animation
  */

  function InitSlider( slides, pages, time ) {

    var _slides = Array.from( d.querySelectorAll( "." + slides + ">li" ) );
    var _pages = Array.from( d.querySelectorAll( "." + pages + ">li" ) );
    var zIndex; 
    var ln = _slides.length;
 
    var start = () => setInterval( () => {
      let index = _slides.findIndex( el => el.style.zIndex === "0" );
      RotateZIndex( _slides );
      setActivePage( _pages, index );
    }, time );

    // rotate the slides zindex 
    function RotateZIndex( list ) {
      list.forEach( ( el ) => {
        zIndex = parseInt( el.style.zIndex );
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
  var slider = new InitSlider( "slides", "slider-pages", sliderTransition );
  slider.start();

})();