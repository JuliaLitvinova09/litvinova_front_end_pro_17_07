//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
let a = parseInt(prompt("enter the number", 0));
let lastNumber = a % 10;

console.log(
  `Остання цифра ${lastNumber} є ` +
    (lastNumber % 2 === 0 ? "парною" : "не парною")
);
