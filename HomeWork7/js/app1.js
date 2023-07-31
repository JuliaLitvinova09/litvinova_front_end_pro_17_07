// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)

let startIndex = 20;
let endIndex = 30;
let step = 0.5;

let resultStr = "";

for (let i = startIndex; i <= endIndex; i += step) {
  resultStr += `${i}` + (i !== endIndex ? " " : "");
}

console.log(resultStr);
