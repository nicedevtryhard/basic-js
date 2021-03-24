module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(element => {
    element.forEach((el)=> {
      el === "^^"? counter++ : false;
    })
  });
  return counter;
};
