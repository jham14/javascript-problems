// Write a JavaScript function to calculate the factorial of a number.

function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      //console.log(answer);
      answer = answer * i;
    }
    return answer;
  }
}
let n = 6;
answer = factorial(n)
console.log(answer);


//1: factorial function takes n as an argument
//2: The factorial of 0 and 1 is 1, so the variable 'answer' stores 1
//3: if n is passed as 0 or 1, the first condition is met and returns answer - 1
//4: else - for loop initializes at n. if i is greater or equal to 1, decrement by 1
//5: loop continues and multiplies n and i with each iteration
//6: factorial is returned at answer when iteration complete
