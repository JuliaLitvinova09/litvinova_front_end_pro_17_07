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

  createElement("div", container, user.name + " " + user.lastName, {
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

  createElement("input", parentSelector, user.login, {
    name: "login",
    type: "text",
    placeholder: "Enter login",
  }); // login input

  createElement("input", parentSelector, user.name, {
    name: "name",
    type: "text",
    placeholder: "Enter name",
  }); // name input

  createElement("input", parentSelector, user.lastName, {
    name: "lastName",
    type: "text",
    placeholder: "Enter last name",
  }); // lastName input

  createElement("input", parentSelector, user.email, {
    name: "email",
    type: "text",
    placeholder: "Enter email",
  }); // email input

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
  createElement("div", container, user.lastName);
  createElement("div", container, user.login);
  createElement("div", container, user.email);
}

function handleSaveUser(event) {
  const userId = event.target.getAttribute("data-user-id");
  const formElements = document.forms[0].elements;

  const login = formElements.login.value;
  const name = formElements.name.value;
  const lastName = formElements.lastName.value;
  const email = formElements.email.value;

  const user = {
    login,
    name,
    lastName,
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
  for (let key in user) {
    if (user[key] === "") {
      formElements[key].setCustomValidity("поле не заповнено!");
      formElements[key].reportValidity();
      return false;
    }
  }

  return true;
}
function UpdateUserRow(user) {
  let key;
  parent = document.querySelector(`div[data-user-id="${user.id}"]`);

  for (let div of parent.childNodes) {
    key = div.getAttribute("key");
    if (key) {
      div.innerHTML =
        key === "name" ? user.name + " " + user.lastName : user[key];
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
  if (confirm("Вы хотите удалить пользователя?") == true) {
    const userId = event.target.parentNode.getAttribute("data-id");
    deleteUserById(userId);
  }
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
