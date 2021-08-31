// functions problem-5 - Write a JavaScript program that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".


// using a for loop and else if condition:

const fizzBuzz = () => {

  for(let i = 1; i <= 100; i++)
    if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz!');
    }else if(i % 3 === 0){
      console.log('Fizz');
    }else if (i % 5 === 0){
      console.log('Buzz');
    }else {
      console.log(i);
    }
}

console.log(fizzBuzz());


//1: fizzBuzz function contains a for loop that iterates from 1 to 100
//2: if statement checks whether each number iterated over has 0 as a remainder against both 3 and 5 - this prints fizzBuzz!
//3: else if statement checks only 3 against the iterated number - this prints Fizz
//4: else if statement checks only 5 - this prints Buzz
//5: else - print the current number being iterated
