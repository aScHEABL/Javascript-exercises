const caesar = function (string, shift) {
  const breakDownTheString = [];
  let shifttedString = "";
  for (let i = 0; i < string.length; i++) {
    breakDownTheString.push(string[i]);
  }
  //breakDownTheString.forEach((character) => shifttedString += String.fromCharCode(character.codePointAt(0) + shift));
  breakDownTheString.forEach(function (character) {
    if (!character.match(/[a-zA-Z]/)) {
      shifttedString += character;
    } else {
      shifttedString += String.fromCharCode(character.codePointAt(0) + shift);
    }
  });
  console.log(breakDownTheString);
  console.log(shifttedString);
  return shifttedString;
};

// Do not edit below this line
module.exports = caesar;
