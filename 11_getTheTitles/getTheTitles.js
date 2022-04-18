const getTheTitles = function(booksMetadata) {
const titleOfTheBooks = booksMetadata.map((booksMetadata) => booksMetadata.title);
console.log(titleOfTheBooks);
return titleOfTheBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
