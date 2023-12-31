function clearAllChilds() {
  let divs = document.querySelectorAll("#main div");
  for (let div of divs) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
}

function showCategories() {
  clearAllChilds();

  const parentElement = document.getElementById("left");

  for (let categoryKey in categories) {
    const category = categories[categoryKey];

    let element = document.createElement("div");
    element.setAttribute("data-category", categoryKey);
    element.textContent = category.name;
    parentElement.appendChild(element);
  }
}

function showProducts(products, category) {
  const parentElement = document.getElementById("center");
  parentElement.innerHTML = "";

  for (let product of products) {
    let element = document.createElement("div");
    element.textContent = `${product.name} $${product.price}`;
    element.setAttribute("data-product", product.id);
    element.setAttribute("data-category", category);

    parentElement.appendChild(element);
  }
}

function showdeProductDecription(product) {
  const parentElement = document.getElementById("right");
  parentElement.innerHTML = "";

  let element = document.createElement("div");
  element.textContent = `${product.description}`;

  parentElement.appendChild(element);

  let btn = document.createElement("input");
  btn.setAttribute("type", "button");
  btn.setAttribute("value", "КУПИТИ");
  btn.setAttribute("id", "btn");
  element.appendChild(btn);
}

showCategories();

document.getElementById("left").addEventListener("click", (event) => {
  if (event.target.nodeName === "DIV") {
    const categoryKey = event.target.getAttribute("data-category");
    const categoryProducts = categories[categoryKey].products;
    showProducts(categoryProducts, categoryKey);

    const elDescription = document.getElementById("right");
    elDescription.innerHTML = "";
  }
});

document.getElementById("center").addEventListener("click", (event) => {
  if (event.target.nodeName === "DIV") {
    const productId = event.target.getAttribute("data-product");
    const categoryKey = event.target.getAttribute("data-category");

    const product = categories[categoryKey].products.find(
      (product) => product.id == productId
    );

    showdeProductDecription(product);
  }
});

let elRight = document.getElementById("right");

elRight.addEventListener("click", (event) => {
  if (event.target.type === "button") {
    let el = document.createElement("span");
    el.innerHTML = "Товар куплений!";
    elRight.appendChild(el);
  }
});
