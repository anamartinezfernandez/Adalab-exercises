"use strict";
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista"
};

const textEl = document.querySelector(".js-text");
textEl.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`;
console.log(textEl);