// 7/8/21 Functions notes from JavaScript I course, Code with Mosh

// Hoisting is moving function declarations to the top, before function calls

// Function Declaration : can be called before it is defined
function walk() {
  console.log("One step at a time");
}

// Function expression :
const run = function () {
  console.log("Run Forrest, run!");
};

// arguments object, has a callee and length property and therefore can use let-of loop

function sum(a, b) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// The rest operator (...args), edited sum function to use reduce

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));

// Shopping items
function onSale(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(onSale(0.1, 20, 30)); // 10% discount as 0.1,

// Default Parameters

function interest(principal, rate, years) {
  rate = rate || 3.5; // defaults to 3.5 if no previous rate
  years = years || 5;

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

// Default values for interest function, REQUIRES that default values for parameters after be defined

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));


// method -> obj
// function -> global (window, global)
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    // callback function level, put 'this' outside to access title
    this.tags.forEach(function(tag){
      console.log(this, tag);
    }, this); // placing this after function brings it back to obj scope
  }
};

// obj method call
// ends up calling 3 Window objects but each tag is called
video.showTags();