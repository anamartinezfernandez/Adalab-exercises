"use strict";
const allPeople = 9;
const totalPaid = 128;
const sake = 2;
const pricePerson = (totalPaid - sake) / allPeople;
console.log(pricePerson);
/* console.log(totalPaid / allPeople - sake); */

const priceAna = pricePerson + sake;
console.log(priceAna);