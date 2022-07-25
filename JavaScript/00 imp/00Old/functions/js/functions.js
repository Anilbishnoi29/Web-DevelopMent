'use strict';

/* 
    functions:-
    A function is a set of statements that take inputs, do some specific computation, and produces output.
    
    There are 3 ways of writing a function in JavaScript:-
    1. Function Declaration(Function Declaration is the traditional way to define a function.) also known as "Named function"
    
    2. Function Expression (Function Expression is another way to define a function in JavaScript.Here we define a function using a variable and store the returned value in that variable.)
   
    3. Arrow Function (Arrow functions are been introduced in the ES6 version of JavaScript.It is used to shorten the code.Here do not use the “function” keyword and use the arrow symbol.)
 */


// Declaration
function functionName() {
    console.log("Hello Function");
};

// calling or invoking function
functionName();

/*
 function with args and return
 so need to store result(return value) in a variable.
 */

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};
const appleJuice = fruitProcessor(5, 0); // function with args
console.log(appleJuice);

console.log(fruitProcessor(3, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


/* 
Function Declarations vs Expressions:-
*/

// Function Declarations("Named function")
function calcAge1(birthYear) {
    return 2022 - birthYear;
};
const age1 = calcAge1(1990);

// Expressions (anonymous function) function without name.
// Expressions just produce values.
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2);

/* 
in function declaration we can call them before declared.
but in function express we can't do this. (Error)
this is called hoisting.
*/


/* 
Arrow Function:-
this is a special form of a function expression.
*/

//    variable = 1 parameter => return 
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1990);
console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    // const age = 2022 - birthYear;
    // return 65 - age;
    const retirement = 65 - (2022 - birthYear);
    return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1990, "Jonas"));
console.log(yearsUntilRetirement(1983, "Bob"));

/* 
Functions calling other functions:-
*/
const loginPassword = function (password) {
    if (password === "root") {
        console.log("logged successfully.")
    } else {
        console.log("wrong password.");
    }
};
const logIn = function (username, password) {
    if (username === "Admin") {
        loginPassword(password); // here we are calling loginPassword function
    } else {
        console.log("wrong username");
    }
};
logIn("Admin", "root");
logIn("Admin", 123);
logIn("admin", 123);