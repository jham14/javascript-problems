//DOM - problem-1 Create a basic HTML page with a P element on it. Then, write a JavaScript program to set the background color of that paragraph.


const para = document.querySelector('p');

console.log(para.style);

para.style.backgroundColor = 'blue';

//1: created const 'para' to target all p elements
//2: logged para.style to the console to view declaration required
//3: changed the background to blue via the backgroundColor declaration
