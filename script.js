'use strict';

let secretNumber;
let score = 20;
let highscore = 0;

function getRandomSecretNumber(max = 20) {
    return Math.trunc(Math.random() * max) + 1;
}

function initGame() {
    score = 20;
    secretNumber = getRandomSecretNumber();
    hint(secretNumber);
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

function hint(secretNumber) {
    let secretMsg = "";
    switch (secretNumber) {
        case 1: secretMsg = "Equal to its square."; break;
        case 2: secretMsg = "Only even prime number."; break;
        case 3: secretMsg = "First odd prime number."; break;
        case 4: secretMsg = "Square of two; four points."; break;
        case 5: secretMsg = "Sum of two primes."; break;
        case 6: secretMsg = "Smallest perfect number."; break;
        case 7: secretMsg = "A Mersenne prime."; break;
        case 8: secretMsg = "Cube and power of two."; break;
        case 9: secretMsg = "Odd composite and prime square."; break;
        case 10: secretMsg = "Sum of first four primes."; break;
        case 11: secretMsg = "First double-digit prime."; break;
        case 12: secretMsg = "Smallest abundant number."; break;
        case 13: secretMsg = "Fibonacci prime and twin."; break;
        case 14: secretMsg = "Product of two distinct primes."; break;
        case 15: secretMsg = "Sum of first five odds."; break;
        case 16: secretMsg = "Perfect square; five divisors."; break;
        case 17: secretMsg = "A Fermat prime."; break;
        case 18: secretMsg = "Divisible by 1 to 3."; break;
        case 19: secretMsg = "Prime that loses uniqueness."; break;
        case 20: secretMsg = "Product of two distinct primes."; break;
    }
    document.querySelector('.scrtMsg').textContent = secretMsg;
}

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            // Optional celebratory message
            displayMessage('🏆 New High Score!');
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💔 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', initGame);

// Initialize the game on page load
initGame();