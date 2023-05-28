const convertToCelsius = function(fTemp) {
  // (F - 32) / 1.8
  // round to 1 decimal place
  let celsius = (Math.round(((fTemp - 32) / 1.8) * 10) / 10);
  return celsius;
};

const convertToFahrenheit = function(cTemp) {
  let fahrenheit = (Math.round(((cTemp * 1.8) + 32) * 10) / 10);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
