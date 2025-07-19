const box1 = document.querySelector(".kodo-more")
const box2 = document.querySelector(".open-kodo")
const box3 = document.querySelector(".close-kodo")

document.getElementById("open-kodo").addEventListener("click", function(){
  box1.classList.remove("hide")
  box2.classList.add("hide")
  box3.classList.remove("hide")
})

document.getElementById("close-kodo").addEventListener("click", function() {
  box1.classList.add("hide")
  box2.classList.remove("hide")
  box3.classList.add("hide")
})