"use strict";
// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

//las console.log en el orden inverso devuelve y x porque hemos ejecutado antes la función, coge el return, que es "x". Si cambiamos el orden sería "y" porque estaría sin ejecutar.
