"use strict";
const ageDog = 7;
const dogHumanAge = 24 + 5 * (ageDog - 2);
if (ageDog === 1) {
  console.log("El perro tiene 15 años de humano.");
} else if (ageDog >= 2 && ageDog <= 3) {
  console.log("El perro tiene 24 años de humano.");
} else if (ageDog >= 3) {
  console.log(`El perro tiene ${dogHumanAge} años de humano.`);
}
