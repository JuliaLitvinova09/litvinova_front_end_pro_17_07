//Надрукувати повну таблицю множення від 1 до 10
let endIndex = 10;

let resVal;

for (let i = 1; i <= endIndex; i++) {
  console.log(`Таблиця множення на ${i}`);
  for (let j = 1; j <= endIndex; j++) {
    resVal = i * j;
    console.log(`${i}*${j}=${resVal}`);
  }
}
