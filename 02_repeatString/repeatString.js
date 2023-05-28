const repeatString = function(string, num) {
  if (num < 0) return "ERROR";
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += string;
  }
  return newString;
};

//create holder for string
//add string to holder (i)x
//return holder

// Do not edit below this line
module.exports = repeatString;
