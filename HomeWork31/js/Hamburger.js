class Hamburger {
  static SIZE_SMALL = { name: "SIZE_SMALL", price: 50, calorie: 20 };
  static SIZE_LARGE = { name: "SIZE_LARGE", price: 100, calorie: 40 };
  static STUFFING_CHEESE = {
    name: "STUFFING_CHEESE",
    price: 10,
    calorie: 20,
  };
  static STUFFING_SALAD = {
    name: "STUFFING_SALAD",
    price: 20,
    calorie: 5,
  };
  static STUFFING_POTATO = {
    name: "STUFFING_POTATO",
    price: 15,
    calorie: 10,
  };

  static TOPPING_SPICE = {
    name: "TOPPING_SPICE",
    price: 15,
    calorie: 0,
  };
  static TOPPING_MAYO = { name: "TOPPING_MAYO", price: 20, calorie: 5 };

  constructor(size) {
    this.params = {
      size: size,
      topping: [],
    };
  }

  addTopping(topping) {
    let currentTopping = this.params.topping;
    let isPresent = 0;
    // проверим, чтобы топпинг не добавили 2 раза, не смотря на то,
    // что на этапе ввода данных в нашем случае это исключено
    for (let i = 0; i < currentTopping.length; i++) {
      if (currentTopping[i].name === topping.name) {
        isPresent++;
      }
    }
    if (!isPresent) {
      currentTopping.push(topping);
    } else {
      //пропускаем
      console.log("Такая добавка уже есть");
    }
  }

  calculatePrice() {
    let choiceParams = this.params;

    let totalToppingSum = 0;
    for (let i = 0; i < choiceParams.topping.length; i++) {
      totalToppingSum += choiceParams.topping[i].price;
    }

    return choiceParams.size.price + totalToppingSum;
  }
  calculateCalories() {
    let choiceParams = this.params;

    let totalToppingCalories = 0;
    for (let i = 0; i < choiceParams.topping.length; i++) {
      totalToppingCalories += choiceParams.topping[i].calorie;
    }

    return choiceParams.size.calorie + totalToppingCalories;
  }
}
