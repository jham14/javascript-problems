// Functions problem-1 - Find the longest word in a string

//let splitString = "this is a relatively short little sentence".split(" ");

//console.log(splitString);
//empty string with a SPACE in .split() - each word now an array element


const findLongestWord = (string) => {
  let splitString = string.split(" ");
  let longestWord = splitString[0];
  //splitString variable stores whatever string we enter, which is then split() into an array.
  //longestWord is currently first index in new Array ('this')

  for(let i = 0; i < splitString.length; i++){
    if(splitString[i].length > longestWord.length){
      longestWord = splitString[i];
    }
  }
  return longestWord;
};
//logs relatively

console.log(findLongestWord('this is a relatively short sentence!'));
