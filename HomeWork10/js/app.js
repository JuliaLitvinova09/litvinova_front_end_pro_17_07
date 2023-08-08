const startDiscountFrom = 10000;
const discount = 10;

const disountValue = (100 - discount) / 100;

showProducts();

let productNumber = getProductNumber();

let productsAmount = getProductAmount();

// save selected product
const selectedProduct = getProductByID(productNumber);

// Calculate initial price without discount
let initialPrice = calculateCost(selectedProduct.price, productsAmount);
console.log("Price: $", initialPrice);

// Calculate price with discount if needed
if (discountConditionMet(initialPrice, startDiscountFrom)) {
  const finalPrice = calculateCost(initialPrice, disountValue);
  console.log(
    "Congrats! You got a discount, the final price is $" + finalPrice
  );
}
