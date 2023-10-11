// Користувач заповнює дані для будинку, ввів кількість квартир, нажав “далі”
// Після цього бачить поля для заповнення по першій квартирі, нажав “далі”
// Там ввів, що в цій квартирі будуть жити 2 людини, нажав “далі”
// Заповнюємо дані по 1 людині, “далі”
// Заповнюємо дані по 2й людині, “далі”
// заповнюємо дані по 2й квартирі, і так далі далі далі
let currentTab = 0; // Устанавливаем первую (0) вкладку как текущую
let countApps = 1;
let countPeoples = 1;

showTab(currentTab); // Отображаем текущую вкладку

function showTab(n) {
  // Эта функция отображает заданную вкладку формы ...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... и фиксирует кнопки Назад/Дальше:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else if (currentTab !== 2) {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("nextBtn").innerHTML = "Дальше";
  }
  // ... и запускает функцию, отображающую корректный индикатор этапа:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // Это функция определяет какую вкладку отображать
  countApps = document.getElementById("countApp").value;
  countApps = countApps === 0 ? 1 : countApps;
  countPeoples = document.getElementById("countPeoples").value;
  countPeoples = countPeoples === 0 ? 1 : countPeoples;

  let x = document.getElementsByClassName("tab");

  // Выйти из функции, если какое-нибудь поле текущей вкладки заполнено неверно:
  if (n === 1 && !validateForm()) return false;
  // Скрыть текущую вкладку:
  x[currentTab].style.display = "none";

  if (currentTab + n === 2) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "auto";
    document.getElementById("prevBtn").style.display = "auto";
  }
  // Увеличить или уменьшить номер текущей вкладки на 1:
  currentTab = currentTab + n;

  // если вы достигли конца формы... :
  if (currentTab >= x.length) {
    //...то данные формы отправляются на сервер:
    document.getElementById("regForm").submit();
    return false;
  }
  // Иначе, отображаем нужную вкладку:
  showTab(currentTab);
}

function validateForm() {
  // Это функция проверяет заполнение полей формы
  let x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Цикл, который проверяет каждое поле ввода текущей вкладки:
  for (i = 0; i < y.length; i++) {
    // Если поле пустое...
    if (y[i].value == "") {
      // добавляем ему класс "invalid":
      y[i].className += " invalid";
      // и устанавливаем текущий статус валидности в false:
      valid = false;
    }
  }
  // Если статус валидности true, помечаем этот шаг как завершенный и валидный:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // возвращаем статус валидности
}

function fixStepIndicator(n) {
  // Эта функция удаляет класс "active" у всех этапов...
  let i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... и добавляет класс "active" текущему этапу:
  x[n].className += " active";
}

document.getElementById("prevBtn").addEventListener("click", (event) => {
  nextPrev(-1);
});

document.getElementById("nextBtn").addEventListener("click", (event) => {
  nextPrev(1);
});
