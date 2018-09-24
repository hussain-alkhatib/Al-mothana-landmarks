
$(function () {
    "use strict";
    // حساب ارتفاع السلايدر

    var winH = $(window).height(),

        navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - (navH * 3.4))

 
});

   // use fittext

   $(".our-head").fitText(1.9, {
       minFontSize: "20px",
       maxFontSize: "22px"
   });