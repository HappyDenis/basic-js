const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, res = []) {
    // console.log (calculateDepth);
    res.push(depth);
    arr.forEach(elememt =>{ if (Array.isArray(elememt)) this.calculateDepth(elememt, depth + 1, res)
    });
    return Math.max.apply(null, res);
  }
};
/*For example:
const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
depthCalc.calculateDepth([[[]]]) => 3
*/