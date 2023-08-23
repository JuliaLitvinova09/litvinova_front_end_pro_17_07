// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список з елементів:
// Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3], 3])
// то робити вкладений список. Для перевірки масиву використовуйте Array.isArray()

let array = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
  const arrLength = array.length;

  const wrapper = document.getElementById("wrapper");
  const ul = document.createElement("ul");

  for (let i = 0; i < arrLength; ++i) {
    const li = document.createElement("li");
    let ulRow = array[i];
    if (Array.isArray(ulRow)) {
      const ulWr = document.createElement("ul");
      for (let j = 0; j < ulRow.length; ++j) {
        const liWr = document.createElement("li");
        liWr.textContent = ulRow[j];

        ulWr.appendChild(liWr);
      }
      li.appendChild(ulWr);
    } else {
      li.textContent = ulRow;
    }
    ul.appendChild(li);
  }
  wrapper.appendChild(ul);
}

generateList(array);
