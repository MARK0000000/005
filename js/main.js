// right-side-menu
const openButton = document.querySelector(".header__btn");
const closeButton = document.querySelector(".rightSide-menu__close");
const rightSideMenu = document.querySelector(".rightSide-menu")

document.addEventListener("click", (event) => {
   if (event.target.closest(".header__btn-img")) {
      rightSideMenu.classList.add("rightSide-menu--active")

   }
   if (event.target.closest(".rightSide-menu__close")) {
      rightSideMenu.classList.remove("rightSide-menu--active")
   }

})

// menu mobile
const openMenu = document.querySelector(".header__btn-menu");
const menu = document.querySelectorAll(".menu");

document.addEventListener("click", (event) => {
   if (event.target.closest(".header__btn-menu")) {
      menu[0].classList.toggle("menu--open")
      menu[1].classList.toggle("menu--open")
   }
   if (!event.target.closest(".header__btn-menu")) {
      menu[0].classList.remove("menu--open")
      menu[1].classList.remove("menu--open")
   }
});







