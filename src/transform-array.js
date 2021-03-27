module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("arr is not an Array");
  }
  const cases = {
    "--double-next": 1,
    "--double-prev": 2,
    "--discard-next": 3,
    "--discard-prev": 4,
  };

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cases[arr[i]]) {
      switch (cases[arr[i]]) {
        case 1:
          if (i !== arr.length - 1) {
            newArr.push(arr[i + 1]);
          }
          break;
        case 2:
          if (i > 0 && arr[i - 2] !== "--discard-next") {
            newArr.push(arr[i - 1]);
          }
          break;
        case 3:
          if (i !== arr.length - 1) {
            i++;
          }
          break;
        case 4:
          if (i > 0 && arr[i - 2] !== "--discard-next") {
            newArr.pop();
          }
          break;
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
