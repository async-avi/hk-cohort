/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr = [];
  str = str.toString().toLowerCase().replace(/\s/g, "");
  let strRev = str.split("").reverse().join("");
  for (i = 0; i < str.length; i++) {
    if (str[i] === strRev[i]) {
      arr.push(str[i]);
    }
  }
  if (arr.length === str.length) return true;
  return false;
}

module.exports = isPalindrome;
