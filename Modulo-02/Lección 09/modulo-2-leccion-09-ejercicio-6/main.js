"use strict";
const basketEl = {
  maxNumberPears: 15,
  minNumberPears: 1,
  actualNumberPears: 6,
  initialNumberPears: 3,
  addAPear: function () {
    return this.actualNumberPears + 1;
  },
  takeOffAPear: function () {
    return this.actualNumberPears - 1;
  },
  restore: function () {
    return this.initialNumberPears;
  }
}

console.log(basketEl.addAPear());
console.log(basketEl.takeOffAPear());
console.log(basketEl.restore());