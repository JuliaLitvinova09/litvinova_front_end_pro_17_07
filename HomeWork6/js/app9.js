//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//Визначити кількість його парних дільників
//Знайти суму його парних дільників

let inputNumber = parseInt(prompt("enter the number", 0));
let countEven = 0;
let sumEven = 0;

for (let i = 1; i <= inputNumber; i++) {
  if (inputNumber % i === 0) {
    console.log(i, "Дільник числа " + inputNumber);

    if (i % 2 === 0) {
      countEven++;
      sumEven += i;
    }
  }
}

console.log(
  `кількість парних дільників числа ${inputNumber} дорівнює ${countEven}`
);
console.log(`сума парних дільників числа ${inputNumber} дорівнює ${sumEven}`);
