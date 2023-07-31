//Знайти добуток усіх цілих чисел від 15 до 35

let startIndex = 15;
let endIndex = 35;

let mult = 1;

for (let i = startIndex; i <= endIndex; i++) {
  mult *= i;
}

console.log(mult);
