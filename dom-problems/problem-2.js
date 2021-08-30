//DOM - problem-2 Create a P element with a link inside. Then, write a JavaScript function to get the HREF attribute of the link.

//using querySelector and getAttribute:

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.avfc.co.uk');

//1: created a const to store a target for all <a> elements
//2: logged the href to the console using getAttribute - prints google.com(rubbish!)
//3: changed link to avfc.co.uk using setAttribute(better!)

//HTML below:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>javascript problems</title>
//   </head>
// 
//   <body>
//
//     <h1>DOM PROBLEMS!</h1>
//       <p>
//         <a href="https://google.com">get this link!</a>
//       </p>
//
//     <script src="problem-2.js"></script>
//   </body>
