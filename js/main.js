


// init swiper
var swiper = new Swiper(".mySwiper.common", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
      },
    },
  });

  var swiper = new Swiper(".section_6 .mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });