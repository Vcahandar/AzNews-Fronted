

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {

//     var currentScrollpos = window.pageYOffset;
//     if (prevScrollpos > currentScrollpos) {
//         document.getElementById("down-nav").style.top = "0";
//     } else {
//         document.getElementById("down-nav").style.top = "-100px";
//     }

//     prevScrollpos = currentScrollpos;

// }


$(function () {
    "use strict";
  
//    Sticky menu 
    var $window = $(window);
    $window.on('scroll', function () {
      var scroll = window.scrollY;
      if (scroll < 200) {
        $("#down-nav").removeClass("stick-nav");
      } else {
        $("#down-nav").addClass("stick-nav");
      }
    });
  
  
  })

