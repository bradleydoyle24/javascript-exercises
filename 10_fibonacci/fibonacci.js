const fibonacci = function(number) {
  let a = 0;
  let b = 1;
  let c;
  if (number == 1) return 1;
  if (number >= 0){  
    for (i = 1; i < number; i++) {
      c = a + b;
      a = b;
      b = c;
    }
  return c;
  }
  else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
