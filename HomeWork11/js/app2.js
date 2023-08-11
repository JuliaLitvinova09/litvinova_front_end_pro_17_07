// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
//  В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия,
// указанного в переменной znak. Оба числа и знак получаются от пользователя

function getData(text, neadStr = false) {
  let value;
  do {
    value = prompt(text);
  } while ((!neadStr && isNaN(value)) || !(neadStr && !itIsSign(value)));
  return value;
}

function itIsSign(text) {
  //поиск будет -1, если не нашли знак, или кроме знака есть что-то еще
  return text.search(/[^+\-*/%^]/) === -1 || text.length !== 1;
}

function doMath(x, znak, y) {
  return eval(x + znak.replace("^", "**") + y);
}

let x = getData("Введите x");
let y = getData("Введите y");
let sign = getData("Введите знак", true);

let result = doMath(x, sign, y);
console.log(result);
