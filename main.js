'use strict';

const randomNumber = getRandomNumber(100);
const numberInput = document.querySelector('.js-numberInput');
const button = document.querySelector('.js-button');
let numberInputValue = '';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(`El número aleatorio es ${randomNumber}`);

function handleNumberInputChange(event) {
  numberInputValue = parseInt(event.target.value);
}

function handleButtonClick(event) {
  event.preventDefault();
  if (randomNumber === numberInputValue) {
    console.log('Has ganado campeona!!!');
  } else if (randomNumber > numberInputValue) {
    console.log('Demasiado alto');
  } else if (randomNumber < numberInputValue) {
    console.log('Demasiado bajo');
  } else if (randomNumber > 100) {
    console.log('El número debe estar entre 1 y 100');
  }
}

numberInput.addEventListener('keyup', handleNumberInputChange);
button.addEventListener('click', handleButtonClick);
