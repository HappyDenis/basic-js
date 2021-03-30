const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (!date.getTime()) return new Error();
    let month = date.getMonth();
    if (month === 0 || month === 11 || month === 1) season = 'winter';
    if (month > 1 && month < 5) season = 'spring';
    if (month > 4 && month < 8) season = 'summer';
    if (month > 7 && month < 11) season = 'autumn';
return season
}