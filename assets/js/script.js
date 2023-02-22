// Select Button with Id generate
var generateBtn = document.querySelector("#generate");

// Event Listener When generate button is clicked
generateBtn.addEventListener("click", writePassword);

// Function to prompt for password criteria and generate a password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


