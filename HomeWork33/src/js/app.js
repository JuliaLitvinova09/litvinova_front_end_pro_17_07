const MLS = 1000;
const botAnswerStop = answers[answers.length - 1];
const inputField = document.getElementById("input");
const btnSend = document.getElementById("sendBtn");

inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let userText = inputField.value;
    inputField.value = "";
    sendMessage(userText);
  }
});

btnSend.addEventListener("click", (event) => {
  let userText = inputField.value;
  inputField.value = "";
  sendMessage(userText);
});

function sendMessage(userText) {
  let botAnswer;
  if (userText.toLowerCase() === "bye") {
    botAnswer = answers[answers.length - 1];
  } else {
    botAnswer = answers[Math.floor(Math.random() * answers.length)];
  }

  addMessage(userText, botAnswer);
}

function stopChat() {
  btnSend.setAttribute("disabled", "true");
  inputField.setAttribute("readonly", "true");
}

function addMessage(userText, botAnswer) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${userText}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  let waitingTime = 1 + Math.floor(Math.random() * 10); //1-10 seconds after message
  setTimeout(() => {
    botText.innerText = `${botAnswer}`;
  }, waitingTime * MLS);

  if (userText.toLowerCase() === "bye" || botAnswer === botAnswerStop) {
    stopChat();
  }
}
