function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(
      `#${i + 1} Product: ${products[i].name} | Price: $${products[i].price}`
    );
  }
}

function getProductNumber() {
  let productNumber = 1;
  do {
    productNumber = parseInt(
      prompt("Enter product number which you wanna buy:")
    );
  } while (
    productNumber < 1 ||
    productNumber > products.length ||
    isNaN(productNumber)
  );
  return productNumber;
}

function getProductAmount() {
  let productsAmount = 1;
  do {
    productsAmount = parseInt(prompt("Enter products amount:"));
  } while (productsAmount < 1 || isNaN(productsAmount));
  return productsAmount;
}

function getProductByID(productNumber) {
  return products[productNumber - 1];
}

function calculateCost(price, amount) {
  return price * amount;
}

function discountConditionMet(initialPrice, startDiscountFrom) {
  return initialPrice >= startDiscountFrom;
}
