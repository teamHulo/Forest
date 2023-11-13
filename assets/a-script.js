$(() => {
    console.log(1);
    var swiper = new Swiper(".my-product-thumbs-swiper", {
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 10,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        breakpoints: {
            // Когда ширина экрана больше или равна 768 пикселей
            100: {
                direction: 'horizontal',
            },
            // Когда ширина экрана больше или равна 1024 пикселей
            1201: {
                direction: 'vertical',
            }
            // Добавьте дополнительные точки перелома по мере необходимости
          }
      });
      var swiper2 = new Swiper(".my-product-media-swiper", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
        pagination: {
            el: ".product-media-pagination",
            clickable: true,
          },
      });
});
