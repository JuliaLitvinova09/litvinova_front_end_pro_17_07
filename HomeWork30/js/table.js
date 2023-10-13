function createTableTitle(table) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  let th = document.createElement("th");
  th.scope = "col";
  th.innerText = "Адрес/номер квартиры";
  tr.appendChild(th);

  th = document.createElement("th");
  th.scope = "col";
  th.innerText = "Фамилия";
  tr.appendChild(th);

  th = document.createElement("th");
  th.scope = "col";
  th.innerText = "Возраст";
  tr.appendChild(th);

  thead.appendChild(tr);
  table.appendChild(thead);
}

function createTableRow(table, arg) {
  const tr = document.createElement("tr");

  let th = document.createElement("th");
  th.innerText = `${!arg.adress ? "" : arg.adress}${
    !arg.appartment ? "" : arg.appartment
  }`;
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerText = `${!arg.fullName ? "" : arg.fullName}`;
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerText = `${!arg.age ? "" : arg.age}`;
  tr.appendChild(th);

  table.appendChild(tr);
}

const getTableData = (data) => {
  let i = 0;
  const table = document.querySelector(".table");
  table.innerHTML = "";
  createTableTitle(table);
  const tbody = document.createElement("tbody");

  data.forEach((house) => {
    const keys = Object.keys(data[0]);
    keys.forEach((column) => {
      let td = undefined;

      if (column === "adress") {
        createTableRow(tbody, house);
      } else if (column === "appartments") {
        appartments = house[column];
        i = 0;
        appartments.forEach((appartment) => {
          i++;
          createTableRow(tbody, { appartment: `Квартира # ${i}` });

          appartment.forEach((person) => {
            createTableRow(tbody, person);
          });
        });
      }
    });

    table.appendChild(tbody);
  });
};
