// Assignment Code
var generateBtn = document.querySelector("#generate");

//After all prompts randomly generate password with array library.
var aryLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var aryNumbers = [0,1,2,3,4,5,6,7,8,9]
var arySpecial = ["!","@","#","$","%","^","&","*","`","~"]



//When generate password is pressed user is then presented with prompts for password criteria
function generatePassword(){
//Prompt that determines length of password from 8 - 128 characters. 
var passLength = prompt("How long do you want your password? Type a number from 8-128.");
if(passLength !== 'string' && passLength >= 8 && passLength <= 128){
  //Prompts that determines which character types are included in password. lowercase, uppercase, numeric, and/or special characters.
  var passLower = confirm("Do you want lowercase characters in your password?");
  var passUpper= confirm("Do you want uppercase characters in your password?");
  var passNumber = confirm("Do you want numbers in your password?");
  var passSpecial = confirm("Do you want special characters in your password?");
}



//Make sure that edgecase of at least one character type has to be selected


}
//After all prompts randomly generate password with array library.
//Replace placeholder text with generated password.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
