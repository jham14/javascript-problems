// Create an array of people objects with first name, last name, and age, then write a JavaScript program to display the first and last names of all the people.
// Your function should take in an object and return the the values above.


const people = [
  {firstName: 'kevin', lastName: 'smith', age: 30},
  {firstName: 'sheila', lastName: 'aussie', age: 30},
  {firstName: 'nat', lastName: 'poole', age: 30},
  {firstName: 'richard', lastName: 'bacon', age: 30}
];

let names = people.map(person => person.firstName + ' ' + person.lastName);
console.log(names);

//1: people stores an Array containing 4 elements, all of which are objects with three properties.
//2: names stores the map() method on people. the person parameter represents each object/element. For each object, firstName and lastName are returned, with an empty string concatenated inbetween.
//3: names console.logs as the first and second property of each object
