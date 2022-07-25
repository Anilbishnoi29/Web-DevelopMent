'use strict';

// Constructor Functions and the new Operator

const Person = function (firstName, DOB) {
    this.firstName = firstName;
    this.DOB = DOB;

    // this.calcAge = function () {
    //     console.log(2022 - this.DOB);
    // }
    // this is a bad code
}

// it's good
Person.prototype.calcAge = function () {
    console.log(2022 - this.DOB);
}
const jonas = new Person("Jonas", 1991);
console.log(jonas);
const anil = new Person("anil", 1998);
console.log(anil);
anil.calcAge();


console.log(anil instanceof Person); // to check instance ?

// Prototypes
Person