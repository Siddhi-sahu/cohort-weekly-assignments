/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here

  let str1 = str.toLowerCase();
  let numOfVowels = 0;

  let vowels = ["a", "e", "i", "o", "u"];

  for (i = 0; i < str1.length; i++) {
    if (vowels.includes(str1[i])) {
      numOfVowels++;
    }
  }
  return numOfVowels;
}

module.exports = countVowels;
