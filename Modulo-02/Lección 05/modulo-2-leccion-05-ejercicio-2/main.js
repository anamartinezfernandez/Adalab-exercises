"use strict";
const button = document.querySelector(".button");

function showText() {
  const name = document.querySelector(".input");
  const nameValue = name.value;
  console.log(`Hola ${nameValue}`);
}
button.addEventListener("click", showText);
