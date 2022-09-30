"use strict";
// add whatever parameters you deem necessary & write docstring
/**
 input: arrays
 output: object
Iterate through first array and create object referencing the first array index
 */
// O(n)
function twoArrayObject(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] || null;
  }
  return obj;
}


console.log(twoArrayObject(['x', 'y', 'z'], [1, 2]));
// {'x': 1, 'y': 2, 'z': null}

console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]));
  // {'a': 1, 'b': 2, 'c': 3}