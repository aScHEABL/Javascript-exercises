const reverseString = function(string) {
    let result = "";
for (let i = string.length; 0 < i; i--) {
    result += string.charAt(i - 1);
}
return result;
};

// Do not edit below this line
module.exports = reverseString;
