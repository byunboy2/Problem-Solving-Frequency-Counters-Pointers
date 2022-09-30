"use strict";
// add whatever parameters you deem necessary & write docstring
/**
 input: array, avg
 output: boolean
 use two pointer pattern to see if the given array contains a pair that averages
 to the given average
 */
function averagePair(nums, avg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const average = (array[left] + array[right]) / 2;

    if (average === avg) {
      return true;
    } else if (average < avg) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
// O(n)
console.log(averagePair([1, 2, 3], 2.5));         // true
console.log(averagePair([3, 3, 6, 12, 19], 8));   // false
console.log(averagePair([1, 2, 3], 2));           // true
console.log(averagePair([], 4));                  // false
