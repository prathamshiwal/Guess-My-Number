'use strict';

// console.log(document.querySelector('.message').textContent); // so first we select the element my querry selector and then using textContent we slect the text inside that element.

// // DOM manipulation means to make JS interact with the web page.
// // Dom means - Document Object Model it is a structured representation of HTML documents. it allows JS to Access HTML elements and style to manipulte them.
// // Dom document is kind of a Tree structure for html documents
// // document is a special object which is entry point to the DOM.
// // first child element is HTML doc after there more and more child elements are there.
// // DOM !== javascript i.e DOM methods and properties for DOM manipulation are not part of JS.
// // DOM methods are the part of WEB APIs
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// // this is setting one text to another text on the webpage
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23; // .value get the values from input field
// console.log(document.querySelector('.guess').value);

// now we take a look at event listeners

/*####################### THIS IS BASIC CODE #################################
let secretNumber = Math.trunc(Math.random() * 20) + 1; // it will give number between 1 and 20 as *20 is written for the outer bound so the number will be genrated between 0 to 19 and then we add 1 to it after truncating its decimal value so it will give a number between 1 to 20.
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    //no number input
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    //player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //guess is too high
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //guess is too low
  }
});

//this addEventListener listens the events that is click and does the function when ever event happens. this function is event handler.

//  Coding Challenge #1
// Implement a game reset functionality, so that the player can make a new guess!

// Your tasks:

// 1. Select the element with the 'again' class and attach a click event handler

// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables

// 3. Restore the initial conditions of the message, number, score and guess input fields

// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}); 
###############################################################################*/

// OPTIMIZED CODE BY REMOVING REDUNDANT CODE(REFACTORING)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBGColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setGuessNumberWidth = function (x) {
  document.querySelector('.number').style.width = x;
};

const setGuessBoxValue = function (y) {
  document.querySelector('.guess').value = y;
};

const getGuessBoxValue = function () {
  return document.querySelector('.guess').value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(getGuessBoxValue());

  if (!guess) {
    displayMessage('⛔ No number!');
    //no number input
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    //player wins
    setBGColor('#60b347');
    setGuessNumberWidth('30rem');
    displaySecretNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    // when it is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displaySecretNumber('?');
  displayMessage('Start guessing...');
  setGuessBoxValue('');
  setBGColor('#222');
  setGuessNumberWidth('15rem');
});
