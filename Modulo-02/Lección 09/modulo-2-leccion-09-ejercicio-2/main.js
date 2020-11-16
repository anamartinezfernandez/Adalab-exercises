"use strict";
let arrayNumbers = []; 
console.log (arrayNumbers);//declaramos la variable necesaria para hacer luego push. Inicialmente no tiene ningún elemento. Se los queremos incluir posteriormente con un array
let acc = 0;
 let get100Numbers = function () {
  for (let index = 1; index <=100; index++)  {
    acc++;
    arrayNumbers.push (acc);
  }
  return console.log (arrayNumbers);
}


let getReversed100Numbers = function () {
  console.log(arrayNumbers.reverse());
}

get100Numbers();
getReversed100Numbers(); 