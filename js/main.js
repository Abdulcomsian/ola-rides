


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
    loop: true,
  });

  var swiper = new Swiper(".section_6 .mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

[...document.querySelectorAll('.btn_navgator.btn_prev')].forEach(elem => {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    [...document.querySelectorAll('.swiper-button-prev')].forEach(elem2 => {
      elem2.click()
    })
  })
});

[...document.querySelectorAll('.btn_navgator.btn_next')].forEach(elem => {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    [...document.querySelectorAll('.swiper-button-next')].forEach(elem2 => {
      elem2.click()
    })
  })
})