//DOM - problem-4 Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the number of items and displays the item in the list.


function listItems () {
  let list = document.querySelectorAll('.cheese');
    list.forEach((i) => {
      console.log(i.text);
    })
  };

const cheese = listItems();


//1: listItems function has a dropdown variable that stores all elements with the cheese class
//2: forEach element in dropdown, log the element, including inner text
//3: finally, return dropdown to view the full node list
