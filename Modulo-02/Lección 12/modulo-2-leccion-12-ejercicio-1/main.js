"use strict";


const numbers = [1, 2, 3];
const listContainer = document.querySelector (".js-list");



//OPCIÓN 1 CON FOR OF
/* for (const number of numbers){
  const newListContent = document.createTextNode (number);
  console.log (newListContent);
} */

//OPCIÓN 2 CON FOR CLÁSICO
for (let index = 0; index < numbers.length; index++) {
  const newListElement = document.createElement ("li");
  //console.log (newListElement);
  const newListContent = document.createTextNode (numbers[index]);
  //console.log (newListContent);
  console.log(newListElement.appendChild(newListContent));
  console.log(listContainer.appendChild (newListElement));
}



