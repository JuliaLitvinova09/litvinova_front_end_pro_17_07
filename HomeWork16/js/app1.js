// Вам потрібно написати функцію, яка як параметр приймає функцію
//  і додає їй можливість кешувати дзвінки. Ідея полягає в тому,
//  що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу,
//  достатньо зберігати дані про результати виклику.
// Зберігати потрібно останні 10 дзвінків.

const countCachCalls = 10;
let callStack = [];

function makeCall(a, b, callback) {
  return callback(a, b);
}

function callCaching(a, b) {
  let genKey = a.toString() + "_" + b.toString();
  let resFind = callStack.find((call) => call.key === genKey);

  if (!resFind) {
    resFind = {
      key: genKey,
      result: a * b,
    };
    callStack.splice(countCachCalls - 1, 1, resFind);
  } else {
    console.log("Нашли данные в кеше!!! Просто вернем результат");
  }
  return resFind.result;
}

console.log("Result is: ", makeCall(2, 1, callCaching));
console.log("Result is: ", makeCall(2, 2, callCaching));
console.log("Result is: ", makeCall(2, 3, callCaching));
console.log("Result is: ", makeCall(2, 4, callCaching));
console.log("Result is: ", makeCall(2, 5, callCaching));
console.log("Result is: ", makeCall(2, 6, callCaching));
console.log("Result is: ", makeCall(2, 7, callCaching));
console.log("Result is: ", makeCall(2, 8, callCaching));
console.log("Result is: ", makeCall(2, 9, callCaching));
console.log("Result is: ", makeCall(2, 10, callCaching));
console.log("Result is: ", makeCall(2, 11, callCaching)); // тут должно быть сокращение стека данных, будет вытеснена строка (2,10)
console.log("Result is: ", makeCall(2, 5, callCaching)); // выбор из кеша

console.log(callStack, "Кэш вызовов");
