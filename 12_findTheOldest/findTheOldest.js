const findTheOldest = (peopleArray) => {
    peopleArray.forEach((person) => {
        let currentTime = new Date();
        let currentYear = currentTime.getFullYear();
        let seeIfPersonAlive = (person.yearOfDeath === undefined) ? true : false;
        if (seeIfPersonAlive === true) {
            person.yearOfDeath = currentYear;
        };
        console.log(person);
    });

    let metaDataArray = peopleArray.map((person) => {
        person.age = person.yearOfDeath - person.yearOfBirth;
        return person;
    });

    metaDataArray.sort((a, b) => a.age - b.age);
    console.log(metaDataArray[metaDataArray.length - 1]);
    return metaDataArray[metaDataArray.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;