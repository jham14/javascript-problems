// Write a JavaScript program to sort the items of an array.
// Example array: var myArray = [-3,8,7,6,5,-4,3,2,1];


var myArray = [-3,8,7,6,5,-4,3,2,1];

myArray.sort((a,b) => {
  if(a>b){
    return 1;
  } else if (b>a) {
    return -1;
  } else {
    return 0
  }
});

console.log(myArray);

//1: sort() method arranges elements by comparison
//2: sort() accepts two parameters representing each element compared
//3: using a and b we can set 3 conditions - +1, -1 and 0 represent ordering first, second and no change depending on statement
//.sort() is a destructive method - the sorted array can be logged directly to the console
