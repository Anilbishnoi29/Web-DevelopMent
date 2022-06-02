'use strict';
const jonasArray = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    calcAge: function () {
        this.age = 2037 - this.birthYear;
    }
};
console.log(jonasArray);

// get properties
console.log(jonasArray.firstName);
console.log(jonasArray.lastName);

console.log(jonasArray['lastName']); // used from some calculations like add two var
let nameKey = 'Name';

console.log(jonasArray['first' + nameKey]);
// console.log(jonasArray.calcAge());
console.log(jonasArray['age']);