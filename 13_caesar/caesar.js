const caesar = function (string, shift) {
  const breakDownTheString = string.split("");
  let encryptedString = "";
  breakDownTheString.forEach((character) => {
    let charCode = character.charCodeAt(0)
    if (shift > 25) shift %= 26;
    if (!character.match(/[a-zA-Z]/)) {
      encryptedString += character;
    } else {
      let ifUpperOrLowerCaseAtoZ = (charCode <= 90) ? "upperCase" : "lowerCase";
      console.log(character);
      console.log(charCode + shift);
        if (ifUpperOrLowerCaseAtoZ === "upperCase") {
            if (charCode + shift > 90) {
              encryptedString += String.fromCharCode((charCode + shift + 65) % 26 + 65);
            } else if (charCode + shift < 65) {
              encryptedString += String.fromCharCode((charCode + shift + 65) % 26 + 65);
            } else encryptedString += String.fromCharCode(charCode + shift);
        } else if (ifUpperOrLowerCaseAtoZ === "lowerCase") {
            if (charCode + shift > 122) {
              encryptedString += String.fromCharCode((charCode + shift + 97) % 26 + 97);
            } else if (charCode + shift < 97) {
              encryptedString += String.fromCharCode((charCode + shift + 97) % 26 + 97);
            } else encryptedString += String.fromCharCode(charCode + shift);
        }
    }
  })
  return encryptedString;
};

// Do not edit below this line
module.exports = caesar;
