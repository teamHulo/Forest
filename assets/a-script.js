
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
 
  function generateRelated() {
    if( $(".tab-recomendation").lenght > 0 ){
      let urlProduct = $(".tab-recomendation").attr("data-url");
      fetch(urlProduct)
        .then((response) => response.text())
        .then((text) => {
          const $html = $("<div>").html(text);
          
          const $recommendations = $html.find(".product-tabs-recomentadion");
          
          $(".product-tabs-recomentadion").replaceWith($recommendations);
          swiperRecommendation();
        })
        .catch((e) => {});
    }
    
  }
  generateRelated();

  $(document).on('click','.tab__item',function () {
    $(".tab__item").removeClass("active");
    let dateTab = $(this).attr('data-title');
    let indx = $(this).index();
   
    $(this).addClass("active");
    $(".tab-content").removeClass("active");
    $('.tab-content[data-title="'+ dateTab +'"]').addClass("active");
    $('.tab-content').eq(indx).addClass("active");
  });

  swiperRecommendation();
});

$(() => {
  $(document).on('click','.aside-btn', function(){
    $(this).closest('.first-lvl').toggleClass('active');
  });
});

$(() => {
  let sliderImages = new Swiper(".images-slider", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween:15,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      250: {
        slidesPerView: 1.5,
      },
      500: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1023: {
        slidesPerView: 4,
      },
    },
  });
 
});

$(() => {
  let sliderHistory = new Swiper(".history-sliders", {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      
    },
  });
});

$(() => {

    var swiperDots = new Swiper(".swiper-dots", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
 
});