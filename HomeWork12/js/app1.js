// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5);
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

let userArray = [];

function inputArrayLength(text) {
  let value;
  do {
    value = +prompt(text);
  } while (isNaN(value) || value < 1);

  return value;
}

function fillArray() {
  let lengthArray = inputArrayLength("Введите длину массива");
  let elem;

  for (let i = 0; i < lengthArray; i++) {
    elem = prompt(`Введите значение элемента:  ${i + 1}`);
    userArray.push(elem);
  }
}

function removeElement(array, elToDel) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elToDel) {
      array.splice(i, 1);
    }
  }
}

fillArray();

console.log(userArray, "Input array");

elem = prompt(`Введите значение элемента массива, которое хотите удалить`);

removeElement(userArray, elem);

console.log(userArray, "Result array");
