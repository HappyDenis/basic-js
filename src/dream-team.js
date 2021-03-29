const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let fLetter =[];
  if (!Array.isArray(members)) return false;
for (let member of members) {   
    fLetter.push(member.charAt(0).toUpperCase())   
}
return fLetter
.sort()
.join('');
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
