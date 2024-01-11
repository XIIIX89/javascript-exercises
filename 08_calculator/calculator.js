const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  if(array.length === 0) {return sum;}
  else {
	for (let i = 0; i <= array.length - 1; i++){
    sum += Number(array[i]);
  }
  return sum;
  }
  // OR return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  let finalProduct = array.reduce((product, current) => product * current);
  return finalProduct;
};

const power = function(a, b) {
	let raisedNumber = a ** b;
  return raisedNumber
};

const factorial = function(num) {
  
	if(num === 0) {return 1;}
  else {return num * factorial(num -1);}
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
