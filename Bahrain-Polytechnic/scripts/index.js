const form = document.querySelector("#interestForm");

if (form) {
  const fields = [
    { input: form.elements.fname, error: "fname-error", invalidMessage: "Enter at least 3 characters for your first name." },
    { input: form.elements.lname, error: "lname-error", invalidMessage: "Enter at least 3 characters for your last name." },
    { input: form.elements.mobile, error: "mobile-error", invalidMessage: "Enter exactly 8 digits for your mobile number." },
    { input: form.elements.email, error: "email-error", invalidMessage: "Enter a valid email address." },
  ];
  const status = document.querySelector("#form-status");

  function validateField(field) {
    const value = field.input.value.trim();
    let message = "";

    if (field.input.name === "fname" || field.input.name === "lname") {
      if (value.length < 3) message = field.invalidMessage;
    } else if (field.input.name === "mobile") {
      if (!/^\d{8}$/.test(value)) message = field.invalidMessage;
    } else if (!field.input.validity.valid || value === "") {
      message = field.invalidMessage;
    }

    field.input.setAttribute("aria-invalid", String(Boolean(message)));
    document.getElementById(field.error).textContent = message;
    return !message;
  }

  fields.forEach((field) => {
    field.input.addEventListener("input", () => {
      validateField(field);
      status.textContent = "";
      status.classList.remove("error");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = fields.map(validateField);
    const firstInvalid = fields.find((field, index) => !results[index]);

    if (firstInvalid) {
      status.textContent = "Please correct the highlighted fields.";
      status.classList.add("error");
      firstInvalid.input.focus();
      return;
    }

    status.classList.remove("error");
    status.textContent = "Your details pass validation. This demo does not send or store them.";
  });
}
