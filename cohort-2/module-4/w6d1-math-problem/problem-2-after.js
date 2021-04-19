// Speeds are in units of "miles per hour"
const speedA = 63;
const speedB = 44;

// Positions are in units of "miles along the road"
let positionA = 0;
let positionB = 120;
let elapsedMinutes = 0;

while (positionA < positionB) {
  positionA = positionA + (speedA * 1/60);
  positionB = positionB - (speedB * 1/60);
  elapsedMinutes += 1;
}

console.log('Brute-force result: ', elapsedMinutes);
console.log('Algebraic result: ', 1.121495327 * 60);
