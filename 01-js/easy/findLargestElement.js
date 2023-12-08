/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    larNum = numbers[0]
    for (num of numbers){
        if (num > larNum){
            larNum = num
        }
    }
    return larNum
}

module.exports = findLargestElement;
//findLargestElement([3, 7, 2, 9, 1])