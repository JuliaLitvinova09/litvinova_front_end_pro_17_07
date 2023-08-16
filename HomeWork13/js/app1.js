// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
// Ступінь передається як другий аргумент у функцію
// pow(num, degree)

function getData(text, itsDegree = false) {
  let value;
  do {
    value = parseInt(prompt(text));
  } while (isNaN(value) || (itsDegree && value > 10));

  return value;
}

function pow(num, degree) {
  if (degree > 1) {
    return num * pow(num, degree - 1);
  }

  return num;
}

let num = getData("Введите число");
let degree = getData("Введите степень (до 10)", true);

let result = pow(num, degree);
console.log(result);
