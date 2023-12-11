//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

// leave second argument for splice as undefined, to go through the whole array
const color_copy = faveColors.slice(0);
console.log(color_copy);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
color_copy.push('orange');
console.log(color_copy);
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];

// Note to self: check for index arguments 
const middle_nums = numbers.slice(1,-1);
console.log(middle_nums);

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

let answers = [];

for (const element of bigOrSmallArray) {
  if (element > 100) {
    answers.push('big');
  } else {
    answers.push('small');
  }
}
console.log(answers);