// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список з елементів:
// Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3], 3])
// то робити вкладений список. Для перевірки масиву використовуйте Array.isArray()

let array = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
  let text = "<ul>";
  let arrLength = array.length;
  let ulRow;

  for (let i = 0; i < arrLength; ++i) {
    ulRow = array[i];
    if (Array.isArray(ulRow)) {
      text = text + " <li><ul>";
      for (let j = 0; j < ulRow.length; ++j) {
        text = text + `<li>${ulRow[j]}</li>`;
      }
      text = text + "</ul></li>";
    } else {
      text = text + `<li>${ulRow}</li>`;
    }
  }
  text = text + "</ul>";
  document.body.innerHTML = text;
}

generateList(array);
