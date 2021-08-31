// DOM - problem-3 Create a basic HTML page with a table and two rows in it. Then, write a JavaScript function to add rows to a table.

function addRow (tableclass) {
  let tableRef = document.querySelector(tableclass);
  let newRow = tableRef.insertRow(-1);
}

addRow('.main-table');
addRow('.secondary-table');

//1: function called addRow accepts the class of a table
//2: two variables inside the function store the class name and insertRow() method to append a new row
