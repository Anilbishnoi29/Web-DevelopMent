
// Spread Operator (Shallow copy)
// userNames = [1,2,3];
// userNamesCopy = [...userNames];

// console.log('userNames : ',userNames); //[1, 2, 3]
// console.log('userNamesCopy : ',userNamesCopy); //[1, 2, 3]
// userNames.push(4);
// console.log('userNames : ',userNames); //[1, 2, 3, 4]
// console.log('userNamesCopy : ',userNamesCopy); // [1, 2, 3]

// // Array.concat(Shallow copy)
// // concat combines arrays with values or other arrays.
// console.log("--------------concat---------------");
// userNames2 = [].concat(userNames);
// console.log('userNames2 : ',userNamesCopy); // [1, 2, 3]

// console.log('\n');
// console.log("--------------While loop---------------");
// let i = 0;
// while (i < userNames.length) {
//     console.log(userNames[i]);
//     i++;
// }
console.log('\n');
const userNames = ['Ajay','Mohit','Raj','Bunny','Tom','Jay'];

console.log("While loop-------");

let i = 0;
while (i < userNames.length) {
    console.log(userNames[i]);
    i++;
}

console.log('\n');

console.log('for of loop-------');
for (x of userNames) console.log(x);


console.log('\n');

console.log('for in loop-------');
for (x in userNames) console.log(x);// only index
for (x in userNames) console.log(userNames[x]); // names



