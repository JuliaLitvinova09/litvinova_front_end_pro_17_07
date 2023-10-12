// let room1 = [
//   new Person("Jula", "Litvinova", 35),
//   new Person("Sergey", "Litvinov", 34),
// ];
// let room2 = [new Person("Nansy", "Rttt", 35), new Person("Kit", "Dfhhfhf", 34)];

// let appartments = [new Appartment(1, room1), new Appartment(2, room2)];

// let house = [
//   new House("Крещатик, Киев", appartments),
//   new House("Воскресенская, Днепр", appartments),
// ];

// console.log(JSON.stringify(House));

// const getTableData = (data) => {
//   //console.log(fields);
//   const table = document.querySelector(".table");
//   const tbody = document.createElement("tbody");
//   tbody.id = "tableTbody";
//   data.forEach((x) => {
//     const tr = document.createElement("tr");
//     const fragment = document.createDocumentFragment();
//     const keys = Object.keys(data[0]);
//     keys.forEach((y) => {
//       let td = undefined;
//       if (y === "ticker") {
//         td = document.createElement("th");
//         td.scope = "row";
//       } else {
//         td = document.createElement("td");
//       }
//       td.innerText = x[y];
//       fragment.appendChild(td);
//     });
//     tr.appendChild(fragment);
//     tbody.appendChild(tr);
//     table.appendChild(tbody);
//   });
// };

// let result = "[";
// function func(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       func(obj[key]);
//     } else {
//       // console.log(obj[key]);
//       result = result + JSON.stringify(obj[key]) + ",";
//     }
//   }
// }

let result = "[";
function func(obj) {
  for (let key in obj) {
    if (obj[key] instanceof House) {
      result += "{";
      func(obj[key]);
      result += "},";
    } else if (obj[key] instanceof Object) {
      // result += "{";
      func(obj[key]);
      // result += "}";
    } else {
      // console.log(obj[key]);
      result = result + `${key}:${obj[key]},`;
    }
  }
}
const getTableData = (data) => {
  //console.log(fields);
  const table = document.querySelector(".table");
  table.innerHTML = "";
  const tbody = document.createElement("tbody");
  tbody.id = "tableTbody";
  let innerText = "";
  data.forEach((house) => {
    const tr = document.createElement("tr");
    const fragment = document.createDocumentFragment();
    const keys = Object.keys(data[0]);
    keys.forEach((column) => {
      let td = undefined;
      if (column === "ticker") {
        td = document.createElement("th");
        td.scope = "row";
      } else if (Array.isArray(house[column])) {
        house[column].forEach((column2) => {
          td = document.createElement("td");
          innerText = house[column][column2];
        });
      } else {
        td = document.createElement("td");
        innerText = house[column];
      }
      td.innerText = innerText;
      fragment.appendChild(td);
    });
    tr.appendChild(fragment);
    tbody.appendChild(tr);
    table.appendChild(tbody);
  });

  result = "[";
  func(houses);
  result += "]";

  // console.log(houses[0].addres);
  // console.log(houses[0].appartments[0].fullName);
  console.log(result);
};
