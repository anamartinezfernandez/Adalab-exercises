"use strict";
function mean(a, b, c, d) {
  const result = (a + b + c + d) / 4;
  return result;
}
let meanResult = mean(2, 3, 4, 5);
meanResult = mean(8, 6, 7, 5);
meanResult = mean(1, 2, 3, 4);
console.log(meanResult);
