// A variable is a value assigned to an identifier, so you can reference and use it later in the program.
// JavaScript is loosely typed
// declare a variable using 3 keywords that are var, let, and const. 
/*  var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript. 
    Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. */

var number1 = 30;
var number1 = 50; //re-declare variable using var (it's only possible in var)

function fun1() {
    var funInnerNumber = 10;
    console.log(number1);
}
fun1();
console.log(number1); // global scope
//console.log(funInnerNumber); //ReferenceError: funInnerNumber is not defined bcz it's function scope
console.log(number1);

/*
    let keyword in JavaScript: The let keyword is an improved version of the var keyword. 

    Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). 
     cannot re - declare the variable defined with the
     let keyword but can update it.
        (SyntaxError: Identifier 'a' has already been declared)

    1. Users can declare the variable with the same name in different blocks using the let keyword.
    2. If users use the let variable before the declaration, it does not initialize with undefined just like a var variable and return an error.
    (ReferenceError: Cannot access 'a' before initialization but var can be accessible with undefine )
    3. 
*/
let letNumber = 99;

function letFunction() {
    console.log(letNumber);
};
letFunction();
console.log(letNumber);

function letFunction2() {
    let letInnerNumber = 20;
    console.log(letInnerNumber);
}
letFunction2();
//console.log(letInnerNumber); //ReferenceError: letInnerNumber is not defined

/*
const keyword in JavaScript: The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.

Scope: block scoped: 
When users declare a const variable, they need to initialize it, otherwise, it returns an error.The user cannot update the const variable once it is declared.


*/
const constNumber = 10;

function f() {
    // constNumber = 9; // error
    console.log(constNumber)
}
f();