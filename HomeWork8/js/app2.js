// Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Визначити кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, решту занулити.

let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let sumPositiveElements = 0;
let countPositiveElements = 0;

let minElement = 0;
let indexOfMinElement = 0;

let maxElement = 0;
let indexOfMaxElement = 0;

let countOfNegativeElements = 0;

let countOfNotEvenPositiveElements = 0;
let countOfEvenPositiveElements = 0;

let sumOfNotEvenPositiveElements = 0;
let sumOfEvenPositiveElements = 0;

let multOfPositiveElements = 1;

for (let i = 0; i < arr.length; i++) {
  if (minElement > arr[i]) {
    minElement = arr[i];
    indexOfMinElement = i;
  } else {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
      indexOfMaxElement = i;
    }
  }
  if (arr[i] > 0) {
    countPositiveElements++;
    sumPositiveElements += arr[i];
    multOfPositiveElements *= arr[i];

    if (arr[i] % 2 === 0) {
      //even number
      countOfEvenPositiveElements++;
      sumOfEvenPositiveElements += arr[i];
    } else {
      countOfNotEvenPositiveElements++;
      sumOfNotEvenPositiveElements += arr[i];
    }
  } else if (arr[i] < 0) {
    countOfNegativeElements++;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== maxElement) {
    arr[i] = 0;
  }
}

document.write(
  `<p> Сума позитивних єлементів: ${sumPositiveElements} та їх кількість:  ${countPositiveElements}</p>`
);

document.write(
  `<p> Максимальний елемент масиву: ${maxElement}, його порядковий номер:  ${
    indexOfMaxElement + 1
  }, індекс в масиві:  ${indexOfMaxElement}</p>`
);
document.write(
  `<p> Мінімальний елемент масиву: ${minElement}, його порядковий номер:  ${
    indexOfMinElement + 1
  }, індекс в масиві:  ${indexOfMinElement}</p>`
);

document.write(
  `<p> Кількіть негативних елементів: ${countOfNegativeElements}</p>`
);

document.write(
  `<p> Кількість непарних позитивних елементів: ${countOfNotEvenPositiveElements}</p>`
);

document.write(
  `<p> Кількість парних позитивних елементів: ${countOfEvenPositiveElements}</p>`
);

document.write(
  `<p> Сума парних позитивних елементів: ${sumOfEvenPositiveElements}</p>`
);

document.write(
  `<p> Сума непарних позитивних елементів: ${sumOfNotEvenPositiveElements}</p>`
);

document.write(
  `<p> Добуток позитивних елементів: ${multOfPositiveElements}</p>`
);

document.write(`<p> Result array: ${arr}</p>`);
