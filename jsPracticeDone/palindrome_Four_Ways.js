//EXERCISE TITLE - Palindrome checker
//EXERCISE DATE - Jan 23 2021

//Vers. 1 (Chris): Original, novice, the long way. Split and reverse a string, join it again, and compare to original.

let wordOne = "yoroy";

palindromeCheckOne = (testWord) => {
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

palindromeCheckOne(wordOne);

// Vers. 2: Implosive style, algorithm from David Tang https://davidtang.io/2019-04-11-learning-recursion-in-javascript-part-4/

let wordTwo = "racecar";

palindromeCheckTwo = (testWord) => {
  let oldString = testWord.toString().toLowerCase();

  // Base conditional. Either reach a middle letter for an odd numbered string or reach 0 on an even numbered string

  if (oldString.length <= 1) {
    return true;
  }
  //ES6 syntax. Not 100% understood
  let [firstLetter] = oldString;
  let lastLetter = oldString[oldString.length - 1];

  if (firstLetter === lastLetter) {
    let leftoverString = oldString.substring(1, oldString.length - 1);
    return palindromeCheckTwo(leftoverString);
  } else {
    return false;
  }
};

palindromeCheckTwo(wordTwo);

//Vers. 3 using slice and recursion (a la Nat Giron)

let wordThree = "noodoon";

function palindromeCheckThree(testWord) {
  let firstLetter = testWord[0];
  let lastLetter = testWord[testWord.length - 1];

  if (testWord.length < 2) {
    return true;
  }

  if (firstLetter === lastLetter) {
    // Recursion setup
    leftoverString = testWord.slice(1, testWord.length - 1);
    // Recursion execution
    return palindromeCheckThree(leftoverString);
  }
  // Needed to keep the loop running
  console.log(testWord);
  return false;
}

desiredOutput =
  "Is " + wordThree + " a Palindrome? >>> " + palindromeCheckThree(wordThree);
//DONT CHANGE! THIS IS OUTPUT LINE
document.getElementById("jsedit").innerHTML =
  "Result from exercise: " + desiredOutput;

// desired Output and such goes here

// Version 4: Master strike from Nat Giron.
function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }

  return false;
}

isPalindrome("zoroz");
