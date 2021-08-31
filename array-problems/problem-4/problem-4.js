// Write a JavaScript program to remove duplicate items from an array (consider case sensitivity).
// Example array: [1,2,2,4,5,4,7,8,7,3,6]

const array = [1,2,2,4,5,4,7,8,7,3,6];

const setArray = new Set(array);

const newArray = [...setArray];

console.log(newArray);

//1: setArray stores the Set collection of array. it only includes unique values
//2: newArray stores the conversion of setArray back into an Array from the Set collection - using the spread (...) operator
//newArray now logs the unique value array to the console
