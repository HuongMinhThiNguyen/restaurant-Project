$(document).ready(function() {
    // grab the initial top offset of the navigation 
    var stickyNavTop = $('.sticky_navbar').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('.sticky_navbar').addClass('sticky');
            $('.sticky_navbar .logo img').attr('src', './images/main_logo_black.png');

        } else {
            $('.sticky_navbar').removeClass('sticky');
            $('.sticky_navbar .logo img').attr('src', './images/main_logo.png');
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
    // SELECT CONTROL BUTTONS IN SECTION MENU
    var mixer = mixitup('.mix-container');

    // PLUGGIN WOW LIBRARY

});
new WOW().init();