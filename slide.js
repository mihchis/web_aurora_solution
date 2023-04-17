$('.list-item-slide').slick({
  // infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-right'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-left'></i></button>",
});

// Tự động chuyển đổi mũi tên sau 7 giây
setInterval(function() {
  $('.list-item-slide').slick('slickNext');
}, 700);
