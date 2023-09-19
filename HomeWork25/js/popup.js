const deleteBtn = document.getElementById("delete-btn");

const popup = document.getElementById("popup");

const noBtn = document.getElementById("no-btn");

const yesBtn = document.getElementById("yes-btn");

const success = document.getElementById("success");

const okBtn = document.getElementById("ok-btn");

const overlay = document.getElementById("overlay");

noBtn.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.classList.remove("show");
});

yesBtn.addEventListener("click", (event) => {
  debugger;
  const userId = popup.getAttribute("data-id");
  deleteUserById(userId);

  popup.style.display = "none";
  success.style.display = "block";
  overlay.classList.add("show");
});

okBtn.addEventListener("click", () => {
  success.style.display = "none";
  overlay.classList.remove("show");
});
