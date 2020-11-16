"use strict";
const firstText = document.querySelector(".text");
function addText() {
  firstText.innerHTML = `${firstText.innerHTML} <p> ${firstText.innerHTML} </p>`;
  /* console.log(firstText); */
}
firstText.addEventListener("mouseover", addText);
