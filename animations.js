var smoothScrolling = $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - $(".cbp-af-header").height()
        }, 750);
        return false;
      }
    }
  });
});
var hideDropdown = $(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        didScroll = false,
        changeHeaderOn = 50;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
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
        }
        else {
          document.getElementById("header").className = "cbp-af-header";
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
