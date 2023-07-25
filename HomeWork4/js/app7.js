// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

let inputNumber = parseInt(prompt("enter the number", 0));

let firstNumber = ((inputNumber - (inputNumber % 100)) / 100) % 10;
let secondNumber = ((inputNumber - (inputNumber % 10)) / 10) % 10;
let thirdNumber = inputNumber % 10;

console.log(
  firstNumber === secondNumber && firstNumber === thirdNumber
    ? "всі цифри однакові"
    : "не всі цифри однакові"
);

console.log(
  firstNumber === secondNumber ||
    secondNumber === thirdNumber ||
    firstNumber === thirdNumber
    ? "серед цифр є однакові"
    : "серед цифр немає однакових"
);
