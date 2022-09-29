// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var result = []

//Create arrays of uppercase, lowercase, numbers, and special characters


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Build a random, secure password
function generatePassword() {
  alert("Select desired password criteria");

  //prompt user for length
  var desiredLength = prompt("Desired length between 8-128 characters:");

  //store the responses (series of booleans)
  var lowerCase = confirm("Include lowercase?");
    if (lowerCase == true)
  var upperCase = confirm("Include uppercase?");
  var number = confirm("Include numbers?");
  var specialCharacter = confirm("Include special characters? (RECOMMENDED)");

  //check length is between 8-128 characters, for loop?

  //confirm types of characters 



  //based on the responses trim/build available pool of characters
  //build password character by character
  //generate random int within range of available chars length
  //add char to result
  //do until length = passwordLength

  return result
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create arrays of uppercase, lowercase, numbers, and special characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*"];
//var desiredLength = (x >= 8 || x <= 128)
