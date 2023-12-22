/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let arr = [];
  let string1 = str1.toLowerCase().split("").join("");
  let string2 = str2.toLowerCase().split("").join("");

  if (string1.length === str2.length) {
    for (let i = 0; i < string1.length; i++) {
      if (string1.includes(string2[i])) {
        arr.push(string2[i]);
      }
    }
    if (arr.length === str1.length) {
      return true;
    }
  }
  return false;
}

module.exports = isAnagram;
