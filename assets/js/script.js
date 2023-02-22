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

    // Asks for password criteria from users
    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");

    //checks if at least one password criteria was selected
    while(!lowercase && !uppercase && !numeric && !special){
      alert("You have to select at least one password criteria")
      var lowercase = confirm("Include lowercase characters?");
      var uppercase = confirm("Include uppercase characters?");
      var numeric = confirm("Include numeric characters?");
      var special = confirm("Include special characters?");
    }

    // Generate Characters to be in the password

    var passwordCharacters = '';

    // if user selects lowercase append the character to passwordCharacters
    if(lowercase){
      passwordCharacters +='abcdefghijklmnopqrstuvwxyz';
    }

    //if user selects upppercase append the character to passwordCharacters
    if(uppercase){
      passwordCharacters +='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    // if user select number append the character to passwordCharaceters
    if(numeric){
      passwordCharacters +='0123456789';
    }

    //if user selects special append the character to passwordCharacters
    if(special){
      passwordCharacters +="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }


}


