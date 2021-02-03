//EXERCISE TITLE - Math stuffs
//EXERCISE DATE - Feb 2 2021
//Description: Decided to take it back with some simple math functions today. The focus is on reinforcing solid output formattting

//FACTORIAL - Recursive Style. Will que up functions until num === 0, then will execute outwards (1 * 2 * 3 * ... * num)

let factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    return (num *= factorial(num - 1));
  }
};

// FACTORIAL B - Using a While Loop
let factorialB = function (num) {
  let base = 1;
  while (num > 1) {
    base *= num;
    num -= 1;
  }
  return base;
};

//FIBONACCI SEQUENCE. Given a length 'num', execute the add sequence starting with 0 and 1.
let fibArr = [0, 1];

//accepts a length, which is number of times to execute.
let fibFunc = function (num) {
  for (let i = 1; i < num - 1; i++) {
    let newNum = fibArr[i] + fibArr[i - 1];
    fibArr.push(newNum);
  }
  return fibArr;
};

// console.log(fibFunc(10));

//CIRCLE Formulas
let pi = Math.PI;
const circArea = function (num) {
  return pi * (num * num);
};
//Written arrow function style
const circPerim = (num) => {
  return 2 * pi * num;
};

let mathOutput = (num) => {
  return (
    "Factorial:" +
    factorial(num) +
    "</br> Area:" +
    circArea(num) +
    "</br> Circumference:" +
    circPerim(num)
  );
};

let desiredOutput =
  "Execute factorial, and Circle Area and Circumference of 4: " +
  "</br>" +
  mathOutput(4);

// desiredOutput = ;
//DONT CHANGE! THIS IS OUTPUT LINE
document.getElementById(
  "jsedit"
).innerHTML = `Result from exercise: ${desiredOutput}`;

// desired Output and such goes here
