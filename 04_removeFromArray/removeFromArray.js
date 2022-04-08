/*
const removeFromArray = function(array, ...removeTargetElement) {
    for (let targetElementIndex = 0; targetElementIndex < removeTargetElement.length; targetElementIndex++) {
        for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) { 
            switch (true) {
                case array[arrayIndex - 1] === removeTargetElement[targetElementIndex]: 
                    array.splice(arrayIndex - 1, 1); 
                    console.log(array);
                    break;
                }
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

/*
const removeFromArray = function(array, removeTargetElement) {
    for (let i = 0; i < array.length; i++) {
        switch (true) {
            case array[i - 1] === removeTargetElement:
                array.splice(i - 1, 1);
                console.log(array);
                break;
        }
    }
    return array;
    };
*/


// Do not edit below this line
module.exports = removeFromArray;

