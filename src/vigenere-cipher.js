/*const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
*/
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    direct;
    constructor(reverse) {
        reverse === false ? this.direct = false : this.direct = true;
    }
    encrypt(message, key) {
        if (!message || !key) throw new Error('Error');
        let result = '';
        let temp = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            let getCode = message.codePointAt(i);
            if (getCode >= 65 && getCode <= 90) {
                getCode = (message.codePointAt(i) + key.codePointAt(temp % key.length) - 130) % 26 + 65;
                result += String.fromCodePoint(getCode);
                temp+=1;
            } else {
              result += String.fromCodePoint(getCode);
            }
        }
        if (this.direct) return result;
        else return result.split('').reverse().join('');
    }
    decrypt(message, key) {
        if (!message || !key) throw new Error('Error');
        let result = '';
        let temp = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            let getCode = message.codePointAt(i);
            if (getCode >= 65 && getCode <= 90) {
              getCode = (message.codePointAt(i) + 26- key.codePointAt(temp % key.length)) % 26 + 65;
                result += String.fromCodePoint(getCode);
                temp+=1;
            } else {
              result += String.fromCodePoint(getCode);
            }
        }
        if (this.direct) return result;
        else return result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;