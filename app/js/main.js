$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="images/arrow-left.svg" alt="" class="slider-arrows slider-arrows__right"></img>',
    nextArrow:
      '<img src="images/arrow.svg" alt="" class="slider-arrows slider-arrows__left"></img>',
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });
});
