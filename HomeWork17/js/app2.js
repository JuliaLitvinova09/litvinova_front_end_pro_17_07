// На сторінці є дві кнопки. При натисканні на першу кнопку просимо
// користувача ввести в prompt посилання, при натисканні на другу -
//  переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо

let ref = "";

document
  .getElementById("btn-input")
  .addEventListener("click", function (event) {
    event.preventDefault();
    ref = prompt("Введите ссылку:").trim();
    if (ref) {
      ref =
        ref.includes("http") || ref.includes("https") ? ref : "https://" + ref;

      const btnGoDiv = document.getElementById("btn-go");
      btnGoDiv.classList.toggle("inv");
      const btnGo = document.getElementById("link-go");

      btnGo.addEventListener("click", function (event) {
        btnGo.setAttribute("href", ref);
      });
    }
  });
