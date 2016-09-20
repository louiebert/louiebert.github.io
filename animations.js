var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        didScroll = false,
        changeHeaderOn = 50;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if(!didScroll) {
                didScroll = true;
                setTimeout( scrollPage, 50 );
            }
        }, false );
    }

    function scrollPage() {
      changeHeaderOn = document.getElementById("titleName").getBoundingClientRect().top;
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
          document.getElementById("header").className = "cbp-af-header cbp-af-header-shrink";
        } else {
          document.getElementById("header").className = "cbp-af-header";
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();