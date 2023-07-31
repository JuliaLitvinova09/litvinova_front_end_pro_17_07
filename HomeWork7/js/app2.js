//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let startIndex = 10;
let endIndex = 100;
let step = 10;

let course = 40;
let sum;

for (let i = startIndex; i <= endIndex; i += step) {
  sum = course * i;
  console.log(`${i} доларів коштує ${sum} гривень`);
}
