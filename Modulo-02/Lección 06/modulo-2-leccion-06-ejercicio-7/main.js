"use strict";

/* const user = null; */
const user = {};

const job = "developer";

user.firstName = "Ana";
user.lastName = "Martínez";
user.age = 31;
user.job = `${job}`;
/* user.job= job; */

user.firstName = "Lucía";
user.age = user.age + 1;
/* user.age = parseInt(`${user.age}`) + 1; */

console.log(user);
console.log(user.firstName);