document.getElementById("send").addEventListener("click", (event) => {
  if (checkInputData()) {
    const inputData = document.forms[0].elements;
    const car = new Car(
      inputData.name.value,
      inputData.age.value,
      inputData.brand.value,
      inputData.year.value
    );
    car.getHumanInfo();
    car.getCarInfo();
  }
});
