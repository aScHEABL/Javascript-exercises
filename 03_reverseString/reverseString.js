const reverseString = function(string) {
<<<<<<< HEAD
    let result = "";
for (let i = string.length; 0 < i; i--) {
=======
    let result = ""
for (let i = string.length; i > 0; i--) {
>>>>>>> 130b27dec480fdf1e5275a6f25e6325f23fbf0cd
    result += string.charAt(i - 1);
}
return result;
};

// Do not edit below this line
module.exports = reverseString;
