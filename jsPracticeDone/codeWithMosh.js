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
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // callback function level, put 'this' outside to access title
    this.tags.forEach(function (tag) {
      console.log(this, tag); // or this.title , will give some console log error
    }, this); // placing this after function brings it back to obj scope, but still loads extra metadata
  },
};

// obj method call
// ends up calling 3 Window objects but each tag is called
video.showTags();

// without metadata
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag); //using self.title eliminates extra metadata
    });
  },
};

// obj method call
// ends up calling 3 Window objects but each tag is called
video.showTags();

// Changing this

function playVideo() {
  console.log(this);
}

// only difference is passing arguments, apply requires array form
playVideo.call({ name: "Chris" }, 1, 2);
playVideo.apply({ name: "Chris" }, [1, 2]);

// returns a new function, able to set to a const or call right away
playVideo.bind({ name: "Chris" })();

playVideo();

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    ); // placing this after function brings it back to obj scope, but still loads extra metadata
  },
};

// ES6 syntax, arrow function eliminates need for .bind(this)
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

// sum of arguments, special case with arrays
// rest operator converts args into an array, in this case making an Array of array
const testSumF = [1, 2, 3, 4, 5, 6];

function sum(...items) {
  return items.reduce((a, b) => a + b);
}

console.log(sum(testSumF)); // returns the whole array

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    // rest operator created a nested Array, so items[0] is the first array obj
    items = [...items[0]]; //Uses spread operator for copying the array

  return items.reduce((a, b) => a + b);
}

// Review Exercise for Error handling

const numbers = [1, 2, 3, 4];
const count = countOccurences(numbers, 1); // what if passing boolean or null args? Returns error
console.log(count);

function countOccurences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

// Try - Catch

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array");

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
