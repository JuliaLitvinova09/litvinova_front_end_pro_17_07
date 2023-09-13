function showRows(users) {
  for (let user of users) {
    showUserRow(user);
  }
}

function showUserRow(user) {
  const container = createElement("div", "#users", "", {
    "data-user-id": user.id,
  }); // container

  const wrappUser = createElement("div", container, "", {
    "wrap-user-id": user.id,
  }); // wrapper for user

  createElement("div", wrappUser, user.id); // idElement

  createElement("div", wrappUser, user.name + " " + user.lastName); // nameElement

  const actionsElement = createElement("div", wrappUser, "", {
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
function showUserData(id) {
  let parent = document.querySelector(`div[data-user-id="${id}"]`);
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

function showAddUserForm(user) {
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
    id: userId ? userId : (+new Date()).toString(16),
  };

  const isValid = validate(user);

  if (isValid) {
    saveUser(user);
    cleanElement("#form form");
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

function saveUser(newUser) {
  users.push(newUser);
  updateStorage();
  showUserRow(newUser);
}

function handleDeleteUser(event) {
  if (confirm("Вы хотите удалить пользователя?") == true) {
    console.dir(event.target);
    const userId = event.target.parentNode.getAttribute("data-id");
    deleteUserById(userId);
  }
}

function handleViewUser(event) {
  const userId = event.target.parentNode.getAttribute("data-id");
  showUserData(userId);
}

function handleEditUser(event) {
  const id = event.target.parentNode.getAttribute("data-id");
  const indexToEdit = users.findIndex((user) => user.id == id);
  let user = users[indexToEdit];
  showAddUserForm(user);
  updateStorage();
}

function deleteUserById(id) {
  const indexToRemove = users.findIndex((user) => user.id === id);
  users.splice(indexToRemove, 1);
  removeElement(`div[data-user-id="${id}"]`);
  updateStorage();
}

function updateStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}
