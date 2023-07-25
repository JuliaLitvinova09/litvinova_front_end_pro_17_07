// Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.

let inputNumber = parseInt(prompt("enter the number", 0));

let firstNumber = ((inputNumber - (inputNumber % 100)) / 100) % 10;
let secondNumber = ((inputNumber - (inputNumber % 10)) / 10) % 10;
let thirdNumber = inputNumber % 10;

let sum = firstNumber + secondNumber + thirdNumber;
let mult = firstNumber * secondNumber * thirdNumber;

console.log(
  "У числа " +
    inputNumber +
    " сума цифр =  " +
    sum +
    (sum % 2 === 0 ? " є парною" : " є не парною")
);
console.log(
  "У числа " +
    inputNumber +
    " сума цифр = " +
    sum +
    (sum % 5 === 0 ? " є " : " не є ") +
    " кратною п'яти"
);

console.log(
  "Добуток цифр числа " +
    inputNumber +
    " дорівнює " +
    mult +
    (mult > 100
      ? " та більше 100 "
      : mult < 100
      ? " та менше 100 "
      : " дорівнює 100")
);
