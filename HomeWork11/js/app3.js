// Написать функцию заполнения пользовательскими данными двумерного массива.
// Длину основного массива и внутренних массивов задаёт пользователь.
// Значения всех элементов всех массивов задаёт пользователь.

let userArray = [];

function inputArrayLength(text) {
  let value;
  do {
    value = +prompt(text);
  } while (isNaN(value) || value < 1);

  return value;
}

function fillRow(numRow) {
  let lenSub;
  let elem;

  lenSub = inputArrayLength(
    `Введите количество елементов внутренного массива №  ${numRow + 1}`
  );
  for (let j = 0; j < lenSub; j++) {
    elem = prompt(
      `Массив # ${numRow + 1}. Введите значение элемента:  ${j + 1}`
    );
    userArray[numRow].push([elem]);
  }
}

function fillArray() {
  let lenMain = inputArrayLength("Введите длину основного массива");

  for (let i = 0; i < lenMain; i++) {
    userArray[i] = [];

    fillRow(i);
  }
}

fillArray();
console.log(userArray);
