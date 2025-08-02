const burger = document.getElementById("burger-menu");
const nav = document.querySelector(".nav-con");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  nav.classList.toggle("show");
  nav.classList.toggle("hide");
});