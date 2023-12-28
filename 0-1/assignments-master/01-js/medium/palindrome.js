/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr = [];
  let finalStr = str
    .toString()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s]/g, "");
  let strRev = finalStr.split("").reverse().join("");
  for (i = 0; i < finalStr.length; i++) {
    if (finalStr[i] === strRev[i]) {
      arr.push(str[i]);
    }
  }
  if (arr.length === finalStr.length) return true;
  return false;
}

module.exports = isPalindrome;
