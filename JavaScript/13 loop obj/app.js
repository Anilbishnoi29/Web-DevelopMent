'use strict';
const arr = ["Apple", "Book", "Cat", "Date", "Enemy", "Fun"];
for (const item of arr.entries()) {
    console.log(`${item[0]+1} ${item[1]}`);
}
console.log("");
for (const [i, e] of arr.entries()) {
    console.log(`${i+1} ${e}`);
}
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    thu: {
        open: `11am`,
        close: `10pm`,
    },
    fri: {
        open: `10am`,
        close: `10pm`
    },
    sat: {
        open: `11am`,
        close: `10pm`
    },
    sun: {
        open: `11am`,
        close: `11pm`
    }
}
const restro = {
    openingHours,
}

for (const [key, {
        open,
        close
    }] of Object.entries(openingHours)) {
    console.log(`we are open on ${key} at ${open} and close at ${close}`);

}