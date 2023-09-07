function getCheckedItems(name) {
  var items = document.getElementsByName(name);
  var itemsChecked = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      itemsChecked.push(items[i].value);
    }
  }
  return itemsChecked;
}

function insertRowToTabl(table, name, value) {
  let row = table.insertRow();
  let cell = row.insertCell();
  cell.innerHTML = name;

  let cell2 = row.insertCell();
  cell2.innerHTML = value;
}

function showData() {
  const form = document.getElementById("mainForm");
  const container = document.getElementById("order");

  const cities = {
    OD: "Одеса",
    DN: "Дніпро",
    KV: "Київ",
  };

  let name = document.getElementsByName("name");
  let nameValue = document.getElementsByName("name")[0].value;

  if (nameValue.length === 0) {
    name.innerHTML = "*данное поле обязательно для заполнения";
    return;
  }
  let amount = document.getElementsByName("amount")[0].value;
  let comment = document.getElementsByName("comment")[0].value;

  const h1 = document.createElement("h1");
  h1.innerHTML = "Ваше замовлення:";
  container.append(h1);

  const table = document.createElement("table");
  container.appendChild(table);

  insertRowToTabl(table, "ПІБ", nameValue);
  insertRowToTabl(table, "Товар:", currentProduct.name);
  insertRowToTabl(table, "кількість", amount);

  insertRowToTabl(table, "Оплата", getCheckedItems("pay"));
  insertRowToTabl(table, "Місто", cities[form.city.value]);
  insertRowToTabl(table, "Примітка до замовлення", comment);

  //    const container = document.getElementById("order");
  //     const h1 = document.createElement("h1");
  //     h1.innerHTML = "Помилка!";
  //     container.append(h1);
}

document.getElementById("save").addEventListener("click", (event) => {
  showData();
});
