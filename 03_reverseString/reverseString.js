const reverseString = function(string) {
  const reversedArray = [];

  let length = string.length;
  let reversedString = "";

  for (i = length - 1; i >= 0; i--) {
    reversedArray.push(string.charAt(i));
  }
  
  for (i = 0; i < length; i++) {
    reversedString += reversedArray[i];
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
