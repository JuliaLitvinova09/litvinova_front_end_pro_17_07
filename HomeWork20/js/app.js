function getCheckedItems(items) {
  const values = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      values.push(items[i].value);
    }
  }
  return values;
}

function showData() {
  const form = document.getElementById("mainForm");
  const container = document.getElementById("container");

  table = document.createElement("table");
  container.appendChild(table);

  for (let field of form.elements) {
    if (field.name) {
      if (
        field.type !== "radio" &&
        field.type !== "checkbox" &&
        field.type !== "select-one"
      ) {
        console.log(field.type, field.value);
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = field.name;

        let cell2 = row.insertCell();
        cell2.innerHTML = field.value;
      } else if (field.type === "checkbox") {
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = field.name;

        let cell2 = row.insertCell();
        console.log(field.type, getCheckedItems(field.value));
        cell2.innerHTML = getCheckedItems(field.value);
      }
    }
  }
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
