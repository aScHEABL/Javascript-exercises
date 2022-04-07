const sumAll = function(startingNum, endingNum) {
    switch (true) {
        case startingNum > endingNum :
            let temporaryValuePlaceholder = startingNum;
            startingNum = endingNum;
            endingNum = temporaryValuePlaceholder;
            break; 
        case startingNum < 0 :
            return "ERROR";
            break;
        case endingNum < 0 :
            return "ERROR";
            break;
        case typeof startingNum !== "number" :
            return "ERROR";
            break;
        case typeof endingNum !== "number" :
            return "ERROR";
            break;
    }
    let sum = startingNum;
    for (let i = startingNum + 1; i <= endingNum; i++) {
        sum += i;
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
