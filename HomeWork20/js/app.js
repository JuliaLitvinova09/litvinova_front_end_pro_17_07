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
  const container = document.getElementById("container");

  const table = document.createElement("table");
  container.appendChild(table);

  const cities = {
    OD: "Odessa",
    DN: "Dnipro",
    KV: "KIYV",
  };

  let name = document.getElementsByName("name")[0].value;
  let surName = document.getElementsByName("surname")[0].value;
  let dateOfBirth = document.getElementsByName("dateOfBirth")[0].value;

  insertRowToTabl(table, "name", name);
  insertRowToTabl(table, "surname", surName);
  insertRowToTabl(table, "dateOfBirth", dateOfBirth);

  insertRowToTabl(table, "gender", getCheckedItems("gender"));
  insertRowToTabl(table, "city", cities[form.city.value]);
  insertRowToTabl(table, "languages", getCheckedItems("languages"));
}

function removeForm() {
  const form = document.querySelector("form");
  const parent = form.parentNode;
  parent.removeChild(form);
}

document.getElementById("save").addEventListener("click", (event) => {
  showData();
  removeForm();
});
