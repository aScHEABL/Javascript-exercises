const findTheOldest = function(listOfPeople) {
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
/*
const mapTheOldest = filterTheNonOldest.map((theOldestPerson) => theOldestPerson.name);
console.log(mapTheOldest);
const theOldestPersonName = mapTheOldest.toString();
console.log(theOldestPersonName);
return theOldestPersonName;
*/

// Do not edit below this line
module.exports = findTheOldest;
