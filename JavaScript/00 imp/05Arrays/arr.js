const fruits = [{
    id: 1,
    fname: "A",
}, {
    id: 2,
    fname: "B",
}];
const f = fruits.entries();

for (let x of f) {
    console.log(x);
}