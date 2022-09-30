// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create arrays of uppercase, lowercase, numbers, and special characters
var lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*"];

//Based on the responses build available pool of characters
let criteria = "";

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
  //check length is between 8-128 characters by checking for invalid lengths
  var desiredLength = prompt("Desired length between 8-128 characters:");
   if (desiredLength < 8 || desiredLength > 128) {
    alert("Invalid length");
    return; 
    } 
  
  //prompt user for other desired criteria
  //store responses in single variable
  var lowerCase = confirm("Include lowercase?");
    if (lowerCase == true) {
      var result = criteria.concat(lowerAlphabet);
    } 
  var upperCase = confirm("Include uppercase?");
    if (upperCase == true) {
     var result = criteria.concat(upperAlphabet);
    } 
  var numbers = confirm("Include numbers?");
    if (numbers == true) {
      var result = criteria.concat(numberOptions);
    } 
  var symbols = confirm("Include special characters? (RECOMMENDED)");
  if (symbols == true) {
    var result = criteria.concat(specialCharacter);
  } 

//build password character by character with a for loop
//generate random int w/in range of available characters
//do until length = desiredLength
    //attempted for loops but best I could do was generate a single random number
//for (i >= 0; i <= result.length; i++); 
  //var result = Math.floor((Math.random() * desiredLength + 1));
  
  return result;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//currently, running through function and grabbing full array of most recently selected
//what needs to happen: all selections added to masterArray, for loop randomly selects until desired length is reached