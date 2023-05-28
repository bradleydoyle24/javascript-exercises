const removeFromArray = function(array, ...args) {
  let length = array.length;

  for (i = 0; i < args.length; i++){
    for (j = 0; j < length; j++) {
      if (array[j] === args[i]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
