//EXERCISE TITLE - Reverse integers
//EXERCISE DATE - Jan 19 2021

//STEPS

// Set integer and neg integers
// Start function,
// declare new variable = converted string number, and split
// declare empty array variable, set = "";

//NOTES

// conditions to for loop: (i = array.length - 1) b/c array.length returns total items in array, but array[index] starts at 0
// i >= 0 because it runs through the index from until at 0
// use parseInt on empty Arr to return a number (int), and mult by Math.sign so output is same + or - as og number

let testInt = 123;
let testIntNeg = -123;

flipNum = (num) => {
  let numSplit = num.toString().split("");
  let emptyArr = "";
  for (i = numSplit.length - 1; i >= 0; i--) {
    emptyArr += numSplit[i];
  }
  return parseInt(emptyArr) * Math.sign(num);
};

let desiredOutput = flipNum(testIntNeg);

// NAT Version

// numFlipper = (num) => {
//   let numFlipt = num.toString().split("");
//   let emptyArr = "";

//   for (i = numFlipt.length - 1; i >= 0; i--) {
//     emptyArr += numFlipt[i];
//   }

//   return parseInt(emptyArr) * Math.sign(num);
// };

// numFlipper(-3241243);

//BUGS : ignores 0 in any integer
