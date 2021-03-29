const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach((element) => {
      let counter = 1;
      if (Array.isArray(element)) {
        counter += this.calculateDepth(element);
        if (counter > depth) {
          depth = counter;
        }
      }
    });
    return depth;
  }
};
