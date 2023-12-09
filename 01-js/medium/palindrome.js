/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Your code here

  str = str.toLowerCase();
  condition
  str = str.replace(/[^a-z0-9]/gi, "");

  let revStr = str.split("").reverse().join("");

  if (revStr.toLowerCase() === str.toLowerCase()) {
    return true;
  }

  return false;
}

console.log(isPalindrome("A man a plan a canal Panama"));

module.exports = isPalindrome;
