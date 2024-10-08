
let deviceWidth = window.innerWidth

const collectionItems = document.querySelectorAll(".collection__info")

collection()

setInterval( collection ,5500);

function collection(){
   let a = Math.random()

   if(deviceWidth <= 1024 && deviceWidth > 768) {
      switch(true){
         case ( a >= 0 && a <= 0.25 ):
            collectionItems[0].classList.add("collection__info--active");
            break;
         case ( a > 0.25 && a <= 0.5 ):
            collectionItems[1].classList.add("collection__info--active");
            break;
         case ( a > 0.5 && a <= 0.75 ):
            collectionItems[2].classList.add("collection__info--active");
            break;
         case ( a > 0.75 && a <= 1 ):
            collectionItems[3].classList.add("collection__info--active");
            break;   
      }
   } else if (deviceWidth <= 768) {
      switch(true){
         case ( a >= 0 && a <= 0.33 ):
            collectionItems[0].classList.add("collection__info--active");
            break;
         case ( a > 0.33 && a <= 0.66 ):
            collectionItems[1].classList.add("collection__info--active");
            break;
         case ( a > 0.66 && a <= 1 ):
            collectionItems[2].classList.add("collection__info--active");
            break;
      }
   } else {
      switch(true){
         case ( a >= 0 && a <= 0.2 ):
            collectionItems[0].classList.add("collection__info--active");
            break;
         case ( a > 0.2 && a <= 0.4 ):
            collectionItems[1].classList.add("collection__info--active");
            break;
         case ( a > 0.4 && a <= 0.6 ):
            collectionItems[2].classList.add("collection__info--active");
            break;
         case ( a > 0.6 && a <= 0.8 ):
            collectionItems[3].classList.add("collection__info--active");
            break;
         case ( a > 0.8 && a <= 1 ):
            collectionItems[4].classList.add("collection__info--active");
            break;
      }
   }

   setTimeout(() => {
      collectionItems.forEach( (element) => {
         element.classList.remove("collection__info--active")
      });
   }, 3000)

}

