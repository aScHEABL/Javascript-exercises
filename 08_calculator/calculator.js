const add = function(...num) {
  let sum = 0;
	for (let i = 0; i < num.length; i++) {
    switch (true) {
      case num[i] > num[num.length - 1]:
        let temporaryPlaceHolder = num[i];
        num[i] = num[num.length - 1];
        num[num.length - 1] = temporaryPlaceHolder;
        break;
    }
    sum += num[i];
  }
  return sum;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  for (let i = 0; i <= array.length - 1; i++) {
    sum *= array[i]
  }
  return sum;
};

const power = function(baseNum, iteration) {
  let sum = baseNum;
	for (let i = 0; i < iteration - 1; i++) {
    sum *= baseNum 
  }
  return sum;
};

const factorial = function(factorialNum) {
  if (factorialNum === 0) {
    factorialNum = 1;
  }
  let factorialCountDown = [];
  for (let i = factorialNum; i > 0; i--) {
    factorialCountDown.push(i);
  }
  console.log(factorialCountDown);
  let sum = 1;
  for (let i = 0;i < factorialNum ; i++) {
    sum *= factorialCountDown[i];
  }
  return sum;
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
