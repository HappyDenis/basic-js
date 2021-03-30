const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //if (isNaN(str) return false;
  //if (typeof(str) !== 'string') str.toString(); //не проходит null
  if (options.hasOwnProperty('strings') && typeof(options.strings) !== 'string') options.strings.toString();
  if (!options.hasOwnProperty('separator')) options.separator='+';
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator='|';
  if (!options.hasOwnProperty('repeatTimes')) options.repeatTimes=1;
  if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes=1;
  if (!options.hasOwnProperty('addition')) options.addition='';
  //  console.log (options);
return( 
  ((str+(options.addition+ options.additionSeparator)
  .repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length)
  +options.separator)
  .repeat(options.repeatTimes)).slice(0,-options.separator.length) ) 
};