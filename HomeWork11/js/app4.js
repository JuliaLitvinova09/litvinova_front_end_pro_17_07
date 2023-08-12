// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
//  'func("hello world", ['l', 'd'])' вернет нам "heo wor".
//  Исходную строку и символы для удаления задаёт пользователь

function removeSymbols(inputText, remSymbols) {
  for (let i = 0; i < remSymbols.length; i++) {
    inputText = inputText.replaceAll(remSymbols[i], "");
  }
  return inputText;
}

let inputText = prompt("Введите строку:");
let remSymbols = prompt("Введите символы, которые нужно удалить:");

console.log(removeSymbols(inputText, remSymbols), "Result string");
