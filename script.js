"use strict";

//  VARIABLES
let gameOver = 0;
// NUMBER RANDOM
let secretNumber = Math.trunc(Math.random() * 30 + 1);

// QUERY SELECTOR
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const body = document.querySelector("body");
const highscore = document.querySelector(".highscore");
// END VARIABLES

// FUNCTION
// CHECK FUNCTION, THIS TRIGGERS IF YOU CLICK ON THE CHECK BUTTON
const Check = function () {
  const guessCheck = Number(guess.value);
  // when player LOST THE GAME
  if (Number(score.textContent) === 2) {
    gameOver++;
    message.textContent = `Perdiste el juego`;
    score.textContent = Number(score.textContent) - 2;
    body.style.backgroundColor = "#5E2129";
    number.style.width = "22rem";
    number.textContent = secretNumber;
  }

  // when there is not input
  if (!guessCheck && gameOver == 0) {
    message.textContent = `No es un numero!`;

    // when player wins
  } else if (guessCheck === secretNumber && gameOver === 0) {
    message.textContent = `Numero Corecto`;
    body.style.backgroundColor = "#60b347";
    number.style.width = "22rem";
    number.textContent = secretNumber;
    // HIGHSCORE
    if (Number(highscore.textContent) < Number(score.textContent)) {
      highscore.textContent = score.textContent;
    }

    //when guess is too high
  } else if (guessCheck > secretNumber && gameOver === 0) {
    message.textContent = `Muy alto`;
    score.textContent = Number(score.textContent) - 2;

    //when guess is too low
  } else if (guessCheck < secretNumber && gameOver === 0) {
    message.textContent = `muy bajo`;
    score.textContent = Number(score.textContent) - 2;
  }
};

// CHECK FUNCTION, THIS TRIGGERS IF YOU CLICK ON THE CHECK BUTTON
const Again = function () {
  gameOver = 0;
  secretNumber = Math.trunc(Math.random() * 30 + 1);
  score.textContent = 20;
  number.textContent = "?";
  message.textContent = `Empiece a adivinar...`;
  guess.value = "";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
};

//  END FUNCTION

//  WHEN THE PLAYER CLICKES ON CHECK
check.addEventListener("click", Check);

//  WHEN THE PLAYER CLICKES ON CHECK
again.addEventListener("click", Again);
