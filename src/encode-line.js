const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here

  let newStr = '';
  let len = str.length;
  let count = 1;
  for (let i = 0; i < len; i++) {
    /* let count = 1; */
    let litera = str[i];
    if (str[i+1] == litera) {
      count++;
    }
    else {
      if (count == 1) {
        newStr = newStr + litera;
      }
      else {
        newStr = newStr + count + litera;
        count = 1;
      }
    }
  }
  return newStr
}

module.exports = {
  encodeLine
};
