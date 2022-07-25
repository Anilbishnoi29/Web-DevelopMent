'use strict';
// slice
let arr = [1, 2, 3, 4, 5, 6];
let newNumberArr = arr.slice(2, 4);
console.log(newNumberArr)
console.log(arr.slice(-1));

// splice
console.log('');
console.log('splice');
console.log(arr)
console.log(arr.splice(1, 4));
console.log(arr);

console.log('');
console.log('reverse');
arr = [1, 2, 3, 4, 5, 6];
console.log(arr)
console.log(arr.reverse(1, 4));
console.log(arr);

console.log('');
console.log('join');
arr = [1, 2, 3, 4, 5, 6];
console.log(arr)
console.log(arr.join(""));

console.log('');
console.log('at');
arr = [1, 2, 3, 4, 5, 6];
console.log(arr)
console.log(arr.at(-1));

console.log('');
console.log('for loop');
arr = [1, 2, 3, 4, 5, 6];

for (const x of arr) {
    console.log(x);
}
console.log('');
console.log('forEach');
arr = [1000, -222, 30000, 45, -15000, 600];

for (const [i, item] of arr.entries()) {
    if (item > 0) {
        console.log(`arr ${i+1}: you deposit money ${item}`);
    } else {
        console.log(`arr ${i+1}: you withdrew ${item}`);
    }
}

console.log('');
console.log('forEach');
arr = [1000, -222, 30000, 45, -15000, 600];

arr.forEach(function (item, index) {
    if (item > 0) {
        console.log(`arr ${index+1}: you deposit money ${item}`);
    } else {
        console.log(`arr ${index+1}: you withdrew ${item}`);
    }
})

console.log('');
console.log('split()');

// arr = 'Anil Bishnoi'; // simple string
// let userName = arr.toLowerCase().split(' ');
// console.log(userName);
// // console.log(userName);
// // userName = arr.toLowerCase().split(' ').map(name => name[0]);
// userName = arr.toLowerCase().split(' ').map(name => name[0]).join('');
// console.log(userName);

const creatingUserName = function (name) {
    const userName = name.toLowerCase().split(' ').map(name => name[0]).join('');
    return userName;
};
console.log(creatingUserName('Apple Book Cat'));
console.log(creatingUserName('Apple Book '));
console.log(creatingUserName('Apple Cat'));