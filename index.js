const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailInput = email.value;
  if (emailInput === "") {
    setError(email, "email cannot be empty");
  } else if (!isEmail(emailInput)) {
    setError(email, "please provide a valid email address");
  } else {
    removeError();
    alert("notification sent");
  }
});

function setError(input, message) {
  const errorMsg = document.querySelector("small");
  errorMsg.innerHTML = message;
  input.parentElement.className = "form error";
}

function removeError() {
  form.className = "form";
}

const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
