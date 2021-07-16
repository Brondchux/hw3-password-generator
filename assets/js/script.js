// *****************************
// Global Variables Starts Here
// *****************************

// Store our users criteria selections in object globally
var usersCriteria = {
	passwordLength: 8,
	useLowerCase: false,
	useUpperCase: false,
	useSpecialChars: false,
	useNumericChars: false,
};

// declaration of our characters
var englishAlphabets = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()_+?";
var numericStrings = "0123456789";

// Store our different character arrays in the predefinedArrays
var predefinedArrays = {
	lowerCaseArray: englishAlphabets.toLowerCase().split(""),
	upperCaseArray: englishAlphabets.toUpperCase().split(""),
	specialCharsArray: specialCharacters.split(""),
	numericCharsArray: numericStrings.split(""),
};

// declaration of our large array customized to users criteria
var combinedCharactersArray = [];

// =============================
// Global Variables Stops Here
// =============================

// *****************************
// Run Application Starts Here
// *****************************

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// =============================
// Run Application Stops Here
// =============================

// *****************************
// Main Logic Starts Here
// *****************************

// Run generate password function
function generatePassword() {
	// run the function to recieve users inputs to aid our customization
	passwordLengthFunction();
	useLowerCaseFunction();
	useUppercaseFunction();
	useSpecialCharsFunction();
	useNumericCharsFunction();

	// Ensure a password length was provided
	if (!usersCriteria.passwordLength) {
		return alert(
			"Generating password failed! Password length is required to proceed! Try again."
		);
	}

	// Ensure at least one criteria was selected
	if (
		!usersCriteria.useLowerCase &&
		!usersCriteria.useUpperCase &&
		!usersCriteria.useSpecialChars &&
		!usersCriteria.useNumericChars
	) {
		return alert(
			"Generating password failed! At least one criteria is required to proceed! Try again."
		);
	}

	// Proceed to run the combine selected arrays function
	combineTheArraysFunction();

	// Run the randomized character selection function and return the final secured password
	return randomCharactersFunction();
}

// =============================
// Main Logic Stops Here
// =============================

// *********************************
// Methods Declarations Starts Here
// *********************************

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	// display the generated password or an error message incase our password generation failed
	passwordText.value = password
		? password
		: "Generating secured password failed! Please try again.";
}

// Receive the length of password characters
function passwordLengthFunction() {
	// prompt user to enter number of characters
	var passwordLength = prompt(
		"How many characters long will you like for your password?"
	);

	// ensure the password is not less than 8 nor greater 128 characters
	if (passwordLength && (passwordLength < 8 || passwordLength > 128)) {
		alert(
			"Password length can't be fewer than 8 or more than 128 characters! Please try again."
		);
		// allow the user try again by re-running this function
		passwordLengthFunction();
	}

	// store the correct password length into our global criteria object
	else {
		usersCriteria.passwordLength = passwordLength;
	}
}

// Receive users response on including lowercase
function useLowerCaseFunction() {
	// confirm with user if it is okay to include lowercase?
	var useLowerCase = confirm(
		"Will you like me to include lowercase characters?"
	);

	// store the users response into our global object criteria
	usersCriteria.useLowerCase = useLowerCase;
}

// Receive users response on including uppercase
function useUppercaseFunction() {
	// confirm with user if it is okay to include uppercase?
	var useUpperCase = confirm(
		"Will you like me to include uppercase characters?"
	);

	// store the users response into our global object criteria
	usersCriteria.useUpperCase = useUpperCase;
}

// Receive users response on including special characters
function useSpecialCharsFunction() {
	// confirm with user if it is okay to include special characters?
	var useSpecialChars = confirm(
		"Will you like me to include special characters?"
	);

	// store the users response into our global object criteria
	usersCriteria.useSpecialChars = useSpecialChars;
}

// Receive users response on including numeric characters
function useNumericCharsFunction() {
	// confirm with user if it is okay to include numeric characters?
	var useNumericChars = confirm(
		"Will you like me to include numeric characters?"
	);

	// store the users response into our global object criteria
	usersCriteria.useNumericChars = useNumericChars;
}

// Combine the arrays using the users criterias
function combineTheArraysFunction() {
	// include lowercase array elements
	if (usersCriteria.useLowerCase) {
		combinedCharactersArray = [
			...combinedCharactersArray,
			...predefinedArrays.lowerCaseArray,
		];
	}

	// include uppercase array elements
	if (usersCriteria.useUpperCase) {
		combinedCharactersArray = [
			...combinedCharactersArray,
			...predefinedArrays.upperCaseArray,
		];
	}

	// include special characters array elements
	if (usersCriteria.useSpecialChars) {
		combinedCharactersArray = [
			...combinedCharactersArray,
			...predefinedArrays.specialCharsArray,
		];
	}

	// include numeric characters array elements
	if (usersCriteria.useNumericChars) {
		combinedCharactersArray = [
			...combinedCharactersArray,
			...predefinedArrays.numericCharsArray,
		];
	}

	// console.log("Criteria: ", usersCriteria);
	// console.log("Combined: ", combinedCharactersArray);
}

// Randomly select the password characters from our combined array
function randomCharactersFunction() {
	var generatedPasswordCharacters = "";
	// loop through the number of password length
	for (var i = 0; i < usersCriteria.passwordLength; i++) {
		// generate a random index
		var randomIndex = Math.floor(
			Math.random() * combinedCharactersArray.length
		);

		// exatract the element in the random index position
		generatedPasswordCharacters += combinedCharactersArray[randomIndex];
	}

	// return the generated password characters
	return generatedPasswordCharacters;
}

// ================================
// Methods Declarations Stops Here
// ================================
