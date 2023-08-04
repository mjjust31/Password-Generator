// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerLetReq = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperLetReq = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberSetReq = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specCharReq = ["!", "#", "$", "%", "^", "&", "*", "?", "+", "="];
var userPicked = [""];

// Write password to the #password input
function writePassword() {
  var userLength = prompt(
    "Please enter a passworld requirement: Select between 8 and 128"
  );

  var lengthRequirement = parseInt(userLength);

  while (userLength < 8 || userLength > 128) {
    alert(
      "Please enter a passworld requirement: Select between 8 and 128. Try again."
    );
    userLength = prompt(
      "Please enter a passworld requirement: Select between 8 and 128"
    );
  }

  alert("Choose at least one of the four character sets for your password.");

  var lowerLetters = confirm(
    "Please click okay to confirm lower letters is your password."
  );
  var upperLetters = confirm(
    "Please click okay to confirm upper letters is your password."
  );
  var numberSet = confirm(
    "Please click okay to confirm numbers is your password."
  );
  var specChar = confirm(
    "Please click okay to confirm special characters is your password."
  );

  if (!lowerLetters && !upperLetters && !numberSet && !specChar) {
    alert(
      "Please select at least one set of either lowercase letters, uppercase letters, numbers, or special characters to make up your password. Please start over."
    );
    writePassword();
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
