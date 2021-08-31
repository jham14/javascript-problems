// Write a simple JavaScript program to join all elements of the following array into a string.
// Example array: var my Color=["Red", "Green", "White", "Black"];

let myColor = ["Red", "Green", "White", "Black"];

function joinElements (array) {
  let strungArray = array.join(" ")
  return strungArray;
}

const toString = joinElements(myColor);

console.log(toString);

//1: joinElements accepts an array
//2: strungArray stores the join() method on the array argument - join accepts a spaced (" ") concatenation between elements
//3: the function then returns the stored value of strungArray
//4: toString stores the joined/strung elements of myColor
//5: toString logged to print Red Green White Black
