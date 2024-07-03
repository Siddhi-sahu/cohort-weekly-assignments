/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase();
  let finalStr = str1.replace(/[^a-z0-9]/gi, "");

  // let r = str2.split("");

  let revStr = finalStr.split("").reverse().join("");

  if (finalStr === revStr) {
    return true;
  } else if (finalStr !== revStr) {
    return false;
  }
}

module.exports = isPalindrome;
