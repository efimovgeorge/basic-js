const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
  let num = email.indexOf('@');
  let dom =  email.slice(num+1);
  if (dom.includes('@')) {
    return getEmailDomain(dom)
  }
  else {
    return dom
  }
}

module.exports = {
  getEmailDomain
};
