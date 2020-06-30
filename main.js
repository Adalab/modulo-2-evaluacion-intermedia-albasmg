'use strict';

const randomNumber = getRandomNumber(100);
const numberInput = document.querySelector('.js-numberInput');
const button = document.querySelector('.js-button');
let attempts = document.querySelector('.js-attempts');
let clue = document.querySelector('.js-clue');
let numberInputValue = '';
let numberOfAttempts = 1;
console.log(`El número aleatorio es ${randomNumber}`);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function compareInputNumber() {
  if (randomNumber === numberInputValue) {
    clue.innerHTML = 'Has ganado campeona!!!';
  } else if (numberInputValue > 100) {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (randomNumber > numberInputValue) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (randomNumber < numberInputValue) {
    clue.innerHTML = 'Demasiado alto';
  }
}

function handleNumberInputChange(event) {
  numberInputValue = parseInt(event.target.value);
}

function handleButtonClick(event) {
  event.preventDefault();
  attempts.innerHTML = `Número de intentos: ${numberOfAttempts}`;

  if (randomNumber !== numberInputValue) {
    numberOfAttempts++;
  }
  compareInputNumber();
}

numberInput.addEventListener('keyup', handleNumberInputChange);
button.addEventListener('click', handleButtonClick);
