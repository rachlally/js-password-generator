// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var result = ""

//Create arrays of uppercase, lowercase, numbers, and special characters
var lowerCase = ["a", "b", "c", "d"];
var upperCase = ["A", "B", "C", "D"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Build a random, secure password
function generatePassword(){
  alert("Select desired password criteria")

  //prompt user for length
  prompt("Desired length between 8-128 characters:")

  var desiredLength 
  //check length is between 8-128 characters

  //confirm types of characters 
  prompt("List character types to be included: lowercase, uppercase, numeric, and/or special characters")
  //store the responses (series of booleans)

  //based on the responses trim/build available pool of characters
  //build password character by character
  //generate random int within range of available chars length
  //add char to result
  //do until length = passwordLength


  return result

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


