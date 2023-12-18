// add function:
function add(num1,num2) {
  return num1 + num2;
}

// subtract function:
function subtract(num1,num2) {
  return num1 - num2;
}

// multiply function
function multiply(num1, num2) {
  return num1 * num2;
}

// divide
function divide(num1,num2) {
  return num1/num2;
}

// power
function power(num1,num2) {
  return num1 ** num2;
}

// mod
function mod(num1,num2) {
  return num1 % num2;
}

// square root
function sqrt(base) {
  return Math.sqrt(base);
}

function calculate(expression) {

  let num1;
  let num2;
  let operator;
  
  //create array of possible operators.
  const operators = ["+", "-", "/", "*", "**","%", "^"];
  
  //tokenize the expression
  const tokens = expression.split(" ");
  
  //apply conditional logic to check if token length is either 2 or 3. 
  if (tokens.length === 2 || tokens.length === 3) {
    
    if (tokens.length === 3){
      const num1 = Number(tokens[0]);
      const num2 = Number(tokens[2]);
      const operator = tokens[1];
      
      // check if num1 and num2 are numbers, and check if operator is part of the 
      if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("Only numeric values are allowed");
      return;
      } else if (operators.includes(operator) === false) {
      alert("Please ensure the operator is one of the following: + , - , /, * , ^ or ** (exponent), % (modulus)");
      return;
      } else {
        if (operator === "+") {
          const result = add(num1,num2);
          return result;

        } else if (operator === "-") {
          const result = subtract(num1,num2);
          return result;

        } else if (operator === "*") {
          const result = multiply(num1,num2);          
          return result;

        } else if (operator === "/") {
          const result = divide(num1,num2);
          return result;

        } else if (operator === "^" || operator === "**") {
          const result = power(num1,num2);
          return result;

        } else if (operator === "%") {
          const result = mod(num1, num2);
          return result;
        }
      }
    } 

    if (tokens.length === 2) {
      const num = tokens[1];
      const operator = tokens[0];

      if (operator === "sqrt") {
        const result = sqrt(num);
        return result;
      
      } else {
        alert("Check square root operator, square root operator = sqrt");
        return;

      }

    }

  } else {
    //show alert and have user try again
    alert("Check input, expression has to be seperated by spaces, or entered too many parameters for expression");
    return;
  }
}


/* to do:
- take into account spacing
 - take into accoutn numbers
 

*/

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
