'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // NO NUMBER
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! :(';

    // CORRECT NUMBER
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! :)';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.title').textContent = 'You Won The Game!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //NUMBER TOO HIGH & LOST THE GAME
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game! :(';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#711825';
      document.querySelector('.title').textContent = 'You Lost The Game!';
    }

    //NUMBER TOO LOW & LOST THE GAME
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game! :(';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#670514';
      document.querySelector('.title').textContent = 'You Lost The Game!';
    }
  }
});
// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.title').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
});
