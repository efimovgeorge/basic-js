const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * `chainMaker` имееет несколько **методов** для создания цепочек и их модификации:
* `getLength` возвращает текущую длину цепи в виде числа;
* `addLink(value)` добавляет звено, содержащее строковое представление `value` к цепочке;
* `removeLink(position)` удаляет звено цепи, находящееся в заданном положении;
* `reverseChain` разворачивает цепь задом наперед;
* `finishChain` завершает цепь и **возвращает** ее.
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {

    this.arr.push('' + value);
    return this;
  },
  removeLink(position) {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.arr = [];
      throw Error("You can't remove incorrect link!");
    }
    else {
      this.arr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    let str = this.arr.join(' )~~( ');
    this.arr = [];
    str = '( ' + str + ' )';
    return str;
  }
  
};

module.exports = {
  chainMaker
};
