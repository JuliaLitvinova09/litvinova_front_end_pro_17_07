// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

let inputNumber = parseInt(prompt("enter the number", 0));
let tempNumber;

let num1 = parseInt(inputNumber / 100000);
let num2 = ((inputNumber - (inputNumber % 10000)) / 10000) % 10;
let num3 = ((inputNumber - (inputNumber % 1000)) / 1000) % 10;
let num4 = ((inputNumber - (inputNumber % 100)) / 100) % 10;
let num5 = ((inputNumber - (inputNumber % 10)) / 10) % 10;
let num6 = inputNumber % 10;

console.log(
  num1 === num6 && num2 === num5 && num3 === num4
    ? "число є дзеркальним"
    : "число не є дзеркальним"
);
