// Functions problem-3 - Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

//using forEach for this problem:

let letterCheck = (string, letter) => {
  let splitString = string.split(" ");
  let letterCount = 0;

  splitString.forEach((i) => {
    if (i.includes(letter)){
      letterCount++
    }
  })
  return letterCount;
}

console.log(letterCheck('how many hills has he had to handle', 'h'));

//1: create a function expression which accepts a string and a letter
//2: split the string into a new Array, create a letter counter starting at 0
//3: forEach index(i) in the array, use an if statement to check whether that index includes the letter argument ('h')
//4:return the new letterCount after the forEach() method has fired the callback function
