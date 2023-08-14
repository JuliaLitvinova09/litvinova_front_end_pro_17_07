// Написать функцию, которая принимает 1 параметр. При первом вызове,
// она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд.
// Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

function sumFunc(inputValue) {
  let tempVal = 0;
  return function inner() {
    // console.log(arguments[0], "arguments[0]");
    let param = arguments[0] ? arguments[0] : 0;
    return (tempVal += param);
  };
}

let sum = sumFunc();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); //28
