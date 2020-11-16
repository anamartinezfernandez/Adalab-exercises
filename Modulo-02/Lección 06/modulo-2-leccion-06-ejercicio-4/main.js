"use strict";
const buttonEl = document.querySelector(".js-button");

function listenBtn(event) {
  console.log(event);
}
buttonEl.addEventListener("click", listenBtn);

//event.type es una propiedad que devuelve el tipo de evento