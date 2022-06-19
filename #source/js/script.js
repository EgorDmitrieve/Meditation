// $(document).ready(function (e) {
//   $(".header__burger").click(function (e) {
//     $(".header__burger, .header__menu").toogleClass("active");
//   });
// });

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
});
