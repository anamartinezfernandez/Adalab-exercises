"use strict";

var buttonEl = document.querySelector(".js-button");

function changeStyles(event) {
  buttonEl.classList.toggle("blue");
}

buttonEl.addEventListener("click", changeStyles);