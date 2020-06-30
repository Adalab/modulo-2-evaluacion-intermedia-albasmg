'use strict';

const randomNumber = getRandomNumber(100);
const numberInput = document.querySelector('.js-numberInput');
const button = document.querySelector('.js-button');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(`El número aleatorio es ${randomNumber}`);

function handleNumberInputChange(event) {
  const numberInputValue = event.target.value;
  console.log(numberInputValue);
}

function handleButtonClick(event) {
  event.preventDefault();
  console.log('hola');
}

numberInput.addEventListener('keyup', handleNumberInputChange);
button.addEventListener('click', handleButtonClick);
