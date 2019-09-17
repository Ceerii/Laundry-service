var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev ',
      
    },
});