// This program rolls five dice three times,
// and prints out the best (highest scoring) roll.
// Weekend project: Organize and simplify this program
// by moving repeated code into reusable functions

const DICE_SYMBOLS = [
  '\u2680',  // ⚀
  '\u2681',  // ⚁
  '\u2682',  // ⚂
  '\u2683',  // ⚃
  '\u2684',  // ⚄
  '\u2685',  // ⚅
];

let bestTotal = 0;
let currentTotal = 0;
let rolledDiceIndices = [];
let rolledDiceSymbols = [];

// Reset our total and our "index" array
// before we start a new random roll
currentTotal = 0;
rolledDiceIndices = [];

// Loop five times
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * 6);
  rolledDiceIndices.push(randomIndex);

  // The first array index is 0, so the "value" of this die
  // is *the index plus one!*
  currentTotal = currentTotal + randomIndex + 1;
}

// If this is our best total, save it!
if (currentTotal > bestTotal) {
  bestTotal = currentTotal;
}

// "Map" the *array* of indices into an *array* of dice symbols
// FYI: The .map() method takes a function as its argument!
rolledDiceSymbols = rolledDiceIndices.map(i => DICE_SYMBOLS[i]);
// Convert our symbol *array* into a *string* with .join()
// FYI: The "\t" in these strings prints a tab/indent character
// FYI: Any string passed to .join() will be interleaved in the output
console.log(`First roll:\t${rolledDiceSymbols.join(' ')}`);


// Now reset our temporary variables, and repeat a second time
currentTotal = 0;
rolledDiceIndices = [];

for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * 6);
  rolledDiceIndices.push(randomIndex);
  currentTotal = currentTotal + randomIndex + 1;
}

if (currentTotal > bestTotal) {
  bestTotal = currentTotal;
}

rolledDiceSymbols = rolledDiceIndices.map(i => DICE_SYMBOLS[i]);
console.log(`Second roll:\t${rolledDiceSymbols.join(' ')}`);


// And a third time!
currentTotal = 0;
rolledDiceIndices = [];

for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * 6);
  rolledDiceIndices.push(randomIndex);
  currentTotal = currentTotal + randomIndex + 1;
}

if (currentTotal > bestTotal) {
  bestTotal = currentTotal;
}

rolledDiceSymbols = rolledDiceIndices.map(i => DICE_SYMBOLS[i]);
console.log(`Third roll:\t${rolledDiceSymbols.join(' ')}`);


// Now we can print the best total!
console.log(`Best total:\t${bestTotal}`);
