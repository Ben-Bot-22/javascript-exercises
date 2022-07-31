const findTheOldest = function (people) {
  const year = new Date().getFullYear();
  //get age of the people in the array
  const age = people.map(function(person) {
    let deathDate = year;
    if (person.yearOfDeath) {
        deathDate = person.yearOfDeath;
    }
    return deathDate - person.yearOfBirth;
  });
  //get index of highest number in array
  const max = Math.max(...age);
  const index = age.indexOf(max);
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
