"use strict";

//OPCIÓN 1:
function getIva(price) {
  const result = `Precio sin IVA: ${price}, IVA: ${price * 0.21} y Total: ${
    price * 1.21
  }`;
  return result;
}
//Opción de imprimir 1: en el párrafo del html
const paragraph = document.querySelector ("js-text");
paragrapht.innerHTML = getIva(10);
//Opción de imprimir 2:
const priceResult = getIva(10);
console.log(priceResult); 
//Opción de imprimir 3:
console.log(getIva(10));

//OPCIÓN 2:
function getIva(price) {
const iva = price * 0.21;
const total = price + iva;
console.log(El precio es ${price} el iva es ${iva} el total es ${total});
}