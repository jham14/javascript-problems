// Write a JavaScript function to calculate the factorial of a number.

function factorial(n){
  if (n == 1){
    return n;
  }else{
    return n * factorial(n - 1);
  }
}
const n = 6;
answer = factorial(n)
console.log(answer);


//1: factorial function takes n as an argument
//2: if n is the same value as 1 - return 1
//3: else multiply factorial function n - 1
//  6 * 5 (starting at n-1) * 4 * 3 * 2 * 1 = 720
// answer logs 720
