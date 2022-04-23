const caesar = function (string, shift) {
  breakDownTheString = string.split("");
  encryptedString = "";
  let exceededNum = 0;
  breakDownTheString.forEach((character) => {
    if (!character.match(/[a-zA-Z]/)) {
      encryptedString += character;
    } else if (character.charCodeAt(0) <= 90 && character.charCodeAt(0) + shift > 90) { //if the given character is from A to Z and if the character's ASCII code + shift exceeds Z's code.
      exceededNum = (character.charCodeAt(0) + shift - 65) % 26;
      encryptedString += String.fromCharCode(65 + exceededNum);
    } else if (character.codePointAt(0) <= 122 && character.codePointAt(0) + shift > 122) { //if the given character is from a to z and if the character's ASCII code + shift exceeds z's code
      exceededNum = (character.charCodeAt(0) + shift - 97) % 26;
      encryptedString += String.fromCharCode(97 + exceededNum);
    } else {
      encryptedString += String.fromCharCode(character.charCodeAt(0) + shift);
    }
  });
  console.log(breakDownTheString);
  console.log(encryptedString);
  return encryptedString;
};

// Do not edit below this line
module.exports = caesar;
