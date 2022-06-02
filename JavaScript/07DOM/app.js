'use strict';
/*
The Document Object Model(DOM) is an application programming interface(API) for manipulating HTML documents.

The DOM represents an HTML document as a tree of nodes.The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

Selecting elements ===================

1. getElementById()– select an element by id.
    The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.
    If the document has no element with the specified id, the document.getElementById() returns null.

2. getElementsByName()– select elements by name.
    The getElementsByName() returns a live NodeList of elements with a specified name.
    The NodeList is an array - like object, not an array object.

3. getElementsByTagName()– select elements by a tag name.
    The getElementsByTagName() is a method of the document or element object.
    The getElementsByTagName() accepts a tag name and returns a list of elements with the matching tag name.
    The getElementsByTagName() returns a live HTMLCollection of elements.The HTMLCollection is an array - like object.
4. getElementsByClassName()– select elements by one or more class names.
5. querySelector()– select elements by CSS selectors.(querySelector() and querySelectorAll())

*/
const element = document.getElementById("UL");
const node = document.getElementsByClassName("hello1");
console.log(node.nodeType);
console.log(element.nodeType);

// 2. getElementsByName()– select elements by name.
let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    });

});
const countInput = document.getElementById("countInput");
const countOutput = document.getElementById("countOutput");

countInput.addEventListener('click', () => {
    let noOfInput = document.getElementsByTagName("input");
    countOutput.innerText = `Total : ${noOfInput.length} input fields.`;
});


let items = document.getElementsByClassName('hello1');
let data = [].map.call(items, a => a.textContent);

console.log(data);