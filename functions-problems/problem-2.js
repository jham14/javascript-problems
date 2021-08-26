//Functions problem-2 - Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

//using for..of which works on strings and arrays:

const getVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0
    //console.log(string);//'testing for any vowels here'
  for (let chars of string) {
    //console.log(chars); - now every letter is logged to the console
    if (vowels.includes(chars)){
      vowelsCount++
    }
  }
  return vowelsCount
};

console.log(getVowels('testing for any vowels here'));


//1: getVowels accepts a string as an argument
//2: store a vowels array and vowel counter inside the Function
//3: using for..of loop to iterate over the string argument
//4: use 'if' condition to check if vowels are included in current iteration
//5: if vowels are included, increase value of vowelsCount by 1
//6 finally, return vowel count after loop is complete
