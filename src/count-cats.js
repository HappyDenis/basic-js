const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for(let i = 0;i < matrix.length; i++) {
      let mt = matrix[i];
      for(let j = 0; j <mt.length; j++) {
          if (mt[j] =='^^') count++;
      }
  } return count;
};