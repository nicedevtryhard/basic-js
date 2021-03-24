const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  let month = date.getUTCMonth();
    if (month === 11 || month === 1 || month === 0) {
      return 'winter';
    } else if (month === 2 || month === 4 || month === 3) {
      return 'spring';
    } else if (month === 5 || month === 7 || month === 6) {
      return 'summer';
    } else if (month === 8 || month === 10 || month === 9) {
      return 'autumn';
    }
};