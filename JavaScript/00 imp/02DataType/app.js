/*
JavaScript is a loosely typed and dynamic language.Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned(and re - assigned) values of all types.
*/

// 1. Primitive
let str1 = "Hello";
let str2 = 'Hello';
let str3 = `Hello`;
console.log(str1, str2, str3);

let number1 = 5;
let number2 = 5.9;
let number3 = 0.6;
console.log(number1, number2, number3);

let bool1 = true;
let bool2 = false;
console.log(bool1, bool2);

let null1 = null;
console.log(null1);

let x;
console.log(x);

// Arrays linear data structure (it's an obj bcz everything in js is obj)
const arr1 = [1, 2, 3];
console.log(arr1);
console.log(arr1[arr1.length - 1]);

const num1 = new Array(7, 8, 9, 0);
console.log(num1);

// push Appends new elements to the end of an array, and returns the new length of the array.
const num = new Array(7, 8, 9, 0);
let arrLength = num.push(10, 11, 12, 13, 14);
console.log(num);
console.log(arrLength);

// unshift Inserts new elements at the start of an array, and returns the new length of the array.

num.unshift(1, 2, 3, 4, 5, 6);
console.log(num);

// pop Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let numPopped = num.pop();
console.log(numPopped);
console.log(num);

// shift  Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let numShift = num.shift();
console.log(numShift);
console.log(num);


// indexOf Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

let nameArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b'];
console.log(nameArr.indexOf('a'));
console.log(nameArr.indexOf('a', 1));
console.log(nameArr.lastIndexOf('a'));
console.log(nameArr.lastIndexOf('a', 1));