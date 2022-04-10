const palindromes = function (text) {
text = text.toLowerCase();
text = text.replaceAll("!", "");
text = text.replaceAll(",", "");
text = text.replaceAll(" ", "");
text = text.replaceAll(".", "");
console.log(text);
let reverseText = "";
console.log(reverseText);
for (let i = text.length; i > 0; i--) {
    reverseText += text.charAt(i - 1);
}
if (reverseText === text) {
    return true;
} else if (reverseText !== text) {
    return false;
}
};

function reverseString(text) {
}

// Do not edit below this line
module.exports = palindromes;
