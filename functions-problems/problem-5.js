// functions problem-5 - Write a JavaScript program that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".


// using a for loop and else if condition:

const fizzBuzz = () => {

  for(let i = 1; i <= 100; i++)
    if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz!');
    }else if(i % 3 === 0){
      console.log('Fizz');
    }else if (i % 5 === 0){
      console.log("Buzz");
    }else {
      console.log(i);
    }
}

console.log(fizzBuzz());
