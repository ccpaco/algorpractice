// Chris with Nat Help

let word = "zoroz";

function palindromeCheck(testWord) {
  let firstLetter = testWord[0];
  let lastLetter = testWord[testWord.length - 1];
  let i = 0;
  let f = testWord.length - 1;

  if (testWord.length < 2) {
    return true;
  }

  if (firstLetter === lastLetter) {
    i += 1;
    leftoverS = testWord.substring(i, f);
    return palindromeCheck(leftoverS);
  }
  return false;
}

palindromeCheck(word);

// Nat's Poetic version

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
