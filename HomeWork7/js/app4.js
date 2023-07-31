// Дано ціле число. З'ясувати, чи є воно простим (простим називається число, більше ніж 1,
// які не мають інших дільників крім 1 і себе).

let inputNumber = parseInt(prompt("enter the number", 0));

let isPrimeNumber = true;

if (inputNumber <= 1) {
  isPrimeNumber = false;
} else {
  for (i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }
}

console.log(
  `число ${inputNumber} ` + (isPrimeNumber ? "є простим" : "не є простим")
);
