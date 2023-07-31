// Вивести суму лише парних чисел у діапазоні від 30 до 80

let startIndex = 30;
let endIndex = 80;

let sum = 0;

for (let i = startIndex; i <= endIndex; i++) {
  sum += i % 2 === 0 ? i : 0;
}

console.log(sum);
