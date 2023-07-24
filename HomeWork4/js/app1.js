// Дано два різні числа. Визначити, яке з них більше, а яке менше.

let a = parseInt(prompt("enter the first number", 0));
let b = parseInt(prompt("enter the second number", 0));

if (a > b) {
  console.log("a>b");
} else if (a < b) {
  console.log("a<b");
} else {
  console.log("a=b");
}
