function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

Car.prototype.setOwner = function (owner) {
  this.owner = owner;
};

Car.prototype.getCarInfo = function () {
  document.write(
    "Car owner: ",
    this.owner.name,
    "<br> Brand: ",
    this.brand,
    " <br> Year: ",
    this.year
  );
};
