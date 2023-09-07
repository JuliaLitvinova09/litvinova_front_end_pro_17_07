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

  table = document.createElement("table");
  container.appendChild(table);

  let checkboxIsViewed = false;
  let radioIsViewed = false;

  const cities = {
    OD: "Odessa",
    DN: "Dnipro",
    KV: "KIYV",
  };

  for (let field of form.elements) {
    if (field.name) {
      if (
        field.type == "text" ||
        field.type == "textarea" ||
        field.type == "date"
      ) {
        insertRowToTabl(table, field.name, field.value);
      } else if (field.type === "checkbox" && !checkboxIsViewed) {
        insertRowToTabl(table, field.name, getCheckedItems(field.name));
        checkboxIsViewed = true;
      } else if (!radioIsViewed) {
        insertRowToTabl(table, field.name, getCheckedItems(field.name));
        radioIsViewed = true;
      }
    }
  }
  insertRowToTabl(table, "city", cities[form.city.value]);
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
