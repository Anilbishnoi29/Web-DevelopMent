'use strict';
const Person = function (firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

// prototype
Person.prototype.fullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
};

const mohit = new Person("Mohit","Singh");
console.log(mohit);
console.log(mohit instanceof Person);

mohit.fullName();

class Account {
    accountNumber;
    accountHolerName;
    #accountBalance;

    constructor (accountHolerName,accountBalance = 0) {
        this.accountHolerName = accountHolerName;
        this.#accountBalance = accountBalance;
        this.accountNumber = Date.now();
    }

    #deposit(amount) {
        this.#accountBalance += amount;
    }
    depositAmount(amount) {
        this.#deposit(amount);
    }
    withdraw(amount) {
        this.#accountBalance -= amount;
    }

};

const anil = new Account("Anil",5000);
anil.withdraw(5000);
anil.depositAmount(9999);
console.log(anil);
const raj = new Account("Raj k");
console.log(raj);