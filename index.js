//EXERCISE TITLE - Palindrome checker - version 2 and 3
//EXERCISE DATE - Jan 23 2020

let word = "noodoon";

// METHOD 1: Original attempt. Novice, the long way. Split and reverse a string, join it again, and then compare it to the original.

// palindromeCheck = (testWord) => {
//   let oldString = testWord.toString().toLowerCase().split("");
//   let newString = "";

//   for (i = oldString.length - 1; i >= 0; i--) {
//     newString += oldString[i];
//   }

//   let testPal = newString.toString();
//   let palindromeChecker =
//     testWord.toString().toLowerCase() === newString
//       ? ". This is a palindrome"
//       : ". This is not a palindrome";

//   return (
//     "The old input was: " +
//     testWord +
//     ". The new output is: " +
//     testPal +
//     palindromeChecker
//   );
// };

// METHOD 2: Implosive style, algorithm from David Tang https://davidtang.io/2019-04-11-learning-recursion-in-javascript-part-4/
palindromeCheck = (testWord) => {
  //original: make any input a string, lowercase it
  let oldString = testWord.toString().toLowerCase();

  //Base conditional. Either reach a middle letter for an odd numbered string or reach 0 on an even numbered string
  if (oldString.length <= 1) {
    return true;
  }

  let [firstLetter] = oldString;
  let lastLetter = oldString[oldString.length - 1];

  if (firstLetter === lastLetter) {
    let leftoverString = oldString.substring(1, oldString.length - 1);
    return palindromeCheck(leftoverString);
  } else {
    return false;
  }

  // oldString should be formatted and made into an array
};

desiredOutput = "Is " + word + " a Palindrome? >>> " + palindromeCheck(word);

//DONT CHANGE! THIS IS OUTPUT LINE
document.getElementById("jsedit").innerHTML =
  "Result from exercise: " + desiredOutput;
