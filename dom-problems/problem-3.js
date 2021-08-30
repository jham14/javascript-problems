// DOM - problem-3 Create a basic HTML page with a table and two rows in it. Then, write a JavaScript function to add rows to a table.

function addRow (tableclass) {
  let tableRef = document.querySelector(tableclass);
  let newRow = tableRef.insertRow(-1);
}

addRow('.main-table');
addRow('.secondary-table');

//1: function called addRow accepts the class of a table
//2: two variables inside the function store the class name and insertRow() method to append a new row


//HTML:

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>javascript problems</title>
//   </head>
// <body>
//
//   <h1>DOM PROBLEMS!</h1>
//     <p>
//       Here's a table:
//     </p>
//     <table class="main-table">
//       <tr>
//         <td>main table row 1</td>
//       </tr>
//       <tr>
//         <td>main table row 2</td>
//       </tr>
//     </table>
//
//     <table class="secondary-table">
//       <tr>
//         <td>not as important</td>
//       </tr>
//       <tr>
//         <td>still needs a new row</td>
//       </tr>
//     </table>
//
//   <script src="problem-3.js"></script>
// </body>
