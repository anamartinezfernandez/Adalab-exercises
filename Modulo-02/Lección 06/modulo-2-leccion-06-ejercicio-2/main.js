"use strict";
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
  run: (action) => console.log("Estoy corriendo."),
  runAMarathon: (distance) => console.log(`Estoy corriendo un maratón de ${distance} kilómetros`),
};
//Los paréntesis del parámetro es opcional

const textEl = document.querySelector(".js-text");
textEl.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`;

adalaber1.run(); //aquí llamo a la función
adalaber1.runAMarathon(50);