//EXERCISE TITLE - Palindrome checker
//EXERCISE DATE - Jan 20 2020

//Steps

//Function that accepts a string.
//Function should reverse string
// Check if og string = reversed string, return "yeup", else return "nope"

//Notes
let word = "racecar";

palindromeCheck = (testWord) => {
  let oldString = testWord.toString().toLowerCase().split("");
  let newString = "";

  for (i = oldString.length - 1; i >= 0; i--) {
    newString += oldString[i];
  }

  let testPal = newString.toString();
  let palindromeChecker =
    testWord.toString().toLowerCase() === newString
      ? ". This is a palindrome"
      : ". This is not a palindrome";

  return (
    "The old input was: " +
    testWord +
    ". The new output is: " +
    testPal +
    palindromeChecker
  );
};

desiredOutput = palindromeCheck(word);

//DONT CHANGE! THIS IS OUTPUT LINE
//desiredOutput set to whatever the exercise output calls for
document.getElementById("jsedit").innerHTML =
  "Result from exercise: " + desiredOutput;
