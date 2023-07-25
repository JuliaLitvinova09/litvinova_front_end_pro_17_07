// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
let inputNumber = parseInt(prompt("enter the number", 0));

let secondNumber = inputNumber % 10;
let firstNumber = ((inputNumber - secondNumber) / 10) % 10;

if (firstNumber > secondNumber) {
  console.log(
    `the first number ${firstNumber} is bigger, then the second number ${secondNumber}`
  );
} else if (firstNumber < secondNumber) {
  console.log(
    `the second number ${secondNumber} is bigger, then the first number ${firstNumber}`
  );
} else {
  console.log("the numbers are equal");
}
