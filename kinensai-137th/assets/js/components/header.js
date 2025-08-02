const burger = document.getElementById("burger-menu");
const nav = document.querySelector(".nav-con");
const open = document.querySelector(".open-burger");
const close = document.querySelector(".close-burger");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  nav.classList.toggle("show");
  nav.classList.toggle("hide");

  open.classList.toggle("active");
  close.classList.toggle("active");
});