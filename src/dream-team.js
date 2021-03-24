const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let names = [];
  if(members instanceof Array) {
  members.forEach((member) => {
    if (typeof member == "string") {
      names.push(member.trim().charAt(0).toUpperCase());
    }
  })
  return names.sort().join("");
}
  return false;
};