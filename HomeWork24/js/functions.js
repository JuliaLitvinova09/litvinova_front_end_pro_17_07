function showRows(users) {
  for (let user of users) {
    showUserRow(user);
  }
}

function showUserRow(user) {
  const container = createElement("div", "#users", "", {
    "data-user-id": user.id,
  }); // container

  createElement("div", container, user.id, { key: "id" }); // idElement

  createElement("div", container, user.name + " " + user.phone, {
    key: "name",
  }); // nameElement

  const actionsElement = createElement("div", container, "", {
    className: "actions",
    "data-id": user.id,
  });

  createElement(
    "input",
    actionsElement,
    "",
    { type: "button", value: "Edit", "data-type": "edit" },
    {
      click: handleEditUser,
    }
  ); // editBtnElement

  createElement(
    "input",
    actionsElement,
    "",
    { type: "button", value: "Delete", "data-type": "delete" },
    {
      click: handleDeleteUser,
    }
  ); // deleteBtnElement
  createElement(
    "input",
    actionsElement,
    "",
    { type: "button", value: "View", "data-type": "view" },
    {
      click: handleViewUser,
    }
  ); // viewBtnElement
}

function showAddUserForm(user) {
  cleenViewInfo();
  const parentSelector = "#form form";

  createElement("input", parentSelector, user.name, {
    name: "name",
    type: "text",
    placeholder: "Enter name",
  }); // name input

  createElement("input", parentSelector, user.login, {
    name: "login",
    type: "text",
    placeholder: "Enter login",
  }); // login input

  createElement("input", parentSelector, user.age, {
    name: "age",
    type: "number",
    placeholder: "Enter age",
  }); // age input

  createElement("input", parentSelector, user.email, {
    name: "email",
    type: "text",
    placeholder: "Enter email",
  }); // email input

  createElement("input", parentSelector, user.phone, {
    name: "phone",
    type: "text",
    placeholder: "Enter phone",
  }); // phone input

  createElement("input", parentSelector, user.card, {
    name: "card",
    type: "text",
    placeholder: "Enter card",
  }); // card input

  createElement(
    "input",
    parentSelector,
    "",
    {
      type: "button",
      value: "Save",
      "data-user-id": user.id,
    },
    {
      click: handleSaveUser,
    }
  );
}

function showUserData(id) {
  let parent = document.getElementById("users");
  const container = createElement("div", parent, "", {
    "data-user-id-view": id,
  }); // container
  const indexToShow = users.findIndex((user) => user.id == id);
  let user = users[indexToShow];

  createElement("div", container, id); // idElement
  createElement("div", container, user.name);
  createElement("div", container, user.age);
  createElement("div", container, user.login);
  createElement("div", container, user.email);
  createElement("div", container, user.phone);
  createElement("div", container, user.card);
}

function handleSaveUser(event) {
  const userId = event.target.getAttribute("data-user-id");
  const formElements = document.forms[0].elements;

  const login = formElements.login.value;
  const name = formElements.name.value;
  const age = formElements.age.value;
  const email = formElements.email.value;
  const phone = formElements.phone.value;
  const card = formElements.card.value;

  const user = {
    name,
    login,
    age,
    card,
    phone,
    email,
    id: userId === "undefined" ? (+new Date()).toString(16) : userId,
  };

  const isValid = validate(user);

  if (isValid) {
    saveUser(user);
    cleanElement("#form form");
    cleenViewInfo();
  }
}

function validate(user) {
  const formElements = document.forms[0].elements;
  let pattern;

  for (let key in user) {
    debugger;

    switch (key) {
      case "name":
        pattern = /^([A-Z][a-z]{1,})||^([А-Я][а-яЁё]{1,})/;
        break;
      case "login":
        // code block
        break;
      case "age":
        // code block
        break;
      case "email":
        // code block
        break;
      case "phone":
        // code block
        break;
      case "card":
        // code block
        break;
      default:
      // code block
    }
    result = user[key].match(pattern);

    if (!result) {
      formElements[key].setCustomValidity("поле не заповнено не вірно!");
      formElements[key].reportValidity();
      return false;
    }
  }
  return true;
}
function updateUserRow(user) {
  let key;
  parent = document.querySelector(`div[data-user-id="${user.id}"]`);

  for (let div of parent.childNodes) {
    key = div.getAttribute("key");
    if (key) {
      div.innerHTML = key === "name" ? user.name + " " + user.phone : user[key];
    }
  }
}

function saveUser(newUser) {
  const indexToSave = users.findIndex((user) => user.id === newUser.id);

  if (indexToSave === -1) {
    // добавим
    users.push(newUser);
    showUserRow(newUser);
  } else {
    // обновим
    users = users.map((user) => {
      if (user.id === newUser.id) {
        return newUser;
      }
      return user;
    });
    UpdateUserRow(newUser);
  }

  updateStorage();
}

function handleDeleteUser(event) {
  const userId = event.target.parentNode.getAttribute("data-id");
  popup.style.display = "block";
  popup.setAttribute("data-id", userId);
  overlay.classList.add("show");
}

function deleteUserById(id) {
  const indexToRemove = users.findIndex((user) => user.id === id);
  users.splice(indexToRemove, 1);
  removeElement(`div[data-user-id="${id}"]`);
  updateStorage();
}

function handleViewUser(event) {
  const userId = event.target.parentNode.getAttribute("data-id");
  cleanElement("#form form");
  cleenViewInfo();
  showUserData(userId);
}

function handleEditUser(event) {
  const id = event.target.parentNode.getAttribute("data-id");
  const indexToEdit = users.findIndex((user) => user.id == id);
  let user = users[indexToEdit];
  cleanElement("#form form");
  cleenViewInfo();
  showAddUserForm(user);
  updateStorage();
}

function updateStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}
