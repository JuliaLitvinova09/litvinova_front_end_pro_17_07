//Вивести таблицю множення на 7

let num = 7;
let endIndex = 10;

let resVal;

for (let i = 1; i <= endIndex; i++) {
  resVal = num * i;
  console.log(`${i}*${num}=${resVal}`);
}
