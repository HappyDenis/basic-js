const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    value === '' ? this.chain.push('( )') : this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if(isNaN(+position) ||
      position == '' ||
      this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chained = this.chain.join('~~');
    this.chain = []
    return chained
  }
};

module.exports = chainMaker;