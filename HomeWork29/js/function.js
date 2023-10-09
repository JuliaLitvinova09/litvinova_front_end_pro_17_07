function checkInputData() {
  let result = true;
  const regExps = {
    name: {
      regExp: /\w{5,}/,
      error: {
        message: " Enter correct name",
        element: document.getElementsByClassName("name-error"),
      },
      formElement: document.forms[0].elements.name,
    },

    age: {
      regExp: /^(18|19|(^[2-9]+[0-9]+))$/,
      error: {
        message: " Enter correct age (>=18)",
        element: document.getElementsByClassName("age-error"),
      },
      formElement: document.forms[0].elements.age,
    },
    brand: {
      regExp: /\w{3,}/,
      error: {
        message: " Enter correct brand",
        element: document.getElementsByClassName("brand-error"),
      },
      formElement: document.forms[0].elements.brand,
    },
    year: {
      regExp: /\d{4,}/,
      error: {
        message: " Enter correct year",
        element: document.getElementsByClassName("year-error"),
      },
      formElement: document.forms[0].elements.year,
    },
  };

  for (let key in regExps) {
    let regItem = regExps[key];
    regItem.error.element[0].innerHTML = "";
    if (!regItem.regExp.test(regItem.formElement.value)) {
      regItem.error.element[0].innerHTML = regItem.error.message;
      result = false;
    }
  }

  return result;
}
