$(document).ready(function () {
    
    $("#single-carousel").slick({
      centerMode: true,
      //centerPadding: "60px",
      slidesToShow: 1,
      arrows: false,
      centerPadding: "25%",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20%",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20%",
            slidesToShow: 1,
          },
        },
      ],
    });

});