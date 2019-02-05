
function sum(fromN, toN) {

  if ((fromN - toN) === 0) {
    return  fromN;
  } else {
    return fromN + sum((fromN + 1), toN);
  }
}

module.exports = sum;
// console.log(sum(2, 4));
