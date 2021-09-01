// Write a JavaScript function to sort the following array of objects by title value.
// Hint: Read about the JavaScript sort method.

const books = [

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

let sortBooks = books.sort((a,b) => {
  var nameA = a.title.toUpperCase();
  var nameB = b.title.toUpperCase();
  if (nameA < nameB) {
   return -1;
 }
 if (nameA > nameB) {
   return 1;
 }
 return 0;
});

console.log(sortBooks);

//1: sortBooks stores the sort() method on the books array.
//2: sort() takes a and b arguments to compare one another
//3: nameA and nameB variables store the title values - these are all made to ignore case sensitivity with the toUpperCase() method
//4: Three conditions check whether nameA is greater than nameB or vice versa - -1 sorts second, 1 sorts first - if equal, no sorting is done.
//5: sortBooks logs the books array to the console - sorted alphabetically by title
