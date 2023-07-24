// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let a = parseInt(prompt("enter the first number", 0));
let b = parseInt(prompt("enter the second number", 0));

if (a % b === 0) {
  console.log(`${b} є дільником числа ${a}`);
} else {
  console.log(`${b} не є дільником числа ${a}`);
}

if (b % a === 0) {
  console.log(`${a} є дільником числа ${b}`);
} else {
  console.log(`${a} є дільником числа ${b}`);
}
