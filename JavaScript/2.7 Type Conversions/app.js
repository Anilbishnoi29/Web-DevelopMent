'use strict';
// String Conversion
let isValid = true;
console.log(typeof isValid,isValid);

isValid = String(isValid);
console.log(typeof isValid,isValid);


// Numeric Conversion;

let num = "5";
console.log(typeof num,num);

num = +(num);
console.log(typeof num,num);

let num1 = "100";
console.log(typeof num1,num1);
num1 = Number(num1);
console.log(typeof num1,num1);


let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed


// Boolean Conversion

console.log(Boolean("0"),`Boolean("0")`);
console.log(Boolean("1"),`Boolean("1")`);
console.log(Boolean("Hello"),`Boolean("Hello")`);
console.log(Boolean(""),`Boolean("") empty`);
console.log(Boolean(" "),`Boolean(" ") one space`);