// Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
// Your JavaScript function should take in two parameters, the object and the key/property you want to delete.


let user = {
  name: 'dr. evil',
  age: 57,
  location: 'unknown',
  email: 'onemilliondollars@aol.com',
  books: ['my life in evil', 'frickin lasers']
};

function removeProperty(obj, prop) {

  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
  }
};


removeProperty(user, 'age')
removeProperty(user, 'books')

console.log(user);

//1: removeProperty function accepts object and property as arguments
//2: hasOwnProperty() method returns true or false - if the object contains the property passed as an argument, that property will be deleted using the delete operater
//3: removeProperty function called to delete age and books properties
//4: user now console.logs with 3 of 5 original properties
