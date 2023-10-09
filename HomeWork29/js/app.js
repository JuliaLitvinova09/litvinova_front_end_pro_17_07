document.getElementById("send").addEventListener("click", (event) => {
  if (checkInputData()) {
    const inputData = document.forms[0].elements;
    const car = new Car(inputData.brand.value, inputData.year.value);

    const owner = new Human(inputData.name.value, inputData.age.value);

    owner.getHumanInfo();

    car.setOwner(owner);
    car.getCarInfo();
  }
});
