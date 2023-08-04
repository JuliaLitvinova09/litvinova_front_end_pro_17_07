// Створити масив, довжину та елементи якого задає користувач.
// Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно).
// У міру змін виводити вміст масиву на сторінку.

let arr = [];
let arrLength = parseInt(prompt("Enter lenght of array", 0));
let num;

for (let i = 0; i < arrLength; i++) {
  num = prompt("Enter digit #" + (i + 1));
  arr.push(num);
}

document.write("<p> Start array: " + arr + "</p>");
document.write("<p> Sorted array: " + arr.sort() + "</p>");
document.write("<p> Removed part of array: " + arr.splice(2, 3) + "</p>");
document.write("<p> Result array: " + arr + "</p>");
