// Select Button with Id generate
var generateBtn = document.getElementById("generate");

// Event Listener When generate button is clicked
generateBtn.addEventListener("click", writePassword);

// Function to prompt for password criteria and generate a password
function writePassword() {
  //  get returned password from generatePassword function 
  var password = generatePassword();


  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword(){

  //prompt user to enter desired password length and check to validate

  var passwordLenght = prompt("Enter password Lenght Between 8 and 128 characters");

  while(isNaN(passwordLenght) ||  passwordLenght < 8 || passwordLenght>128){
    // prompts an error when an invalid input is entered
    var passwordLenght = prompt("Invalid input Entered! Numbers between 8 and 128 is expected ")
  }

   
}


