/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let anagram = false;

  for (let i = 0; i < str1.length; i++) {
    let element = str1[i];
    for (let j = 0; j < str2.length; j++) {
      if (element === str2[j]) {
        anagram = true;
        return anagram;
      }
    }
  }
  return anagram;
}

module.exports = isAnagram;
