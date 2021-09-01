//DOM - problem-4 Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the number of items and displays the item in the list.


function listItems () {
  let list = document.querySelectorAll('.cheese');
    list.forEach(i => console.log(i.text))
  };

const cheese = listItems();


//1: listItems function has variable 'list' that stores all elements with the cheese class
//2: forEach element in list, log the element's inner text
