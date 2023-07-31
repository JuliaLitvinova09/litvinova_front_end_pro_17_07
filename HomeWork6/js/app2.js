//Вивести квадрати чисел від 10 до 20

let startIndex = 10;
let endIndex = 20;

let resultStr = "";
let resVal = 0;

for (let i = startIndex; i <= endIndex; i++) {
  resVal = Math.pow(i, 2);
  resultStr += `${resVal}` + (i !== endIndex ? ", " : "");
}

console.log(resultStr);
