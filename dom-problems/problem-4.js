//DOM - problem-4 Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the number of items and displays the item in the list.


function listItems () {
  let dropdown = document.querySelectorAll('.cheese');
    dropdown.forEach((i) => {
      console.log(i);
    });
    return dropdown
}

console.log(listItems());

//1: listItems function has a dropdown variable that stores all elements with the cheese class
//2: forEach element in dropdown, log the element, including inner text
//3: finally, return dropdown to view the full node list 


//HTML

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>javascript problems</title>
//   </head>
//
//   <body>
//
//     <h1>DOM PROBLEMS!</h1>
//
//       <label for="cheeses">Select a cheese!</label>
          // <select name="cheeses" id="cheeses">
          //   <option class="cheese" value="brie">Brie</option>
          //   <option class="cheese" value="camembert">Camembert</option>
          //   <option class="cheese" value="mozzarella">Mozzarella</option>
          // </select>
//
//     <script src="problem-4.js"></script>
//   </body>
