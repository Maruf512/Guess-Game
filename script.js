"use strict";

// elements
const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const guessingText = document.querySelector(".guessing-text");
const currectAns = document.querySelector(".game-correct-ans");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");

// variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

// Display texts
function displayGuessingText(text) {
  guessingText.textContent = text;
}

// checking
check.addEventListener("click", function () {
  const inputNumber = Number(input.value);
  // if the input is empty
  if (!inputNumber) displayGuessingText("Input a valid number!");
  // when player wins
  else if (inputNumber == SECRET_NUMBER) {
    displayGuessingText("Correct Ans!!");
    currectAns.textContent = inputNumber;
    currectAns.style.backgroundColor = "#222";
    document.body.style.backgroundColor = "teal";
    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }
  // when guess in wrong
  else if (inputNumber !== SECRET_NUMBER) {
    if (SCORE > 1) {
      displayGuessingText(
        inputNumber > SECRET_NUMBER ? "Too high!" : "Too Low"
      );
      SCORE--;
      score.textContent = SCORE;
    } else {
      displayGuessingText("Game Over!!!!");
      score.textContent = 0;
    }
  }
});

// play again
playAgain.addEventListener("click", function () {
  SCORE = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
  displayGuessingText("Start gussing....");
  document.body.style.backgroundColor = "#222";
  currectAns.style.backgroundColor = "teal";
  currectAns.textContent = "?";
  score.textContent = SCORE;
  input.value = "";
});
