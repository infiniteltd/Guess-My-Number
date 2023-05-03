'use strict';


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const curScore = function (score) {
    document.querySelector('.score').textContent = score;
};
const shwNumber = function (number) {
    document.querySelector('.number').textContent = number;
};

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no input 
    if (!guess) {
        displayMessage('⛔ No Number!');

        // When player wins
    } else if (guess === secretNumber) {

        displayMessage('🎉  Correct Number!');

        shwNumber(secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is different
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈  Too high' : '📉  Too low');
            score--;
            curScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            curScore(0);
        }
    }

    // When guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈  Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉  Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

});

const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    curScore(score);

    shwNumber('?');

    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});