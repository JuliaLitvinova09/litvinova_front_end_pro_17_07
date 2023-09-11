let ordersList = [];
const cities = {
  OD: "Одеса",
  DN: "Дніпро",
  KV: "Київ",
};

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
  let comment = document.getElementsByName("comment")[0].value;
  let valPay = getCheckedItems("pay");

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
  if (valPay.length === 0) {
    inputPay.setCustomValidity("не заповнена форма оплати!");
    inputPay.reportValidity();

    return false;
  }

  let orderToSave = {
    name: inputName.value,
    sku: currentProduct.name,
    amount: inputAmount.value,
    pay: valPay,
    city: cities[inputCity.value],
    comment: comment,
    date: new Date().toLocaleDateString(),
    price: currentProduct.price,
  };

  ordersList.push(orderToSave);
  localStorage.setItem("ordersList", JSON.stringify(ordersList));
  return true;
}

function addTable(table, order) {
  insertRowToTabl(table, "Дата замовлення", order.date);
  insertRowToTabl(table, "ПІБ", order.name);
  insertRowToTabl(table, "Товар:", order.sku);
  insertRowToTabl(table, "кількість", order.amount);
  insertRowToTabl(table, "ціна", order.price);
  insertRowToTabl(table, "Оплата", order.pay);
  insertRowToTabl(table, "Місто", order.city);
  insertRowToTabl(table, "Примітка до замовлення", order.comment);
}

function showOrder(order, index, details) {
  const container = document.getElementById("orders");
  container.classList.remove("invisible");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Ваше замовлення #:" + (index + 1);
  container.append(h1);

  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.textContent = "X";
  btn.setAttribute("data-task-index", index);
  const table = document.createElement("table");
  if (details) {
    container.appendChild(h1);

    h1.appendChild(table);
    addTable(table, order);
  } else {
    h1.innerHTML = `${h1.innerHTML} ( від ${order.date}, сума:  ${
      order.amount * order.price
    } )`;
    container.appendChild(h1);

    h1.appendChild(btn);
  }
  h1.addEventListener("click", () => {
    h1.appendChild(table);
    addTable(table, order);
  });

  btn.addEventListener("click", () => {
    ordersList.splice(index, 1);
    localStorage.setItem("ordersList", JSON.stringify(ordersList));
    h1.remove();
    table.remove();
  });
}

function showOrders() {
  ordersList.map((order, index) => showOrder(order, index, false));
}

document.getElementById("save").addEventListener("click", (event) => {
  if (validateFields()) {
    showOrder(ordersList[ordersList.length - 1], ordersList.length - 1, true);
  }
});

window.addEventListener("load", () => {
  ordersList = JSON.parse(localStorage.getItem("ordersList")) || [];
});

let btnOrders = document.getElementById("my-orders");
btnOrders.addEventListener("click", (event) => {
  if (event.target.defaultValue === "Мої замовлення") {
    const elForm = document.getElementById("main");
    elForm.classList.add("invisible");

    const elForm2 = document.getElementById("order");
    elForm2.classList.add("invisible");

    const elOrders = document.getElementById("orders");
    elOrders.classList.remove("invisible");

    let divs = document.querySelectorAll("#orders");
    for (let div of divs) {
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
    }

    showOrders();
    btnOrders.value = "Повернутись до магазину";
  } else {
    btnOrders.value = "Мої замовлення";
    const elForm = document.getElementById("main");
    elForm.classList.remove("invisible");
    const elFormOrders = document.getElementById("orders");

    let chlds = document.querySelectorAll("#orders");
    for (let chld of chlds) {
      while (chld.firstChild) {
        chld.removeChild(chld.firstChild);
      }
    }
    elFormOrders.classList.add("invisible");
    showCategories();
  }
});
