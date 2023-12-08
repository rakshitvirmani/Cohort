/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    count = 0;
    vowelsString = 'aeiou';
    for (const char of str.toLowerCase()) {
      if (vowelsString.toLowerCase().includes(char)){
        count++;
      }
    };  
    return count;
}

module.exports = countVowels;
//console.log(countVowels('Coding is fun!!!'));