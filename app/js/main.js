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




const categories = document.querySelector(".aside__categories");
const recent = document.querySelector(".aside__recent");
const tags = document.querySelector(".aside__tags_aside");
const categoriesButton = document.querySelector(".aside__show-button_categories");
const recentButton = document.querySelector(".aside__show-button_recent");
const tagsButton = document.querySelector(".aside__show-button_tags");


document.addEventListener("click", (event) => {
   if (event.target.closest(".aside__show-button_categories")) {
      categories.classList.toggle("aside__categories--active")
      categoriesButton.classList.toggle("aside__show-button_categories--active")
   }
   if (event.target.closest(".aside__show-button_recent")) {
      recent.classList.toggle("aside__recent--active")
      recentButton.classList.toggle("aside__show-button_recent--active")
   }
   if (event.target.closest(".aside__show-button_tags")) {
      tags.classList.toggle("aside__tags_aside--active")
      tagsButton.classList.toggle("aside__show-button_tags--active")
   }   

})



