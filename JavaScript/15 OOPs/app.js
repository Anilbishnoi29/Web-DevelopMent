'use strict';
const arr = ["Apple", "Book", "Cat", "Date", "Enemy", "Fun"];

// 1. forEach()
// forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.

arr.forEach(v => {
    console.log(v);
});