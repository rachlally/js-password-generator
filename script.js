// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create arrays of uppercase, lowercase, numbers, and special characters
var lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "&", "*"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Build a random, secure password 
function generatePassword() {
  alert("Select your password criteria");
  
  // locally scope result here
  var results = [];

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
      results.unshift(lowerAlphabet);
    } 
  var upperCase = confirm("Include uppercase?");
    if (upperCase == true) {
      results.unshift(upperAlphabet);
    } 
  var numbers = confirm("Include numbers?");
    if (numbers == true) {
      results.unshift(numberOptions);
    } 
  var symbols = confirm("Include special characters? (RECOMMENDED)");
  if (symbols == true) {
    results.unshift(specialCharacter);
  } 
console.log(results);
 
for (var i = 0; i < results.length; i++) {
  if (i == desiredLength);

return password;
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


