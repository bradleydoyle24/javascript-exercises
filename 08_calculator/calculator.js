const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((accumulator, item) => accumulator + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, item) => accumulator * item, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let result = 1;
	while (number > 0) {
    result = number * result;
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
