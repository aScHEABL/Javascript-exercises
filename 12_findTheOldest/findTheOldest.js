const findTheOldest = function(listOfPeople) {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    listOfPeople.forEach(function(checkIfAlive) {
        if (isNaN(checkIfAlive.yearOfDeath)) {
            checkIfAlive.yearOfDeath = currentYear;
        }
    });
    console.log(listOfPeople);
    const mapAges = listOfPeople.map((age) => age.yearOfDeath - age.yearOfBirth);
    console.log(mapAges);
    const sortAges = mapAges.sort((a, b) => b - a);
    console.log(sortAges);
    const filterTheNonOldest = listOfPeople.filter((theOldestPerson) => theOldestPerson.yearOfDeath - theOldestPerson.yearOfBirth === sortAges[0]);
    console.log(typeof filterTheNonOldest);
    console.log(Array.isArray(filterTheNonOldest));
    console.log(filterTheNonOldest[0]);
    return filterTheNonOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
