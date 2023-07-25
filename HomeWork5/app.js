const currentYear = 2023;
let countryOfBirth;
let championName;
let answer;

let yearOfBirth = parseInt(prompt("enter year of birth", 0));

let age = currentYear - yearOfBirth;

let cityOfBirth = prompt("enter city of birth", 0);
let favoritSport = prompt("enter favorite kind of sport", "");

switch (cityOfBirth) {
  case "Київ":
    countryOfBirth = "Україна";
    break;
  case "Вашингтон":
    countryOfBirth = "Сполучені Штати Америки";
    break;
  case "Лондон":
    countryOfBirth = "столиця Англії";
    break;
  default:
    countryOfBirth = "невідома";
}

switch (favoritSport) {
  case "гімнастика":
    championName = "Подкопаєва Лілія";
    break;
  case "фехтування":
    championName = "Харлан Ольга";
    break;
  case "боротьба":
    championName = "Беленюк Жан";
    break;
  default:
    championName = "невідомо";
}

if (!yearOfBirth) {
  answer = `Шкода, що Ви не захотіли ввести свою дату народження!`;
} else {
  answer = `Вік ${age} років.`;
}
if (!cityOfBirth) {
  answer =
    answer +
    `
Шкода, що Ви не захотіли ввести своє місто народження!`;
} else {
  answer =
    answer +
    `
ти живеш у столиці ${countryOfBirth}
ти живеш у місті ${cityOfBirth}`;
}
if (!favoritSport) {
  answer =
    answer +
    `
Шкода, що Ви не захотіли ввести свії улюблений вид спорту!`;
} else {
  answer =
    answer +
    `
Круто! Хочеш стати, як ${championName}`;
}
alert(answer);
