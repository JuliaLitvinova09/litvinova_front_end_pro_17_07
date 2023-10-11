function calculateOrder() {
  let size;

  if (document.getElementById("bigSize").checked == true) {
    size = Hamburger.SIZE_LARGE;
  } else if (document.getElementById("smallSize").checked == true) {
    size = Hamburger.SIZE_SMALL;
  }

  const hamburger = new Hamburger(size);

  if (document.getElementById("CHEESE").checked == true) {
    hamburger.addTopping(Hamburger.STUFFING_CHEESE);
  } else if (document.getElementById("SALAD").checked == true) {
    hamburger.addTopping(Hamburger.STUFFING_SALAD);
  } else if (document.getElementById("POTATO").checked == true) {
    hamburger.addTopping(Hamburger.STUFFING_POTATO);
  }

  if (document.getElementById("SPICE").checked == true) {
    hamburger.addTopping(Hamburger.TOPPING_SPICE);
  }
  if (document.getElementById("MAYO").checked == true) {
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
  }

  document.getElementById("burgerPrice").innerHTML = hamburger.calculatePrice();
  document.getElementById("burgerCalories").innerHTML =
    hamburger.calculateCalories();
}

document.getElementById("burgerValue").addEventListener("click", (event) => {
  calculateOrder();
});
