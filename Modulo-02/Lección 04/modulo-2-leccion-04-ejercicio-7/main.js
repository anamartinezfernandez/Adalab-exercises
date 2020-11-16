"use strict";
//Función para acceder a un elemento del HTML
function getEl(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
  } else {
    console.log(element);
  }
  return element;
}

// Función para comprobar si un número es par o impar
function oddEven(a) {
  if (a % 2 === 0) {
    return true;
  } else if (a % 2 !== 0) {
    return false;
  }
}
//Llamar a la función getEl
const paragraph = getEl(".text");
//Convertir el valor a un número
const elementValue = parseInt(paragraph.innerHTML);
//Llamar a la función even
const result = oddEven(elementValue);
//Escribir en la consola si es un número par o impar
if (result === true) {
  console.log(`Este número es PAR: ${elementValue}`);
} else {
  console.log(`Este número es IMPAR: ${elementValue}`);
}
