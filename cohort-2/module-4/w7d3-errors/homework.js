// Move line 17 into a try/catch block, so that errors
// thrown by divideTwoNumbers() are caught and logged

function divideTwoNumbers(x, y) {
  if (parseFloat(x) !== x) {
    throw new Error('x is not a number');
  }
  if (parseFloat(y) !== y) {
    throw new Error('y is not a number');
  }
  if (y === 0) {
    throw new Error('divide by zero');
  }
  return x / y;
}

console.log(divideTwoNumbers(6, 0));
