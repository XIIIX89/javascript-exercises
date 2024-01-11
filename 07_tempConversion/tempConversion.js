const convertToCelsius = function(F) {
  // F to C: C = (F - 32) * 5/9
  let C = (F - 32) * (5/9);
  return Math.round(C * 10) / 10; //rounds to one decimal
};

const convertToFahrenheit = function(C) {
  // C to F: F = C * 9/5 + 32
  let F = C * (9/5) + 32
  return Math.round(F * 10) / 10; //rounds to one decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
