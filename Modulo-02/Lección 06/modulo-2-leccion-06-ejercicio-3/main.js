"use strict";
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
  run: action => console.log("Estoy corriendo."),
  runAMarathon: distance => console.log(`Estoy corriendo un maratón de ${distance} kilómetros`),
  showBio: function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`;
  }
};

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
  showBio: function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`;
  }
};
const text1 = document.querySelector(".js-text");
const text2 = document.querySelector(".js-text2");


const textEl = document.querySelector(".js-text");
textEl.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`;

adalaber1.run(); //aquí llamo a la función
adalaber1.runAMarathon(50);
console.log(adalaber1.showBio());
console.log(adalaber2.showBio());