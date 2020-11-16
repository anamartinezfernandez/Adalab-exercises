"use strict";
const inputEl = document.querySelector(".js-input");
const textEl = document.querySelector(".js-text");

function addText(event) {
  textEl.innerHTML = event.currentTarget.value;
}
inputEl.addEventListener("keydown", addText);

//event.currentTarget contiene el elemento sobre el que pusimos el Listener, en este caso inputEl