$(() => {
  console.log(1);
  var swiper = new Swiper(".my-product-thumbs-swiper", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 10,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: "auto",
    breakpoints: {
      100: {
        direction: "horizontal",
      },

      1201: {
        direction: "vertical",
      },
    },
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

$(() => {
  function swiperRecommendation() {
    let swiperRecomendation = new Swiper(".swiper-recomedation", {
      slidesPerView: 4.9,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        100: {
          slidesPerView: 1,
        },

        300: {
          slidesPerView: 1.5,
        },
        500: {
          slidesPerView: 2.5,
        },
        767: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 4.9,
        },
      },
    });
  }
  swiperRecommendation();
  function generateRelated() {
    let urlProduct = $(".tab-recomendation").attr("data-url");
    fetch(urlProduct)
      .then((response) => response.text())
      .then((text) => {
        const $html = $("<div>").html(text);
        const $recommendations = $html.find(".tab-recomendation");
        $(".tab-recomendation").replaceWith($recommendations);
        swiperRecommendation();
      })
      .catch((e) => {});
  }
  generateRelated();

  $(".tab__item").click(function () {
    $(".tab__item").removeClass("active");
    let index = $(this).index() + 1;
    console.log(index);
    $(this).addClass("active");
    $(".tab-content").removeClass("active");
    $(".tab-content").eq(index).addClass("active");
  });
});
