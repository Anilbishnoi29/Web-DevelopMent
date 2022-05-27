'use strict';

/* 
Arrays:-
 1. arrays are mutable 
*/
// arrays literal syntax
const daysName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(daysName);

// By new keyword
const years = new Array(1991, 1992, 1993, 1994);
console.log(years);

console.log(years[0]);

// check size or length of arrays
console.log(daysName.length);
console.log(years.length);

console.log(years[years.length - 1]); // this give last index element (it's an expression)

// replace or change arrays element
years[0] = 1980;
console.log(years);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', daysName];
console.log(jonas);
console.log(jonas.length);

const calcAge = (birthYear) => 2022 - birthYear;
const birthYearList = [1990, 1997, 1986, 1989];
console.log(calcAge(birthYearList[0]));
console.log(calcAge(birthYearList[1]));
console.log(calcAge(birthYearList[2]));
console.log(calcAge(birthYearList[birthYearList.length - 1]));

/* 
Javascript build-in methods:-
*/
// adding elements push() and unshift()
// push() :- add an element at end of array
const array1 = ['b', 'c', 'd'];
console.log(array1);
array1.push('e');
console.log(array1);
console.log(`Length of array1 is ${array1.length}`);
// push() also return new array length
const array1Length = array1.push('f');
console.log(array1);
console.log(`Length of new array1 is ${array1Length}`);

// unshift() :- add an element at beginning of array
array1.unshift('a');
console.log(array1);

// Removing elements pop() and shift()
// pop()
// pop() return popped element so sometime it's helpful
const array1Popped = array1.pop();
console.log(array1Popped);
console.log(array1);

// shift() :- remove first element of that array
const array1Shift = array1.shift();
console.log(array1Shift);
console.log(array1);

// .indexOf() :- this return index of that value
console.log(array1.indexOf('d')); // index of 2

// include just return true or false for that element
// check by === strict check
console.log(array1.includes('b')); // true
console.log(array1.includes('a')); // false