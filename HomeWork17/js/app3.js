// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let table = document.getElementById("table");
for (let i = 0; i < 100; i = i + 10) {
  let row = table.insertRow();
  for (let j = 1; j <= 10; j++) {
    let cell = row.insertCell();
    cell.innerHTML = i + j;
  }
}
