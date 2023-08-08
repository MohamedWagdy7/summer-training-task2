window.onload = function () {
  document.getElementById("name").focus();
};

const alphaRegex = /^[a-zA-Z()]+$/;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// name validation
document
  .getElementById("name")
  .addEventListener("focusout", function nameValidate() {
    if (!this.value) {
      document.getElementById("nameErr").textContent = "Name is required";
      this.focus();
      return false;
    }
    if (!alphaRegex.test(this.value)) {
      document.getElementById("nameErr").textContent =
        "Name must contain only alphabetic characters";
      this.focus();
      return false;
    }
    document.getElementById("nameErr").textContent = "";
  });

// id validation
document.getElementById("id").addEventListener("focusout", function () {
  if (!this.value) {
    document.getElementById("idErr").textContent = "User ID is required";
    this.focus();
    return false;
  }
  if (this.value.length < 5 || this.value.length > 12) {
    document.getElementById("idErr").textContent =
      "User ID must be between 5 and 12";
    this.focus();
    return false;
  }
  document.getElementById("idErr").textContent = "";
});

// password validation
document.getElementById("password").addEventListener("focusout", function () {
  if (!this.value) {
    document.getElementById("passwordErr").textContent = "Password is required";
    this.focus();
    return false;
  }
  if (this.value.length < 7 || this.value.length > 12) {
    document.getElementById("passwordErr").textContent =
      "Password must be between 7 and 12";
    this.focus();
    return false;
  }
  document.getElementById("passwordErr").textContent = "";
});

//country validation
document.getElementById("country").addEventListener("focusout", function () {
  if (!this.value) {
    document.getElementById("countryErr").textContent = "Country is required";
    this.focus();
    return false;
  }
  document.getElementById("countryErr").textContent = "";
});

//zip validation
document.getElementById("zipCode").addEventListener("focusout", function () {
  if (!this.value) {
    document.getElementById("zipCodeErr").textContent = "ZIP Code is required";
    this.focus();
    return false;
  }
  if (isNaN(this.value)) {
    document.getElementById("zipCodeErr").textContent =
      "ZIP Code must be numeric";
    this.focus();
    return false;
  }
  document.getElementById("zipCodeErr").textContent = "";
});

// email validation
document.getElementById("email").addEventListener("focusout", function () {
  if (!this.value) {
    document.getElementById("emailErr").textContent = "Email is required";
    this.focus();
    return false;
  }
  if (!emailRegex.test(this.value)) {
    document.getElementById("emailErr").textContent = "Invalid Email";
    this.focus();
    return false;
  }
  document.getElementById("emailErr").textContent = "";
});

document.forms[0].onsubmit = function () {
  //Sex Validation
  if (!(this.checked || this.checked)) {
    document.getElementById("sexErr").textContent = "Sex is required";
    this.focus();
    return false;
  } else {
    document.getElementById("sexErr").textContent = "";
  }

  // language validation
  if (!(this.checked || this.checked)) {
    document.getElementById("languageErr").textContent = "language is required";
    this.focus();
    return false;
  }
  document.getElementById("languageErr").textContent = "";
};

document.getElementById("reset").onclick = function (event) {
  event.preventDefault();
  let answer = prompt("do you realy need to clear the form? (y/n)");
  if (answer == "y") {
    document.forms[0].reset();
  }
};
