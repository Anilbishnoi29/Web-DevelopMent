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
        open: 12
    },
    fri: {
        open: 11
    },
    sat: {
        open: 11
    },
    sun: {
        open: 10
    }
}
const restro = {
    openingHours,
}

for (const day of days) {
    const open = restro.openingHours[day] ? .open;
    console.log(`${day} we are open at ${open}`);

}