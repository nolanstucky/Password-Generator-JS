//Nolan Stucky
// Assignment Code

var generateBtn = document.querySelector("#generate");

//After all prompts randomly generate password with array library.
//array for lowercase letters
var aryLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//array for uppercase letters
var aryUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//array for numbers
var aryNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//array for special characters
var arySpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "`", "~"]



//When generate password is called upon user is then presented with prompts for password criteria
function generatePassword() {
  //password array that will be filled depending on the prompts
  var aryPassword = []
  //random password variable that will be called upon for the final password
  var randomPassword = "";
  //Prompt that determines length of password from 8 - 128 characters. 
  var passLength = parseInt(prompt("How long do you want your password? Type a number from 8-128."));
  //if statement that checks if the input is an integer or not.
  if (Number.isInteger(passLength) === false) {
    alert("Password needs to be a numerical value.");
  }
  //else if statement that makes sure the length is between 8 and 128
  else if (passLength < 8 || passLength > 128) {
    alert("Password needs to be between 8 and 128 characters long.")
  }
  else if (passLength >= 8 && passLength <= 128) {
    //Prompts that determines which character types are included in password. lowercase, uppercase, numeric, and/or special characters.
    var passLower = confirm("Do you want lowercase characters in your password?");

    var passUpper = confirm("Do you want uppercase characters in your password?");

    var passNumbers = confirm("Do you want numbers in your password?");

    var passSpecial = confirm("Do you want special characters in your password?");
    //determines if user wants lowercase and adds lowercase array to password array.
    if (passLower === true) {
      aryPassword = aryLower;
    }
    //determines if user wants uppercase and adds uppercase array to password array.
    if (passUpper === true) {
      aryPassword = aryPassword.concat(aryUpper);
    }
    //determines if user wants numbers and adds numbers array to password array.
    if (passNumbers === true) {
      aryPassword = aryPassword.concat(aryNumbers);
    }
    //determines if user wants special characters and adds special array to password array.
    if (passSpecial === true) {
      aryPassword = aryPassword.concat(arySpecial);
    }
    //Make sure that edgecase of at least one character type has to be selected
    if (aryPassword.length === 0) {
      alert("Please choose at least one option.");
      return "";
    }
    //After all prompts randomly generate password with array library.
    for (var i = 0; i < passLength; i++) {
      var randomCharacter = aryPassword[Math.floor(Math.random() * aryPassword.length)];
      randomPassword = randomPassword.concat(randomCharacter);
    }

  }
  //returns the value of the password so it can be written as the text value
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Replace placeholder text with generated password.
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
