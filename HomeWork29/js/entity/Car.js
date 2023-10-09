function Car(name, age, brand, year) {
  this.brand = brand;
  this.year = year;
  this.name = name;
  this.age = age;

  this.getCarInfo = function () {
    document.write("Brand: ", this.brand, " <br> Year: ", this.year);
  };
}

Car.prototype = new Human();
