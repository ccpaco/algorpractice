//Array from range function

const numbers = arrayFromRange(-1, 10);
// a is min, b is max
// a += 1 until = b

function arrayFromRange(a, b) {
  let arr = [a];
  while (a < b) {
    a += 1;
    arr.push(a);
  }
  return arr;
}

console.log(numbers);
