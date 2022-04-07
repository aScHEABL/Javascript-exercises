/*test 1
const removeFromArray = function(array, targetElement) {
for (let i = 0; i < array.length; i++) {
    switch (true) {
    case array[i - 1] === targetElement:
        array.splice(i - 1, 1);
        break;
}
}
return array;
};
*/

const removeFromArray = function(array, ...targetElement) {
    for (let targetElementIteration = 0; targetElementIteration < targetElement.length; targetElementIteration++) {
        for (arrayIteration = 0; arrayIteration < array.length; arrayIteration++) {
            switch (true) {
                case array[arrayIteration] === targetElement[targetElementIteration]:
                array.splice(arrayIteration, 1);
                break;
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;

