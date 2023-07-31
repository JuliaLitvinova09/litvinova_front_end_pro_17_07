// Вивести на сторінку в один рядок через кому числа від 10 до 20

let startIndex = 10;
let endIndex = 20;

let resultStr = "";

for (let i = startIndex; i <= endIndex; i++) {
  resultStr += `${i}` + (i !== endIndex ? ", " : "");
}

console.log(resultStr);
