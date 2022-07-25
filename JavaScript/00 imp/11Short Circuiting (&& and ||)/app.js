'use strict';
console.log(3 || "book");
console.log("" || "book");
console.log(true || 0);
console.log(undefined || null);

const rest1 = {
    name: 'capri',
    numGuests: 20,
}

const rest2 = {
    name: 'la piazza',
    owner: 'Giovanni Rossi',
}
rest2.numGuests = rest1.numGuests || 21;
console.log(rest2.numGuests);
console.log(-2 || -1);