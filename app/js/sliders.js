const swiper = new Swiper('.swiper', {
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
 });

 const swiper1 = new Swiper('.swiperTop', {
   grabCursor: true,
});


const swiper2 = new Swiper('.swiperContact', {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },

});
const swiper3 = new Swiper('.swiperBlog', {
   grabCursor: true,
   spaceBetween: 30,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
 });
