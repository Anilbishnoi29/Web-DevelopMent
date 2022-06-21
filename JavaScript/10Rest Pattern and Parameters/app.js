'use strict';
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [...a] = [...arr];
// console.log(a);

function fun(...book) {
    let sum = 0;
    book.forEach(element => {
        sum += element;
    });
    console.log(sum);
}
fun(100, 200, 300, 400, 500, 600, 700, 800, 900)
fun(1, 2, 3, 4, 5, 6, 7, 8, 9)
fun(1, 2, 3, 4, 5, 6, 7)
fun(1, 2, 3, 4)