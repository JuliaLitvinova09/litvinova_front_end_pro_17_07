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

function validateFields() {
  let inputName = document.getElementsByName("name")[0];
  let inputAmount = document.getElementsByName("amount")[0];
  let inputCity = document.getElementsByName("city")[0];
  let inputPost = document.getElementsByName("store")[0];
  let inputPay = document.getElementsByName("pay")[0];

  if (inputName.value.length === 0) {
    inputName.setCustomValidity("поле не заповнено!");
    inputName.reportValidity();

    return false;
  }

  if (inputCity.value.length === 0) {
    inputCity.setCustomValidity("не заповнено місто!");
    inputCity.reportValidity();

    return false;
  }
  if (inputPost.value.length === 0) {
    inputPost.setCustomValidity("не заповнена пошта!");
    inputPost.reportValidity();

    return false;
  }

  if (inputAmount.value <= 0) {
    inputAmount.setCustomValidity("поле має бути більше 1");
    inputAmount.reportValidity();

    return false;
  }
  if (getCheckedItems("pay").length === 0) {
    inputPay.setCustomValidity("не заповнена форма оплати!");
    inputPay.reportValidity();

    return false;
  }
  return true;
}

function showData() {
  const form = document.getElementById("mainForm");
  const container = document.getElementById("order");

  const cities = {
    OD: "Одеса",
    DN: "Дніпро",
    KV: "Київ",
  };

  if (!validateFields()) {
    return;
  }
  let nameValue = document.getElementsByName("name")[0].value;
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
}

document.getElementById("save").addEventListener("click", (event) => {
  showData();
});
