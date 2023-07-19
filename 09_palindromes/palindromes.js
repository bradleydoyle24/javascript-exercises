
const palindromes = function(string) {
  let reducedArray = [];
  let reversedArray = [];
  lowerString = string.toLowerCase();

  for(i = 0; i < lowerString.length; i++) {
    let temp = lowerString.codePointAt(i);
    // Checks if letter or number. Places only letters or numbers in new arrays.
    // Function is supposed to ignore spaces and punctuation.
    if ((temp >= 48 && temp <= 57) ||
        (temp >= 65 && temp <= 90) ||
        (temp >= 97 && temp <= 122)) {
      reducedArray.push(temp);
      reversedArray.unshift(temp);
    }
  }
  let wrongCount = 0;
  for(i = 0; i < reducedArray.length; i++) {
    if (reducedArray[i] !== reversedArray[i]) {
      wrongCount++;
    }
  }
  if (wrongCount === 0) {
    return true;
  }
  else return false;
};

console.log(palindromes);

// Do not edit below this line
module.exports = palindromes;
