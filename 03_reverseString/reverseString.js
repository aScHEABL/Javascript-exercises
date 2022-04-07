const reverseString = function(string) {
    let result = ""
for (let i = string.length; i > 0; i--) {
    result += string.charAt(i - 1);
}
return result;
};

// Do not edit below this line
module.exports = reverseString;
