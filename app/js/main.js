const openMenu = document.querySelector(".header__btn-menu");
const menu = document.querySelectorAll(".menu");
console.log(menu);
document.addEventListener("click", menuOpen);

function menuOpen(event){
   if (event.target.closest(".header__btn-menu")) {
      menu[0].classList.toggle("menu--open")
      menu[1].classList.toggle("menu--open")
   }
   if (!event.target.closest(".header__btn-menu")) {
      menu[0].classList.remove("menu--open")
      menu[1].classList.remove("menu--open")
   }

}

