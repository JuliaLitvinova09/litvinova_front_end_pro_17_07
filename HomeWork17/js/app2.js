// На сторінці є дві кнопки. При натисканні на першу кнопку просимо
// користувача ввести в prompt посилання, при натисканні на другу -
//  переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо

let ref = "";

document
  .getElementById("btn-input")
  .addEventListener("click", function (event) {
    event.preventDefault();
    ref = prompt("Введите ссылку:");

    ref =
      ref.includes("http") || ref.includes("https") ? ref : "https://" + ref;

    if (ref) {
      let btnGoDiv = document.getElementsByClassName("wrap-go");
      // console.log(btnGoDiv.cocontains("inv"));
      btnGoDiv.classList.toggle("inv");
      const btnGo = document.getElementById("btn-go");

      btnGo.addEventListener("click", function (event) {
        btnGo.setAttribute("href", ref);
      });
    }
  });
