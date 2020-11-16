"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
let evenArray = [];
let multipleArray =  [];

const bestLostNumber = function () {

  for (let i = 0; i < lostNumbers.length; i++){
    console.log (lostNumbers[i]);
    if (lostNumbers[i] % 2 === 0){
      evenArray.push (lostNumbers[i]);
       
    }
    if (lostNumbers [i] % 3 === 0) {multipleArray.push (lostNumbers[i]);
  }
}
console.log (evenArray.concat (multipleArray)); //Lo hacemos fuera del for para que no lo imprima en cada recorrido del array
}
bestLostNumber();
console.log (evenArray);
console.log (multipleArray);
