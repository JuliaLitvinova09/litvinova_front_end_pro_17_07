//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let startIndex = 1;
let endIndex = 100;

let inputNumber = parseInt(prompt("enter the number", 0));

let resVal;

for (let i = 1; i <= endIndex; i++) {
  resVal = Math.pow(i, 2);
  if (resVal <= inputNumber) {
    console.log(
      `Квадрат числа ${i} дорівнює ${resVal}, та не перевищує ${inputNumber}`
    );
  }
}
