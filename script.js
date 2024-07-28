var digits = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()_";

document
  .getElementById("generatePassword")
  .addEventListener("click", checkSelectedCheckboxes);

function checkSelectedCheckboxes() {
  var input = document.getElementById("inputPassword");
  var passwordValue = "";
  var passwordGenerated = "";
  var checkboxes = document.querySelectorAll(".checkbox");
  var selectedCount = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedCount++;
      console.log(checkbox.getAttribute("name"));
      var checkedBoxName = checkbox.getAttribute("name");

      switch (checkedBoxName) {
        case "lowercase":
          passwordValue += lowerCase;
          break;

        case "uppercase":
          passwordValue += upperCase;
          break;

        case "numbers":
          passwordValue += digits;
          break;

        case "symbols":
          passwordValue += symbols;
          break;
      }
    }
  });

  // Generate password
  var length = 12;
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * passwordValue.length);
    passwordGenerated += passwordValue[randomIndex];
  }
  input.value = passwordGenerated;

  // Update progress bar based on selected character sets
  var progressBar = document.getElementById("progressBar");
  var progressPercentage = selectedCount * 25; // Each character set adds 25%
  progressBar.style.width = progressPercentage + "%";
  progressBar.textContent = progressPercentage + "%";
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

function copyToClipboard() {
  var inputBox = document.getElementById("inputPassword");
  inputBox.select();
  document.execCommand("copy");
}

window.addEventListener("load", function () {
  document.getElementById("inputPassword").value = "";
  document.getElementById("progressBar").style.width = "0%";
  document.getElementById("progressBar").textContent = "0%";
});
