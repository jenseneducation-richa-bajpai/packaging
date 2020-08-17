function add(x, y) {
  return x + y;
}

// ska räkna ut skillnaden mellan x och y, dvs x-y
function subtract(x, y) {
  return x - y;
}

// console.log('2+3 == ' + add(2, 3));

function multiply(x, y) {
  return x * y;
}
multiply(2 * 4);
module.exports = {
  add: add,
  subtract,
  multiply,
};
