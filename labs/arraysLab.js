const sampleArray = [2, 4, 6, 8, 10, 12, 1, 3, 5, 7];

// Make a variable called firstItem and set it equal to the first item in
// "sampleArray". Then, log it to the console.
// The expected output is 2.
const first_item = sampleArray[0];
console.log(`The first item is ${first_item}`);

// Make a vriable called arrayLength and set it equal to the length of
// "sampleArray". Then, log it to the console.
// The expected output is 10.
const array_length = sampleArray.length;
console.log(`The length of the sample array is ${array_length}`)


// Make a variable called lastItem and set it equal to the LAST item in
// "sampleArray". Then, log it to the console.
// Try to make sure you code still works even if you change the length of the
// sample array!
// The expected output is 7.
const last_item = sampleArray[sampleArray.length - 1];
console.log(`The last element in the array is ${last_item}`);


//////////////////PROBLEM 4////////////////////

// Add a 42 to the end of sampleArray. Then, log the
// whole array in the console.
// The expected output is [2, 4, 6, 8, 10, 12, 1, 3, 5,  7, 42]
sampleArray.push(42);
console.log(`The array is now ${sampleArray}`);

//////////////////PROBLEM 5////////////////////

// Write code to remove the last element from sampleArray 
// (the one you added in problem 4). Log the array after you are done to make
// sure that the element has been removed
// The expected output is [2, 4, 6, 8, 10, 12, 1, 3, 5,  7]
sampleArray.pop();
console.log(`Removed the array from the previous step and now the array is back to ${sampleArray}`);

//////////////////PROBLEM 6////////////////////

// Replace the first and last item in sampleArray with the number 42, then
// log it to the console.
// The expected output is [42, 4, 6, 8, 10, 12, 1, 3, 5, 42]
sampleArray[0, sampleArray.length - 1] = 42;
console.log(`The new sampleArray:${sampleArray}`);


//////////////////PROBLEM 7////////////////////

// Make a while loop that keeps going so long as "num" is an even number.
// inside the loop, print out "num", then divide it by two.
// For example, if "num" starts at 12, your code should print:
//
// 12
// 6
// 3    (<---- stop here, because three is odd)

let num = 12;
while (num % 2 === 0) {
    console.log(num);
    num /= 2;
}


//////////////////PROBLEM 8////////////////////

// Using a for...of loop, add ten to each element in startArray and then push 
// each new number into the newArr array. Then, log the result.

// If startArray is [1, 2, 3, 4], the result should be [11,12,13,14]

const startArray = [1, 2, 3, 4];
let newArray = [];
for (const element of startArray) {
    newArray.push(element + 10);
}
console.log(newArray);


//////////////////PROBLEM 9////////////////////

// Fill the "numbers" array with numbers 0-31 using a for loop. Log the result.
let numbers = [];
for (let i = 0; i < 32; i++) {
    numbers.push(i);
}
console.log(numbers);

//////////////////PROBLEM 10////////////////////

// Fill the "evens" array with even numbers 0-20 using a for loop. Log the result.
let evens = [];
for (let i = 0; i < 21; i+=2) {
    evens.push(i);
}
console.log(evens);


//////////////////PROBLEM 11////////////////////

// Fill the countdown array with numbers from 10 to 1 in descending order 
// using a for loop. Log the result.

let countdown = [];
for (let i = 10; i > 0; i--) {
    countdown.push(i);
}
console.log(countdown);


//////////////////PROBLEM 12////////////////////

// Using a for loop, fill the reversedArray with the elements of originalArray,
// but in reversed order. Log the result.
// In this example, the reversedArray should be [4, 3, 2, 1]

const originalArray = [1, 2, 3, 4];
const reversedArray = [];

for (i = originalArray.length - 1; i >= 0; i--){
    reversedArray.push(originalArray[i]);
}
console.log(reversedArray);



/// ///////////////PROBLEM 13////////////////////

// If the given item is in the groceryList, remove it from the groceryList.
// Otherwise, do nothing. Log the final groceryList at the end.
// As the variables are set up now, the expected output would be
// ['apple', 'cherry', 'durian']

const groceryList = ['apple', 'banana', 'cherry', 'durian']
const itemToRemove = 'banana';

if (groceryList.indexOf(itemToRemove) >= 0) {
    groceryList.splice(groceryList.indexOf(itemToRemove),1);
    console.log(groceryList);
} else {
    console.log(groceryList);
}

// Also try with itemToRemove = 'apricot' and make sure that nothing happens
// to the grocery list
// HP: can confirm nothing happened. 


//////////////////PROBLEM 14////////////////////

// In the function below, loop through the "repeats"" array. 
// If a number is the same as the previous number in the list, add it to a sum.
// Then, log the sum

// For example:
// [1, 1, 2, 5, 2, 6, 6] -> 7
// The sum should be 7 because there are two 1's next to each other and two 6's next to each other.
// The 2's are not repeats because they're not next to each other.

let sum = 0;
const repeats = [1, 1, 2, 5, 2, 6, 6];

// Q for office hour: i-1 >0 is false, then beginning of array. otherwise, -1 can begin at end, if there is 1 and at endd, it will add? or other way?
for (let i = 0; i <= repeats.length; i++) {
    if (repeats[i-1] === repeats[i]) {
        sum = sum + repeats[i];
    } else {
        // do nothing
    }
}
console.log(sum);
//////////////////PROBLEM 15////////////////////

// In the function below, inputArray is an array of numbers.
// Add the INDEXES of all positive numbers to the array called 'indexes'.
// For example:
// [1, -2, 3, 5, -8, -13, 21] -> [0, 2, 3, 6]

const inputArray = [1, -2, 3, 5, -8, -13, 21];
const indexes = [];

for (let i = 0; i <= inputArray.length; i++) {
    if (inputArray[i] > 0) {
        indexes.push(i);
    } else {
        // do nothing
    }
}
console.log(indexes);