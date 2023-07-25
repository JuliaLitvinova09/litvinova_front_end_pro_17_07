// Дано два різні числа. Визначити, яке з них більше, а яке менше.

let firstNumber = parseInt(prompt("enter the first number", 0));
let secondNumber = parseInt(prompt("enter the second number", 0));

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
