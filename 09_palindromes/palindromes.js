 const palindromes = (string) => {
    const regEx = new RegExp(`!|\\.|,|" "`, "g");
    reverseString = string.split("").reverse().join("").toLowerCase().replaceAll(regEx, "");
    console.log(`reversed string:${reverseString}`);
    string = string.replaceAll(regEx, "").toLowerCase();
    console.log(`string:${string}`);
    let seeIfBothStringAreEqual = (reverseString === string) ? true : false;
    return seeIfBothStringAreEqual;
};


// Do not edit below this line
module.exports = palindromes;