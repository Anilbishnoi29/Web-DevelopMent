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