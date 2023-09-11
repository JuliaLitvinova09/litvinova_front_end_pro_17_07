function clearAllChilds() {
  let divs = document.querySelectorAll("#main div");
  for (let div of divs) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
}

function hideOrderForm() {
  const elForm = document.getElementById("order");

  elForm.classList.add("invisible");
  removOrderDescription();
}
function showOrderForm() {
  const elForm = document.getElementById("order");
  elForm.classList.remove("invisible");
}

function removOrderDescription() {
  const form = document.querySelector("h1");

  if (form) {
    const parent = form.parentNode;
    parent.removeChild(form);

    const table = document.querySelector("table");
    const parentT = table.parentNode;
    parentT.removeChild(table);
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
  hideOrderForm();
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
  hideOrderForm();
}

function showProductDecription(product) {
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

let currentProduct;

showCategories();

document.getElementById("left").addEventListener("click", (event) => {
  if (event.target.nodeName === "DIV") {
    const categoryKey = event.target.getAttribute("data-category");
    const categoryProducts = categories[categoryKey].products;
    showProducts(categoryProducts, categoryKey);

    const elDescription = document.getElementById("right");
    elDescription.innerHTML = "";
    currentProduct = undefined;
    hideOrderForm();
  }
});

document.getElementById("center").addEventListener("click", (event) => {
  if (event.target.nodeName === "DIV") {
    const productId = event.target.getAttribute("data-product");
    const categoryKey = event.target.getAttribute("data-category");

    currentProduct = categories[categoryKey].products.find(
      (product) => product.id == productId
    );

    showProductDecription(currentProduct);
    hideOrderForm();
  }
});

let elRight = document.getElementById("right");

elRight.addEventListener("click", (event) => {
  if (event.target.type === "button") {
    document.forms[0].reset();
    showOrderForm();
  }
});
