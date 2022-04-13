const fibonacci = function(fibonacciIndex) {
    const fibonacciArray = [0,1,1];
    fibonacciIndex = +fibonacciIndex;
    if (fibonacciIndex < 0) {
        return "OOPS";
    } else if (fibonacciIndex < 3) {
        return fibonacciArray[fibonacciIndex];
    } else if (fibonacciIndex >= 3) {
        for (let i = 3; i <=fibonacciIndex; i++) {
            let fibonacciNum = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            fibonacciArray.push(fibonacciNum);
        }
    }
    return fibonacciArray[fibonacciIndex];
}

// Do not edit below this line
module.exports = fibonacci;
