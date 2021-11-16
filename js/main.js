const burgerBtn = document.getElementById('burgerBtn')

burgerBtn.addEventListener("click", myFunction);

function myFunction() {
   const menu = document.getElementById('menu');
   menu.classList.toggle("active")
   burgerBtn.classList.toggle("active")
   // const menuList = document.getElementById('menu__list');
   // menuList.classList.toggle("active")
   // const menuInfo = document.getElementById('menu__info');
   // menuInfo.classList.toggle("active")
}