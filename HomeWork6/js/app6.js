//Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let startIndex = 1;
let endIndex = 500;

let avrgSum = 0;

for (let i = startIndex; i <= endIndex; i++) {
  avrgSum += i;
}
avrgSum /= endIndex;
console.log(avrgSum);
