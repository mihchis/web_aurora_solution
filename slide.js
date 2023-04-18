$('.list-item-slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,  // Thêm tùy chọn autoplay
  autoplaySpeed: 2000,  // Tự động trượt sau mỗi 2 giây
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-right'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-left'></i></button>",
});
