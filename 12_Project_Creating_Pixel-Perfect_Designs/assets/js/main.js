$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })
});