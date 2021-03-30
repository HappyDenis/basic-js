const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //console.log(members)
  let fLetter =[];
    if (!Array.isArray(members)) return false;
    for (let member of members) {
    //console.log(typeof(member))
      if (typeof(member)== 'string') {
      fLetter.push(member.trim().charAt(0).toUpperCase());
      }
    }
return fLetter.sort().join('');
};


