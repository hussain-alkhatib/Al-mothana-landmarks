
$(function () {
    "use strict";
    // حساب ارتفاع السلايدر

    var winH = $(window).height(),

        navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - (navH * 3.4))
});