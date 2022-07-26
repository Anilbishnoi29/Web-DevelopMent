'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click',() => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Enter a number';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number';
            document.querySelector('body').style.background = '#60b347';
            score++;
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = secretNumber;
            if (highscore < score) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (secretNumber < guess || secretNumber > guess) {
            const guessNumber = (secretNumber < guess) ? 'too high guess' : 'too low guess';
            document.querySelector('.message').textContent = guessNumber;
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    document.querySelector('.guess').value = '';
});
document.querySelector('.again').addEventListener('click',() => {
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
});