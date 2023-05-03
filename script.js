// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generator function
function generatePassword() {
  // Prompt user for password length
  var passwordLength = parseInt(prompt("Enter a password length between 8 and 128 characters:"));
  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a length between 8 and 128.");
    return "";
  }

  // Prompt user for password criteria
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one criteria is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one criteria must be selected.");
    return "";
  }

  // Define character sets for password generation
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?`~";

  // Build character set based on selected criteria
  var charset = "";
  if (includeLowercase) {
    charset += lowercaseChars;
  }
  if (includeUppercase) {
    charset += uppercaseChars;
  }
  if (includeNumeric) {
    charset += numericChars;
  }
  if (includeSpecial) {
    charset += specialChars;
  }

  // Generate password using selected criteria
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  // Return generated password
  return password;
}
