const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  return args.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
};

const multiply = function(args) {
  return args.reduce((prevValue, nextValue) => prevValue * nextValue);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let ans = 1;
  for (let i = 0; i <= a; i++) {
    if (i === 0) continue;
    ans *= i
  }
  return ans;
};

// console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
