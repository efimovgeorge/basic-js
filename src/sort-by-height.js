const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i])
    }
  }

  newArr.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (arr[j] !== -1) {
      arr[j] = newArr[i];
      j++
    }
    else {
      j++;
      i--;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
