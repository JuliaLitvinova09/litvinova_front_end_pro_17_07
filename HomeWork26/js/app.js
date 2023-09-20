function buttonsWithTooltipAndModal() {
  let tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle-tooltip="tooltip"]')
  );
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  const exampleModal = document.getElementById("exampleModal");
  if (exampleModal) {
    exampleModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const recipient = button.getAttribute("data-bs-whatever");

      const modalTitle = exampleModal.querySelector(".modal-title");
      const modalBodyInput = exampleModal.querySelector(".modal-body input");
      modalTitle.textContent = `New message to ${recipient}`;
      modalBodyInput.value = recipient;
    });
  }
}

const appendAlert = (alertPlaceholder, message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

function alertExample() {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      if (document.querySelector(".alert") == null) {
        appendAlert(
          alertPlaceholder,
          "Nice, you triggered this alert message!",
          "success"
        );
      } else {
        const alert = bootstrap.Alert.getOrCreateInstance(".alert");
        alert.close();
      }
    });
  }
}

function showBirthday() {
  const bd = document.querySelector("h2");
  let event = moment("1988-12-04").format("DD-MM-YYYY");
  bd.textContent = `Birthday:${event}`;
}

function showUserBirthday() {
  const btnOk = document.getElementById("btnInputBirthday");
  if (btnOk) {
    btnOk.addEventListener("click", () => {
      const bd = document.getElementById("formatBirthday");
      const inputBirthday = document.getElementById("inputBirthday");
      let inputBirthdayValue = inputBirthday.value;

      let pattern = /\d{4}(-|\/)\d{2}(-|\/)\d{2}/gm;
      result = inputBirthdayValue.match(pattern);
      const alertPlaceholder = document.getElementById("alertAboutFormat");
      if (result == null) {
        appendAlert(
          alertPlaceholder,
          "You entered a date in the wrong format (YYYY/MM/DD)!",
          "danger"
        );
      } else {
        let event = moment(inputBirthdayValue).format("DD-MM-YYYY");

        appendAlert(
          alertPlaceholder,
          `Success!!! Your birthday: ${event}`,
          "success"
        );
      }
    });
  }
}

buttonsWithTooltipAndModal();
alertExample();
showBirthday();
showUserBirthday();
