// Functions problem-4 - Write a JavaScript function that checks whether a passed string is palindrome or not.

//Using split(), reverse(), and join() methods:

const palindromeChecker = (str) => {
  const arrValue = string.split("");
  //console.log(arrValue);
  const reverseArr = arrValue.reverse();
  //console.log(reverseArr);
  const reverseStr = reverseArr.join("");
  //console.log(reverseStr);

  if (str === reverseStr) {
    console.log('Palindrome!');
  } else {
    console.log('Not a palindrome!');
  }
};

const string = prompt('Palindrome Checker!');
const value = palindromeChecker(string);

//1: palindromeChecker function accepts a string
//2: the string is split into an array, reversed and then joined using split(""), reverse() and join("") methods.
//3: if condition checks whether passed string equals reverseStr variable, console will log 'palindrome' or 'not a palindrome' if true or false
//4: const variable 'string' is a prompt() that accepts a value to be passed through the palindromeChecker function
