// Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.
// Example: If I pass in an array and the number 2, your function returns the first 2 elements in that arrays.

const romans = ['julius', 'brutus', 'cicero', 'pliny', 'julia', 'pompey'];

function nElements (array, n) {
  let newArray = array.slice(array, n)
  return newArray
}

const firstThree = nElements(romans, 3);

console.log(firstThree);

//1: nElements function accepts any array and desired number of elements from that array as arguments.
//2: newArray stores the slice() method on the chosen array, and the number required
//3: the function then returns the data stored in newArray
//4: firstThree variable stores the first three elements in the romans Array
//5: finally - log firstThree to the console
