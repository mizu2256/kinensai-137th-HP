const burger = document.getElementById("burger-menu");
const nav = document.querySelector(".nav-con");
const open = document.querySelector(".open-burger");
const close = document.querySelector(".close-burger");
const body = document.body;

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  nav.classList.toggle("show");
  nav.classList.toggle("hide");

  open.classList.toggle("active");
  close.classList.toggle("active");
});

body.addEventListener("click", function (event) {
  if (!burger.contains(event.target) && !nav.contains(event.target)) {
    nav.classList.remove("active", "show");
    nav.classList.add("hide");

    close.classList.remove("active");
    open.classList.add("active");
  }
});