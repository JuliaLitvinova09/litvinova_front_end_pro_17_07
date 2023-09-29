const API_PEOPLE = "https://swapi.dev/api/people";
const API_PLANETS = "https://swapi.dev/api/planets";
const API_TR = "https://swapi.dev/api/vehicles";

let btnPeople = document.getElementById("btn-people");
let parentGroupPeople = document.getElementById("list-group-people");
let btnGroupPeopleMore = document.getElementById("btn-people-next");

let btnPlanets = document.getElementById("btn-planets");
let parentGroupPlanets = document.getElementById("list-group-planets");
let btnGroupPlanetsMore = document.getElementById("btn-planets-next");

let btnVehicles = document.getElementById("btn-vehicles");
let parentGroupVehicles = document.getElementById("list-group-vehicles");
let btnGroupVehiclesMore = document.getElementById("btn-vehicles-next");

let elRef = document.getElementsByClassName("list-group");

function addItems(url, parentGroup, btnGroupMore) {
  let currentUrl = btnGroupMore.getAttribute("value");
  currentUrl = currentUrl ? currentUrl : url;

  axios.get(currentUrl).then((result) => {
    let respose = result.data.results;
    if (result.data.next) {
      btnGroupMore.setAttribute("value", result.data.next);
      btnGroupMore.classList.remove("invisible");
    } else {
      btnGroupMore.classList.add("invisible");
    }

    respose.forEach((item) => {
      const container = createElement(
        "li",
        parentGroup,
        item.name,
        {
          className: "list-group-item list-group-item-action",
          "atr-id": item.url,
        },
        { click: handleViewDetails }
      );
    });
  });
}
function detailsWindow(info, url) {
  axios.get(url).then((result) => {
    let respose = result.data;

    let textContent = "";
    for (let key in respose) {
      textContent += `${key} : ${respose[key]}\n`;
    }

    const viewModal = document.getElementById("viewModal");
    if (viewModal) {
      let myModal = new bootstrap.Modal(viewModal, {
        keyboard: false,
      });

      const modalBodyInput = viewModal.querySelector(".modal-body input");
      const modalAbout = document.getElementById("message-text");
      modalAbout.innerHTML = textContent;
      modalBodyInput.value = info;
      myModal.show();
    }
  });
}

function fillList(url, parentGroup, btnGroupMore) {
  cleanElement(parentGroup);
  addItems(url, parentGroup, btnGroupMore);
  parentGroup.classList.remove("invisible");
}

function updateList(url, parentGroup, btnGroupMore) {
  cleanElement(parentGroupPeople);
  addItems(url, parentGroup, btnGroupMore);
  parentGroup.classList.remove("invisible");
}

btnPeople.addEventListener("click", () => {
  fillList(API_PEOPLE, parentGroupPeople, btnGroupPeopleMore);
});

btnGroupPeopleMore.addEventListener("click", () => {
  addItems(API_PEOPLE, parentGroupPeople, btnGroupPeopleMore);
});

btnPlanets.addEventListener("click", () => {
  fillList(API_PLANETS, parentGroupPlanets, btnGroupPlanetsMore);
});

btnGroupPlanetsMore.addEventListener("click", () => {
  addItems(API_PLANETS, parentGroupPlanets, btnGroupPlanetsMore);
});

btnVehicles.addEventListener("click", () => {
  fillList(API_TR, parentGroupVehicles, btnGroupVehiclesMore);
});

btnGroupVehiclesMore.addEventListener("click", () => {
  addItems(API_TR, parentGroupVehicles, btnGroupVehiclesMore);
});

function handleViewDetails(event) {
  const currentUrl = event.target.getAttribute("atr-id");

  detailsWindow(event.target.textContent, currentUrl);
}
