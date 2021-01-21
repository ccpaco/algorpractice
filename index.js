//EXERCISE TITLE - Palindrome checker
//EXERCISE DATE - Jan 20 2020

//Steps

//Function that accepts a string.
//Function should reverse string
// Check if og string = reversed string, return "yeup", else return "nope"

//Notes
let word = "Alucard";

palindromeCheck = (testWord) => {
  let oldString = testWord.toString().split("");
  let newString = "";

  for (i = oldString.length - 1; i >= 0; i--) {
    newString += oldString[i];
    console.log();
  }

  return (
    "The old string was " + word + " the new string is " + newString.toString()
  );
};

desiredOutput = palindromeCheck(word);

//DONT CHANGE! THIS IS OUTPUT LINE
//desiredOutput set to whatever the exercise output calls for
document.getElementById("jsedit").innerHTML =
  "Result from exercise: " + desiredOutput;
