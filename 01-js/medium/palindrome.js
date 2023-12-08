/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  revString = str.toLowerCase().replace(/[^A-Z0-9]+/ig, "").split("").reverse().join(""); 
  if (revString == str.toLowerCase().replace(/[^A-Z0-9]+/ig, "")){
    return true;
  }else {
    return false;
  }
}

module.exports = isPalindrome;
//console.log(isPalindrome("tarat"))