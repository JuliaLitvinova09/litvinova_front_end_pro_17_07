//Вивести всі числа в діапазоні від 100 до 200, які кратні 3

let startIndex = 100;
let endIndex = 200;

for (let i = startIndex; i <= endIndex; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
