let checkkodo = 0;

const kodoMore = document.querySelector(".kodo-more");
const openKodo = document.querySelector(".open-kodo");
const closeKodo = document.querySelector(".close-kodo");

openKodo.addEventListener("click", function () {
  if (checkkodo == 0) {
    kodoMore.classList.remove("hide-animation");
    setTimeout(() => {
      kodoMore.classList.add("show-animation");
    }, 10);
    openKodo.classList.add("hide");
    closeKodo.classList.remove("hide");
    setTimeout(() => {
      checkkodo = 1;
    }, 600);
  }
});

closeKodo.addEventListener("click", function () {
  if (checkkodo == 1) {
    kodoMore.classList.remove("show-animation");
    kodoMore.addEventListener("transitionend", function handler() {
      kodoMore.classList.add("hide-animation");
      kodoMore.removeEventListener("transitionend", handler);
    });
    openKodo.classList.remove("hide");
    closeKodo.classList.add("hide");
    setTimeout(() => {
      checkkodo = 0;
    }, 600);
  }
});
