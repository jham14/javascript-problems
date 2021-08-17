// Find longest word in a string

//let splitString = "this is a relatively short little sentence".split(" ");

//console.log(splitString);
//empty string with a SPACE in .split() - each word now an array element


let findLongestWord = (string) => {
  let splitString = string.split(" ");
  let longestWord = 0
  //splitString variable stores whatever string we enter, which is then split() into an array.

  for(let i = 0; i < splitString.length; i++){
    if(splitString[i].length > longestWord){
      longestWord = splitString[i].length;
    }
  }
  return longestWord;
}
//if splitString's current index is greater than longestWord, longestWord stores that value

console.log(findLongestWord('this is a relatively short sentence!'));
