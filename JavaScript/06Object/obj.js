var firstName = 'Roy';
const person = {
    firstName: 'Mohit',
    age: 24,
    printFun: function () {
        console.log(this.firstName);
        const fun = () => {
            console.log("inner : ", this.firstName); //now this work fine
        };
        fun();
    },
    // printArrow: () => console.log(this.firstName), // in node js undefined and in console "Mohit"
}

// person.printFun();

// de-str
const {
    first,
    age
} = person;
console.log(first, age);
const Restro = {
    fri: {
        open: 11,
        close: 12
    },
    sat: {
        open: 10,
        close: 12
    }
}
const {
    sat: {
        open,
        close
    }
} = Restro;
console.log(open, close);