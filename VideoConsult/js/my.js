$(".firstSlide").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".secondSlide").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
});

$(".thirdSlide").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
});

$(".fourthSlide").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
});

$(".fifthSlide").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
});
