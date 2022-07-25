'use strict';
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(...arr1);

let newArr1 = [...arr1, 7, 8, 9]
console.log(...newArr1);

const person = {
    personName: 'Dummy',
    personFriends: ['Raj', 'Kavya', 'Khushi', 'Rohit', 'Vijay'],
}
console.log(...person.personFriends);
// update friends arr
const newFriends = [...person.personFriends, 'Armaan', 'john'];
console.log(...newFriends);

// copy or shallow copy
const shallowFriends = [...person.personFriends]
console.log(shallowFriends);
// join two arr
const joinedArr = [...person.personFriends, ...newArr1];
console.log(joinedArr);
console.log(...joinedArr);

// obj
const newPerson = {
    ...person
};
console.log(newPerson == person);