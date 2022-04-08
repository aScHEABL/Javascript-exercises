const leapYears = function(determineIfLeapYears) {
    if (determineIfLeapYears % 4 === 0 && determineIfLeapYears % 100 === 0 && determineIfLeapYears % 400 === 0) {
        return true;
    } else if (determineIfLeapYears % 4 === 0 && determineIfLeapYears % 100 === 0) {
        return false;
    } else if (determineIfLeapYears % 4 !== 0) {
        return false;
    } else if (determineIfLeapYears % 4 === 0) {
        return true;
    }
};


// Do not edit below this line
module.exports = leapYears;
