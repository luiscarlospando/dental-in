// Navbar
$(function () {
$(document).scroll(function () {
    var $nav = $(".navbar-default");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// Flexslider
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        touch: true
    });
});