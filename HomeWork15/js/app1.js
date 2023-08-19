// Реалізуйте функцію generateKey(length, characters),
// що повертає рядок випадкових символів із набору characters довжиною length.

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function getLength(text) {
  let value;
  do {
    value = prompt(text);
  } while (isNaN(value) || value <= 0);

  return value;
}

function generateKey(length, characters) {
  let psw = "";
  let lenInputStr = characters.length;
  for (let i = 0; i < length; i++) {
    psw = psw + characters[parseInt((lenInputStr - 1) * Math.random())];
  }

  return psw;
}

let length = getLength("Input length");
let result = generateKey(length, characters);

console.log(characters, "Input string");
console.log(result, "password");
