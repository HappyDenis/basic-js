const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

if (!Array.isArray(arr)) throw new Error();   
if (arr.length == 0) return [];
let temp = false;
let result = [];
  for (let i = 0; i < arr.length; i++) {
    if  (arr[i] === "--discard-next") {
        i++;
        temp = true
    } else 
    if  (arr[i] === "--discard-prev") {
        if (i != 0 && arr[i - 2] !== '--discard-next') result.pop();
        temp = true
    } else 
    if  (arr[i] === "--double-next") {
        if (i < arr.length - 1) result.push(arr[i + 1]);
        temp = true
    } else 
    if  (arr[i] === "--double-prev") {
        if (i != 0 && arr[i - 2] !== '--discard-next') result.push(arr[i - 1]);
        temp = true
    } else result.push(arr[i]);        
  }
if (temp) return result;
return arr;
}