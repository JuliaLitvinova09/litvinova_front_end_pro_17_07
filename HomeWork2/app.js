// 1) За допомогою prompt запитати як звуть користувача. За допомогою alert вивести
//    "Hello, John! How are you?", де John це те, що ввів користувач

let userName = prompt("What is your name?", "");
alert("Hello, " + (userName || "Stranger") + "! How are you?");

// 2. Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів

let a = 100,
  b = 20,
  c = 60;

console.log(a + b, "(a+b)");
console.log(a - b, "(a-b)");
console.log(a * b, "(a*b)");
console.log(a / b, "(a/b)");

// 3. Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
a = prompt("Enter the first number:");
b = prompt("Enter the second number:");

console.log(a === b, "same (true) or not (false)");

// 4. Визначити середнє арифметичне трьох чисел
a = 100;
b = 20;
c = 60;
console.log((a + b + c) / 3, "average");

// 5. Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл
//  (використовувати оператор “розподіл по модулю” (%)

a = 12345;

console.log(
  `${(a - (a % 10000)) / 10000} ${((a - (a % 1000)) / 1000) % 10} ${
    ((a - (a % 100)) / 100) % 10
  } ${((a - (a % 10)) / 10) % 10} ${a % 10}`
);
