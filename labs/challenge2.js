/*
Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.
 */


// modify to return unique later

function luckyNumbers (num) {
    const array = [];

    for (i = 0; i < num; i++) {
        array.push(Math.floor(Math.random() * 10));
    }

    
    return array;
}

console.log(luckyNumbers(3));

/* Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards. */

// create a function taking in any length array
// tokenize the vector

function isPalindrome(expression) {
    array = expression.split("");
    arrayCopy = [ ...array ];
    array2 = arrayCopy.reverse();
    
    word1 = array.join("");
    word2 = array2.join("");

    if (word1 === word2) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("nope"));


array.array.forEach(element => {
    
});