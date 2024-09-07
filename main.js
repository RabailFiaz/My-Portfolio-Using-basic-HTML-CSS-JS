var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
      delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });