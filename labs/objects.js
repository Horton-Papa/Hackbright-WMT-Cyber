/// ////////////// PROBLEM 1 ////////////////////

// Modify the function below to return the firstName property of the person object.

function personName() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person.firstName; 
}

console.log(personName());


/// ////////////// PROBLEM 2 ////////////////////

// Modify the function below to return the location property of the person object.  Use bracket notation

function personLocation() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person["location"];
}
console.log(personLocation());

/// ////////////// PROBLEM 3 ////////////////////

/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

favoritesObj = {
  band : "Metallica",
  food: "Mexican",
  person: "Lauren",
  book: "Art of French Coooking",
  movie: "Fast times at Ridgemont High",
  holiday: "Chirstmas"
};

console.log(favoritesObj.movie);

/// ////////////// PROBLEM 4 ////////////////////

//Create a variable called userFirstName.  Assign it the value of the person's firstName property, using dot notation.

const person = {};

person['firstName'] = 'sally';

userFirstName = person.firstName;
console.log(person.firstName);


/// ////////////// PROBLEM 5 ////////////////////

// In the function updateUser, change the user parameter's name to Ryan, change the value of pwHash to superSafe
// and change the value of username to ryan2020. After you have updated all the values return the object.

// The existing user looks like this:
const someUser = {
  name: 'Sally Rally',
  pwHash: 'U+Ldlngx2BYQk',
  username: 'SallyRally801'
};

function updateUser(user) {
  user.name = "Ryan";
  user.pwHash = "superSafe";
  user.username = "ryan2020";

  return user;
}
console.log(someUser);

updateUser(someUser);
console.log(someUser);

/// ////////////// PROBLEM 6 ////////////////////

// In the function updateProfile, update the value of the given property to the given value. Return the updated object.
//
// The existing profile looks like this:
const userProfile = {
   email: 'test@google.com',
   pwHash: 'V-9n5bQyu81z0',
   location: 'Denver, CO'
}
console.log(userProfile);
// So updateProfile(userProfile, 'email', 'blah@yahoo.com') would update the email to 'blah@yahoo.com'

function updateProfile(profile, property, value) {
  profile[property] = value;

  return profile;
}


updateProfile(userProfile, 'email', 'blah@yahoo.com');
console.log(userProfile);

/// ////////////// PROBLEM 7 ////////////////////

// Inside the maxedOut function, loop over the given object using a for...in loop
// to change all the object property values to "max".
// Return the updated object.

function maxedOut(obj) {
  for (const key in obj) {
    obj[key] = "max"; // note to self use bracket notation, for dynamic processing -- less error prone
  }
  return obj;
}
console.log(userProfile);
maxedOut(userProfile);
console.log(userProfile);

/// ////////////// PROBLEM 8 ///////////////////

/*
  Write a function called double that takes in an object.
  Write a for...in loop that loops over the object and changes every value to be itself multiplied by 2.
  Return the updated object.
*/

function double(obj) {
  for (const key in obj) {
    obj[key] *= 2;
  }
  return obj;
}

testObj = {
  first: 1,
  scnd: 2,
  third: 7
}

console.log(testObj);
double(testObj);
console.log(testObj);


/// ////////////// PROBLEM 9 ///////////////////

/*
  Write a function called removePassword that takes in an object.
  Delete the property password and return the object.
*/

function removePassword(obj) {
  delete obj.password;
  return obj;
}

pwObj = {
  name: "me",
  password: "notSafe",
  pet: ["dog","cat"],
  number: 11
}

console.log(pwObj);
removePassword(pwObj);
console.log(pwObj);

/// ////////////// PROBLEM 10 ////////////////////

// Here we have a function called getValues that will take in an object.
// Return an array containing all the object's values.

function getValues(obj) {
  const values = Object.values(obj);

  return values;
}

testObj2 = {
  key1: 2,
  key2: 4,
  key3: 23
}

console.log(getValues(testObj2));

/// ////////////// PROBLEM 11 ////////////////////

// Use the spread operator to copy the given array.
// Then, add the string "copy" to the end of the copy and return the copy.

function copyArray(arr) {
  arrayCopy = [ ...arr ];
  arrayCopy.push("copy");

  return arrayCopy;
}
sampleArray = ["yes", "no", "maybe"];
console.log(copyArray(sampleArray));

/// ////////////// PROBLEM 12 ////////////////////

// Use the spread operator to copy the given object.
// Then, add a new key-value pair {copy: true} to the end of the copy and return the copy.

function copyObject(obj) {
  objCopy = { ...obj };

  objCopy.copy = true;
  return objCopy;
}

console.log(copyObject(testObj2));

/// ////////////// PROBLEM 13 ////////////////////

// Do not edit the code below.
const animalCount = {
  cats: 2,
  dogs: 5,
  mice: 0,
};
// Do not edit the code above.

// Use object destructuring syntax to create variables for each of the properties of the
// animalCount object.

const [prop0, prop1, prop2] = Object.entries(animalCount);
console.log(prop0);
console.log(prop1);
console.log(prop2);

/// ////////////// PROBLEM 14 ////////////////////

// Write a function called addition that takes in an array containing 2 numbers.
// In the function, use array destructuring to create variables for each of the numbers.
// Then return the sum of the two numbers.

function addition(array) {
  const [num1, num2] = array;

  return num1 + num2;
} 

numbers = [1,2];
console.log(addition(numbers));

/// ////////////// PROBLEM 15 ////////////////////

// Create a function called zooAnimals that will take an object parameter
// The object passed to this function will have the property names lion, tiger, and bear
// The values of these properties will be a number representing the count of that animal in the zoo
// Using object destructuring, return the total sum of the counts of these animals

function zooAnimals(obj) {
  const {lion, tiger, bear} = obj;

  return lion + tiger + bear;
}

animalsObj = {
  lion: 2,
  tiger: 1,
  bear: 3
}

console.log(zooAnimals(animalsObj));

/// ////////////// PROBLEM 16 ///////////////////

// Do not edit the code below.
const myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true,
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true,
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true,
    },
  ],
};
// Do not edit the code above.

/*
  Above is some information about my car. As you can see, I am not the best driver.
  I have caused a few accidents.
  Please update this driving record so that I can feel better about my driving skills.
    1. Write a function called recordCleaner.
    2. Loop over the accidents array (which is a property of the myCar object).
    3. For each accident, change atFaultForAccident from true to false.
*/

// function recordCleaner

function recordCleaner(obj, top_level_key = "accidents", second_level_key = "atFaultForAccident") {
  //assign accidents to an array
  const accidentsArray = obj[top_level_key];

  //loop through the array to access each object and change the value for the key atFaultForAccident
  for (let i = 0; i < accidentsArray.length; i++){
    const incidentsObj = accidentsArray[i];

    incidentsObj[second_level_key] = false;
  }
  return obj;
}

console.log(recordCleaner(myCar));