module.exports = function repeater(str, options) {
  let result = "";
  let repeatTimes = 1;
  let additionRepeatTimes = 1;
  let separator = "+";
  let additionSeparator = "|";
  let addition = "";
  if (options) {
    separator = options.separator || separator;
    repeatTimes = options.repeatTimes || repeatTimes;
    additionSeparator = options.additionSeparator || additionSeparator;
    additionRepeatTimes = options.additionRepeatTimes || additionRepeatTimes;
  }
  if (options.addition === undefined) {
    options.addition = addition;
  }
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += options.addition;
      if (j < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
