//A JavaScript function is a block of code designed to perform a particular task.
function functionName(parameter1, parameter2, parameter3) {
    console.log("Function syntax");
};
functionName();
//Function Declarations vs. Expressions(produce a value)
function calcAge1(birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
console.log(calcAge2(1992));

//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));

// 2 or more parameter and more code
const yearsLeft = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const years = 65 - age;
    if (years > 0) {
        return `${firstName} retires in ${years} years,`;
    } else {
        return `${firstName} already retired.`;
    }
};
console.log(yearsLeft(1991, 'Mohit'));
console.log(yearsLeft(1971, 'Mohit'));