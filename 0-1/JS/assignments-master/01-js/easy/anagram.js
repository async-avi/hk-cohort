/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let anagram = false;
  let arr = [];

  for (let i = 0; i < str1.length; i++) {
    let elementsUpperCase = str1[i].toUpperCase();
    if (str2.includes(elementsUpperCase)) {
      arr.push(elementsUpperCase);
    } else if (str2.includes(str1[i])) {
      arr.push(str2[i]);
    }
  }

  if (arr.length === str1.length) {
    return true;
  } else {
    return anagram;
  }
}

module.exports = isAnagram;
