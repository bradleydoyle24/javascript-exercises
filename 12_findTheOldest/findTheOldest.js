const findTheOldest = function(array) {
  /*
  Search through list
  Make variable of oldest age
  Find age of person
    age of death - age of birth
  Compare ages to oldest age variable
  If over, change oldest age variable
  Return people[i] of oldest person
  */

 const date = new Date();
 const currentYear = date.getFullYear();

  let oldestAge = 0;
  let oldestPerson;
  for(i = 0; i < array.length; i++) {
   if (array[i].yearOfDeath === undefined) {
      array[i].yearOfDeath = currentYear;
    }
    let age = array[i].yearOfDeath - array[i].yearOfBirth;
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = array[i];
    }
  }
  return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
