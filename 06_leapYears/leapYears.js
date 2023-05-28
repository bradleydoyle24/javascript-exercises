const leapYears = function(year) {
  // divisible by 4 = true 
  // divisible by 100 = not
  // Divisible by 400 = true

  // Start with / 100, as those are not leap years
    // But if divisible by 100 && 400, it IS a leap year

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {return false};
    } else {return true;}
  } else {return false;}
};

// Do not edit below this line
module.exports = leapYears;
