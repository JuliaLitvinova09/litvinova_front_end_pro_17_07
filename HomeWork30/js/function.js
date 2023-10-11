// Користувач заповнює дані для будинку, ввів кількість квартир, нажав “далі”
// Після цього бачить поля для заповнення по першій квартирі, нажав “далі”
// Там ввів, що в цій квартирі будуть жити 2 людини, нажав “далі”
// Заповнюємо дані по 1 людині, “далі”
// Заповнюємо дані по 2й людині, “далі”
// заповнюємо дані по 2й квартирі, і так далі далі далі
let currentTab = 0; // Устанавливаем первую (0) вкладку как текущую
let countApps = 1;
let countPeoples = 1;

let currentApp = 1;
let currentPeople = 1;

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

  if (n === 1 && !validateForm()) return false;

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
    document.getElementById("regForm").submit();
    return false;
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
  let el = document.getElementById("fullName");
  el.value = "";

  el = document.getElementById("age");
  el.value = "";

  if (countPeoples == currentPeople) {
    currentPeople = 1;
    currentApp++;
    el = document.getElementById("countPeoples");
    el.value = "";

    if (currentApp > countApps) {
      currentTab = 0;
      currentPeople = 1;
      currentApp = 1;
      nextPrev(4);
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
