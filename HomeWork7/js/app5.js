//Дано деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий ступінь.
//(Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

let inputNumber = parseInt(prompt("enter the number", 0));
let divisor = 3;
let pow = 0;

while (inputNumber % divisor === 0) {
  inputNumber /= divisor;
  pow++;
}
console.log(
  inputNumber === 1
    ? "Число можна одержати, ступінь:" + pow
    : "Число не можна одержати"
);
