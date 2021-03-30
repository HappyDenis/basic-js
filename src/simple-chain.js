const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [],
  getLength() {
  return this.chains.length
  },
  addLink(value = '') { 
    value === '' ? this.chains.push('( )') : this.chains.push('( '+value+' )');
  return this
  },
  removeLink(position) {
    if(isNaN(+position) || this.chains[position] === undefined ||position == '') {
      this.chains= [];
      throw new Error();
    }
  this.chains.splice(position - 1,1);
  return this
  },
  reverseChain() {
    this.chains.reverse();
  return this
  },
  finishChain() {
    let chainsFin = this.chains.join('~~');
    this.chains= [];
  return chainsFin
  }
};

module.exports = chainMaker;