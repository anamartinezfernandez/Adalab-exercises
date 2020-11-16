"use strict";
function changeBackgroundColor(event) {
  const key = event.key;
  if (key === "r") {
    return document.body.classList.add("red");
  } else if (key === "m") {
    return document.body.classList.add("purple");
  }
}
document.addEventListener("keydown", changeBackgroundColor);
