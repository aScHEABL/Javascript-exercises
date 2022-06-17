const add = function(...num) {
	let sum = 0;
  num.forEach((value) => sum += value);
  return sum;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = (numArray) => {
  return numArray.reduce((a, c) => {
    return a + c;
  }, 0);
};

/* const multiply = (numArray) {
  totalSum = 1;
  numArray.forEach((item) => {
    let seeIfItemIsZero = (item === 0) ? 1 : item ;
    totalSum *= item;
  })
  return totalSum;
};
 */

const multiply = (numArray) => {
  return numArray.reduce((a, c) => {
    return a * c;
  }, 1);
};

const power = (baseNum, iteration) => {
	let sum = baseNum;
  for (let i = 0; i < iteration - 1; i++) {
    sum *= baseNum;
  };
  return sum;
};

const factorial = (factorialNum) => {
  let result = 0;
  let numberArray = [];
  if (factorialNum === 0) {
    result = 1;
  } else if (factorialNum === 1) {
    result = 1;
  } else {
    for (let i = factorialNum; i > 1; i--) {
      numberArray.push(i);
    };
  result = numberArray.reduce((a, c) => {
    console.log(a);
    return a * c;
  }, 1)
  };
  return result;
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