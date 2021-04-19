const childPrice = 1.50;
const adultPrice = 4.00;

const totalEarnings = 5050;

let children = 0;
let adults = 2200;

let solved = false;

while (!solved) {
  // Calculate the earnings from the current number of children and adults
  const hypotheticalEarnings = (children * childPrice) + (adults * adultPrice);

  // If we get the correct earnings, we solved the problem!
  if (hypotheticalEarnings === totalEarnings) {
    solved = true;
  // If we have counted down all the way below zero adults, something is wrong!
  } else if (adults < 0) {
    throw new Error('Problem has no solution!');
  // Otherwise, we haven't solved the problem yet.
  // Try again with one more child and one less adult (so they still add up to 2200)
  } else {
    children += 1;
    adults -= 1;
  }
}

console.log('Children: ', children);
console.log('Adults: ', adults);
