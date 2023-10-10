// const columnDefs = [
//   { field: "country" },
//   { field: "athlete" },
//   { field: "age" },
//   { field: "sport" },
//   { field: "year" },
//   { field: "date" },
//   { field: "gold" },
//   { field: "silver" },
//   { field: "bronze" },
//   { field: "total" },
// ];

const columnDefs = [
  { field: "adress", rowGroup: true },
  { field: "number" },
  { field: "appartments"[{ field: "people", field: "roomsAmount" }] },
  // { field: "people" },
  { field: "name" },
  { field: "surname" },
  { field: "age" },
];

const defaultColDef = {
  resizable: true,
  enableRowGroup: true,
};

function printColumns() {
  const cols = gridOptions.columnApi.getAllGridColumns();
  console.log("Grid Cols", cols);
}

const gridOptions = {
  suppressDragLeaveHidesColumns: true,
  suppressMakeColumnVisibleAfterUnGroup: true,
  sideBar: false,
  rowGroupPanelShow: "always", // always|onlyWhenGrouping|never
  // groupDisplayType: 'singleColumn',
  // groupDisplayType: 'multipleColumns',
  // groupDisplayType: 'groupRows',
  // groupDisplayType: 'custom',
  columnDefs: columnDefs,
  defaultColDef: defaultColDef,
  animateRows: true,
  // groupHideOpenParents: true,
  // showOpenedGroup: true,
  // groupRowRenderer: 'agGroupCellRenderer',
  // groupRowRendererParams: {
  //     suppressCount: true,
  //     innerRenderer: p => '<b>'
  //                     + p.value
  //                     + '</b>'
  //                     + ' --- Bob, if your reading this, I slept '
  //                     + ' with your wife at the Christmas Party '
  // },
  autoGroupColumnDef: {
    // cellRendererParams: 'agGroupCellRenderer',
    cellRendererParams: {
      // suppressCount: true,
      // checkbox: true,
      // innerRenderer: p => '<b>' + p.value + '</b>'
    },
  },
};

const eGridDiv = document.getElementById("myGrid");
new agGrid.Grid(eGridDiv, gridOptions);

// fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
//   .then((response) => response.json())
//   .then((data) => {
//     gridOptions.api.setRowData(data);
//   });

let room1 = [
  new Person("Jula", "Litvinova", 35),
  new Person("Sergey", "Litvinov", 34),
];
let room2 = [new Person("Nansy", "Rttt", 35), new Person("Kit", "Dfhhfhf", 34)];

let appartments = [new Appartment(1, room1), new Appartment(2, room2)];

let house = [
  new House("Крещатик, Киев", appartments),
  new House("Воскресенская, Днепр", appartments),
];

gridOptions.api.setRowData(house);
