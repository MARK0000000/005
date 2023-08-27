const openButton = document.querySelector(".header__btn");
const closeButton = document.querySelector(".rightSide-menu__close");
const rightSideMenu = document.querySelector(".rightSide-menu")



/*let heightOfPage = Math.max(
   document.body.scrollHeight, document.documentElement.scrollHeight,
   document.body.offsetHeight, document.documentElement.offsetHeight,
   document.body.clientHeight, document.documentElement.clientHeight,
)

rightSideMenu.style.height = `${heightOfPage}px`;
*/



document.addEventListener("click", (event) => {
   if (event.target.closest(".header__btn-img")) {
      rightSideMenu.classList.add("rightSide-menu--active")

   }
   if (event.target.closest(".rightSide-menu__close")) {
      rightSideMenu.classList.remove("rightSide-menu--active")
   }

})


