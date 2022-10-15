
(function($) {
    "use strict"; 

    // $( '.hamburger-menu' ).on( 'click', function()
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.main-nav').toggleClass('show');
    });    
    

})(jQuery);


