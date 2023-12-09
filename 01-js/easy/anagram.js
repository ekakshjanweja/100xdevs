/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1 = str1.replace(/[^a-z]/gi, "").toLowerCase();
  let str2 = str2.replace(/[^a-z]/gi, "").toLowerCase();

  // Sort the strings and compare them
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

module.exports = isAnagram;
