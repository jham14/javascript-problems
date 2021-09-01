// Create an object, then write a JavaScript function that checks whether an object contains the specified key.

let user = {
  name: 'dr. evil',
  age: 57,
  location: 'unknown',
  email: 'onemilliondollars@aol.com',
  books: ['my life in evil', 'sharks with frickin lasers']
};

let keyFindAge = user.hasOwnProperty('age');

console.log(keyFindAge);

//1: user object contains 5 keys
//2: keyFindAge stores the hasOwnProperty() method on user - this accepts the argument of argument of age
//3: keyFindAge logs true as hasOwnProperty() is a boolean which returns true if the argument matches a key in the user Object.
