"use strict";
// add whatever parameters you deem necessary & write doc comment
/*
Input : String word, String letters
Output: Boolean Value
Takes word and letters and checks if word can be created using the given letters
**/

// O(1+n+n+n)=>0(n)
function canConstructWord(word, letters) {
  if (letters.length < word.length) {
    return false;
  }
  const freqLetters = createFrequencyCounter(letters);
  const freqWord = createFrequencyCounter(word);
  for (let key in freqWord) {
    if (freqLetters[key] < freqWord[key]) {
      return false;
    }
  }
  return true;
}
/*
Input: string
output: object counter
Counts occurence per letter
**/
function createFrequencyCounter(string) {
  const count = {};
  for (let letter of string) {
    const curr = count[letter] || 0;
    count[letter] = curr + 1;
  }
  return count;
}

console.log(canConstructWord('aa', 'abc'));
console.log(canConstructWord('abc', 'dcba'));
console.log(canConstructWord('aabb', 'bcabad'));