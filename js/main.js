//swiper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
  var swiper = new Swiper(".testimonial-Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints :{
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
    }
  });
// Fixed Navbar
$('.fixed-top').css('top', $('.TopNavbar').height());
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.fixed-top').addClass('bg-dark').css('top', 0);
    } else {
        $('.fixed-top').removeClass('bg-dark').css('top', $('.TopNavbar').height());
    }
});

// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});
        

