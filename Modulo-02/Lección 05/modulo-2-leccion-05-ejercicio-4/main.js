"use strict";
const container = document.querySelector(".div");
function changeBackgroundColor() {
  if (window.scrollY >= 250) {
    return container.classList.add("green");
  } else {
    return container.classList.add("blue");
  }
}
window.addEventListener("scroll", changeBackgroundColor);
