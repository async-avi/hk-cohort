/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelCount = [];
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    element = str[i];
    for (let j = 0; j < vowels.length; j++) {
      if (element == vowels[j] || element == vowels[j].toUpperCase()) {
        vowelCount.push(vowels[j]);
      }
    }
  }
  return vowelCount.length;
}

module.exports = countVowels;
