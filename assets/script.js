// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz';
var lowerLetReq = ["abcdefghijklmnopqrstuvwxyz"];
var upperLetReq = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberSetReq = ["0123456789"];
var specCharReq = ["!@#$%^&*()_-+=|{}[];:?/.>,<"];
var userPicked = [""]; //global scope variables.

// Write password to the #password input
function writePassword() {
  var userLength = prompt(
    //local scope variable
    "Please enter a valid password requirement length: Select between 8 and 128"
  );

  while (userLength < 8 || userLength > 128) {
    alert(
      "Please enter a valid password requirement length: Select between 8 and 128. Try again."
    );
    userLength = prompt(
      "Please enter a valid password requirement length: Select between 8 and 128"
    );
  }

  var lengthRequirement = parseInt(userLength);

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
    //could change this to while loop until they select it.
    //
    alert(
      "Please select at least one set of either lowercase letters, uppercase letters, numbers, or special characters to make up your password. Please start over."
    );
    writePassword(); //send back to the start of length and character types.
  }

  if (lowerLetters) {
    userPicked += lowerLetReq;
    }
    
    if (upperLetters) {
    userPicked += upperLetReq;
    }
    
    if (numberSet) {
    userPicked += numberSetReq;
    }
    
    if (specChar) {
    userPicked += specCharReq;
    }
    
  // console.log(userPicked); //this came back as an array of booleans.

  //now we need to generate the password based on the user picked length and the user picked character types. We also need to make it random.
  //do a for loop with random for the function to return to the password.

  function generatePassword() {
    var thePassword = [""];
    for (i = 0; i < lengthRequirement; i++) {
      thePassword += userPicked[Math.floor(Math.random() * userPicked.length)]; //same as x = x+y
    }
    return thePassword;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
