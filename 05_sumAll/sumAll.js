const sumAll = function(num1, num2) {
  let sum = 0;

  // Ensure numbers are entered
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  

  // Ensure no negative numbers
  if (num1 < 0 || num2 < 0) return "ERROR";

  // Reorder numbers if larger number first.
  if (num1 > num2) {
    let tmp = num2;
    num2 = num1;
    num1 = tmp;
  }

  for (i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
