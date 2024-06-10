"use strict"
$('#play-video').on('click', function (e) {
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/womd8BFIbDY?si=wG_17WXU_rUI5FDj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


function range() {

  let cardInfo = document.querySelectorAll('.cardInfo');
  let maxValue = ""
  let predictValue = ""
  let progressBar = ""
  let progressRange = ""

  cardInfo.forEach((item) => {
    maxValue = item.querySelector(".maxValue").textContent
    predictValue = item.querySelector(".predictValue").textContent
    progressBar = item.querySelector(".progressBar")
    progressRange = item.querySelector(".progressRange")

    let percent = Number(predictValue.substring(0, predictValue.length - 1)) * 100 / Number(maxValue.substring(0, maxValue.length - 1))

    progressBar.style.width = percent + "%"

    progressRange.innerHTML = percent

    progressRange.style.left = `calc(${percent + '%'} - (23px))`
  })
  console.log(maxValue);
}

range()


