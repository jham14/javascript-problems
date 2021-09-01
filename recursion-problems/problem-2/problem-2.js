//Write a JavaScript program to compute the sum of an array of integers.

var arraySum = function(array) {
  if (array.length === 1) {
    return array[0];
  }
  else {
    return array.pop() + arraySum(array);
  }
};

console.log(arraySum([3,4,4,4]));

//1: arraySum accepts an array as an argument
//2: if array is 1 element long - return element value
//3: else add last element in array (pop() returns last element) with array




//alt method:

let array = [1, 2, 3, 4, 5, 6],
    sum = 0,
    i;
for (i = 0; i < array.length; i += 1)
   {
    sum += array[i];
  }
console.log(sum);
