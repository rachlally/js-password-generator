// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var criteriaArray = ""
  console.log("what am I doing")


//Create arrays of uppercase, lowercase, numbers, and special characters
var lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*"];
//based on the responses trim/build available pool of characters
//var criteriaArray = [""]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Build a random, secure password
function generatePassword() {
  alert("Select your password criteria");

  //prompt user for length
  //check length is between 8-128 characters, for loop?
  var desiredLength = prompt("Desired length between 8-128 characters:");
  

  //store the responses (series of booleans)
  var lowerCase = confirm("Include lowercase?");
    if (lowerCase == true) {
      var criteriaArray = lowerAlphabet.concat;
    } 
  var upperCase = confirm("Include uppercase?");
    if (upperCase == true) {
      var criteriaArray = upperAlphabet.concat;
    } 
  var numbers = confirm("Include numbers?");
    if (numbers == true) {
      var criteriaArray = numberOptions.concat;
    } 
  var symbols = confirm("Include special characters? (RECOMMENDED)");
  if (symbols == true) {
    var criteriaArray = specialCharacter.concat;
  } 


  
  //build password character by character
  //generate random int within range of available chars length
  //add char to result
  //do until length = passwordLength

  return criteriaArray
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


