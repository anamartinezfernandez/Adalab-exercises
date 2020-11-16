"use strict";
function getEl(x) {
  const result = document.querySelector(x);
  return result;
}
console.log(getEl(".text"));
console.log(getEl(".text1"));
console.log(getEl(".text2"));
console.log(getEl(".text3"));
console.log(getEl(".text4"));
