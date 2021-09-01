// Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object.

const user = {
  name: 'jeff',
  email: 'jeff@aol.com',
  age: 30
};

function countProperties(obj) {
    return Object.keys(obj).length;
};

const userItems = countProperties(user);
console.log(userItems);

//1: The countProperties function accepts an object as a parameter - it then returns a single value using object.keys() to cycle through all of the keys, and then .length to return the numeric value of this total.
//2: userItems stores countProperties with an argument of user
//3: userItems console.logs as 3 (name, email, age)
