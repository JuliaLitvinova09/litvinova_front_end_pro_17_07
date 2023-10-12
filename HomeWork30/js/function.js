let currentTab = 0;
let countApps = 1;
let countPeoples = 1;

let currentApp = 1;
let currentPeople = 1;
let houses = [];
let appartments = [];
let appartment = [];

function showTab(n) {
  let x = document.getElementsByClassName("tab");
  let el;
  x[n].style.display = "block";

  countApps = document.getElementById("countApp").value;
  countApps = countApps === 0 ? 1 : countApps;
  countPeoples = document.getElementById("countPeoples").value;
  countPeoples = countPeoples === 0 ? 1 : countPeoples;

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else if (currentTab !== 2) {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (currentTab === 1) {
    el = document.getElementById("tab-appartment");
    el.childNodes[0].data = `Количество жильцов в квартире: ${currentApp}`;
  } else if (currentTab === 2) {
    el = document.getElementById("tab-people");
    el.childNodes[0].data = `Квартира: ${currentApp}, данные по жильцу: ${currentPeople}`;
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("nextBtn").innerHTML = "Дальше";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  let x = document.getElementsByClassName("tab");

  // if (n === 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";

  if (currentTab + n === 2) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("prevBtn").style.display = "inline";
  }

  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    currentTab = 0;
  }

  showTab(currentTab);
}

function validateForm() {
  let x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

function addPeople() {
  let elName = document.getElementById("fullName");
  let elAge = document.getElementById("age");

  appartment.push(new Person(elName.value, elAge.value));
  elAge.value = "";
  elName.value = "";

  if (countPeoples == currentPeople) {
    currentPeople = 1;
    currentApp++;
    el = document.getElementById("countPeoples");
    el.value = "";

    appartments.push(appartment);
    appartment = [];

    if (currentApp > countApps) {
      currentPeople = 1;
      currentApp = 1;

      let elAdr = document.getElementById("adress");
      let elcountApp = document.getElementById("countApp");
      houses.push(new House(elAdr.value, appartments));
      getTableData(houses);
      elAdr.value = "";
      elcountApp.value = "";

      appartments = [];
      nextPrev(1);
    } else {
      nextPrev(-1);
    }
  } else {
    currentTab = 2;
    currentPeople++;
    showTab(2);
  }
}

showTab(currentTab);

document.getElementById("prevBtn").addEventListener("click", (event) => {
  nextPrev(-1);
});

document.getElementById("nextBtn").addEventListener("click", (event) => {
  nextPrev(1);
});

document.getElementById("addBtn").addEventListener("click", (event) => {
  addPeople();
});
