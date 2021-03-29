const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //if (Number.isInteger(sampleActivity)) return false;
  //console.log(sampleActivity);
    let num= +(sampleActivity);
    if (num >0 && typeof(num) == 'number') {
      let izot =Math.log(MODERN_ACTIVITY/sampleActivity);
        izot = Math.ceil(izot/(0.693/HALF_LIFE_PERIOD));
    //  console.log(izot);
        return izot;
    }  else return false
  //throw new CustomError('Not implemented');num == 'string' 
  // remove line with error and write your code here
};
