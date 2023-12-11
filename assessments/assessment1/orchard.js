///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// create a dataframe of the apple acres;
const all_acres = [fujiAcres, galaAcres, pinkAcres];

// utilize a for...of loop to access each element of the 2x2 df for incrementing total_acres
let total_acres = 0;

for (row of all_acres) {
    for (acre of row) {
        total_acres += acre;
    }
}
console.log(`There were a total of ${total_acres} acres of apples picked this week.`)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// Divide total_acres by 7 to get the average acres picked per day.

const avg_daily_acres = total_acres / 7;

console.log(`On average, ${avg_daily_acres} acres were picked daily.`)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// create a variable to record beginning acres left, for output purposes
const start_acres_left = acresLeft;

// increment days until acresLeft 0 or less, using average daily acres as the decrement for acresLeft
while (acresLeft > 0) {
    acresLeft -= avg_daily_acres;
    days += 1;
}

// log the expected days to finish 
console.log(`If the daily average of ${avg_daily_acres} acres are picked, it would take approximately ${days} days to pick ${start_acres_left} acres.`);


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// for each element in the apple type, multiply that by acre yield of 6.5
for (const apple of fujiAcres) {
    yield = 6.5 * apple;
    fujiTons.push(yield);
}
console.log(fujiTons);

for (const apple of galaAcres) {
    yield = 6.5 * apple;
    galaTons.push(yield);
}
console.log(galaTons);

for (const apple of pinkAcres) {
    yield = 6.5 * apple;
    pinkTons.push(yield);
}
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// create variables for the total tons per variety
let total_fuji_tons = 0;
for (let i = 0; i < fujiTons.length; i++) {
    total_fuji_tons += fujiTons[i];
}

let total_gala_tons = 0;
for (let i = 0; i < galaTons.length; i++) {
    total_gala_tons += galaTons[i];
}

let total_pink_tons = 0;
for (let i = 0; i < pinkTons.length; i++) {
    total_pink_tons += pinkTons[i];
}

// convert each ton value to pounds
const fuji_lbs = total_fuji_tons * 2000;
console.log(`There were ${fuji_lbs} pounds of Fuji apples that were picked this week.`);

const gala_lbs = total_gala_tons * 2000;
console.log(`There were ${gala_lbs} pounds of Gala apples that were picked this week.`);

const pink_lbs = total_pink_tons * 2000;
console.log(`There were ${pink_lbs} pounds of Pink apples that were picked this week.`)


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89; 
const galaPrice = .64;
const pinkPrice = .55;

// multiply the pounds value for each variety by their respective price per apple to get expected profit
let fujiProfit = fuji_lbs * fujiPrice;
let galaProfit = gala_lbs * galaPrice;
let pinkProfit = pink_lbs * pinkPrice;

console.log(`The orchard stands to profit $${fujiProfit} from Fuji apples this week.`);
console.log(`The orchard stands to profit $${galaProfit} from Gala apples this week.`);
console.log(`The orchard stands to profit $${pinkProfit} from Pink apples this week.`);

// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// add all the profits from each varietal to obtain total profit
total_profit = fujiProfit + galaProfit + pinkProfit;
console.log(`The orchard's total profit from the three apple varieties will be $${total_profit}`);