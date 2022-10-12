const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
  let arr = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];
  let a = n.split('-');
  if (a.length !== 6) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < 6; i++) {
    if (arr.includes(a[i][0]) && arr.includes(a[i][1])) {
      count++;
    }
  }
  if (count == 6) {
    return true;
  }
  else {
    return false;
  }
}
module.exports = {
  isMAC48Address
};
