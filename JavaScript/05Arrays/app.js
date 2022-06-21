'use strict';

function printArray(arr) {
    console.log('\n');
    console.log(`Printing arrays....`);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let numberArr = [1, 2, 3, 4, 5, 6];
let numberArr1 = new Array(1, 2, 3, 4);
printArray(numberArr);
numberArr[6] = '7';
printArray(numberArr);

let arr1 = [`Mohit`, `a`, 5.5, [99, 100]];
printArray(arr1);

// add item
// push() Appends new elements to the end of an array, and returns the new length of the array.
let arrExample = [1, 2, 3];
printArray(arrExample);
arrExample.push(4);
printArray(arrExample);
// unshift() Inserts new elements at the start of an array, and returns the new length of the array.
arrExample.unshift(0);
printArray(arrExample);

//Remove item
//pop() Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arrExample.pop();
printArray(arrExample);
//shift() Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arrExample.shift();
printArray(arrExample);

//indexOf() Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(arrExample.indexOf(3));

//includes() Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arrExample.includes(2));
arrExample.push('12');
console.log(arrExample.includes(12)); //strict check

let arrD = [2, 4, [5, 6]];
let [i, j, [k, l]] = arrD;
console.log(i, j, k, l);

// undefine
let [a, b, c] = [1, 2];
console.log(a, b, c)
// undefine vs default
let [d = 1, e = 2, f = 3] = [1, 2];
console.log(d, e, f);