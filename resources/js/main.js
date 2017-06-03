$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover:false,
  });

  var lastScrollPos = 0;
  $(window).scroll(function(){
  var scrollPos = $(this).scrollTop();
  if (scrollPos - lastScrollPos > 50){
    var navbarHeight = $(".navbar").css("height");
    $('.navbar').animate({top: '-' + navbarHeight}, 150);
    lastScrollPos = scrollPos;
    }
    else if (lastScrollPos - scrollPos > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    lastScrollPos = scrollPos;
    }
  });

});
