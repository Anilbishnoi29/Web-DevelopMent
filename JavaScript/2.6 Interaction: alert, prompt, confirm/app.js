'use strict';
// alert
const alertBtn = document.getElementById('alert');
alertBtn.addEventListener("click",() => {
    const alertResult = document.getElementById('alertResult');
    const result = alert("Hello");
    console.log(result);
    alertResult.innerText = `alert return = ${result}`;
});

// prompt
// The function prompt accepts two arguments:
// prompt(title,[default ]);
const promptBtn = document.getElementById('promptbtn');
promptBtn.addEventListener('click',() => {
    const result = prompt('How old are you?',100);
    document.getElementById('promptResult').innerText = `prompt return = ${result}`;;
});

// confirm
// confirm(question);
const confirmbtn = document.getElementById('confirmbtn');
confirmbtn.addEventListener('click',() => {
    const result = confirm('Are you a student');
    document.getElementById('confirmResult').innerText = `prompt return = ${result}`;;
});

// Summary
// We covered 3 browser - specific functions to interact with visitors:

// alert
// shows a message.

// prompt
// shows a message asking the user to input text.It returns the text or, if Cancel button or Esc is clicked,null.

// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel / Esc.