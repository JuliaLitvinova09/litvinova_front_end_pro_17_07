// The ladder (сходи) – об'єкт, який дозволяє підійматися вгору та спускатися:
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

// ladder.up().up().down().showStep(); // 1

let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this; // добавлена строка согласно условия задачи
  },
  down: function () {
    this.step--;
    return this; // добавлена строка согласно условия задачи
  },
  showStep: function () {
    // показує теперішню сходинку
    alert(this.step);
    return this; // добавлена строка согласно условия задачи
  },
};

ladder.up().up().down().showStep(); // 1
