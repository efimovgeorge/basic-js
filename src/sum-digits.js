const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here

  let sum = 0;
  let str = '' + n;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
    
    console.log(sum)
  }
  let rez = sum;
  if (rez < 10) {
    return rez;
  }
  else {
    return getSumOfDigits(rez)
  }  
}

module.exports = {
  getSumOfDigits
};
