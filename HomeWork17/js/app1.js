// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється
// <div> з інформацією. При зникненні фокуса - так само пропадає

const parent = document.getElementById("wrapper");
const inputTxt = document.getElementById("name");

function addElement() {
  const infoText = document.createElement("div");
  infoText.setAttribute("id", "name-info");

  infoText.style.display = "inline";
  infoText.innerHTML = "Something needs to be entered here!";

  parent.appendChild(infoText);
}

function removeElement() {
  const el = document.getElementById("name-info");

  el.remove();
}

inputTxt.addEventListener("focus", function (event) {
  addElement();
});

inputTxt.addEventListener("blur", function (event) {
  removeElement();
});
