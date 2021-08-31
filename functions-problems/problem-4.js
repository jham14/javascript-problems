// Functions problem-4 - Write a JavaScript function that checks whether a passed string is palindrome or not.

//Using replace(), toLowerCase(), split(), join(), and reverse() methods:

const palindromeChecker = (str) => {
  let arrValue = string.replace(/ /g,'').toLowerCase().split("");
  const actualStr = arrValue.join('');
  //console.log(arrValue);
  const reverseArr = arrValue.reverse();
  //console.log(reverseArr);
  const reverseStr = reverseArr.join("");
  //console.log(reverseStr);

  if (actualStr === reverseStr.toLowerCase()) {
    console.log('Palindrome!');
  } else {
    console.log('Not a palindrome!');
  }
};

const string = prompt('Palindrome Checker!');
const value = palindromeChecker(string);

//1: palindromeChecker function accepts a string
//2: the string has any white space removed using the regular expression .replace(/ /g,"") - is converted toLowerCase() - and then split into an array. This is stored in arrValue
//3: reverseArr stores arrValue - reversed with reverse() method
//4: reverseArr is then joined using join() method - stored in reverseStr variable
//5: if condition checks whether passed string equals reverseStr variable, console will log 'palindrome' or 'not a palindrome' if true or false
//6: const variable 'string' is a prompt() that accepts a value to be passed through the palindromeChecker function
