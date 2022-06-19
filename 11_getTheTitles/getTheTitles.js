const getTheTitles = (booksMetadata) => {
    const titleArray = booksMetadata.map((metadata) => metadata.title)
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
