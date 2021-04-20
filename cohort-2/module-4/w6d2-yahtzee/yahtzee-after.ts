const promptSync = require('prompt-sync')({ sigint: true });

const DICE_SYMBOLS = [
  '\u2680', // ⚀
  '\u2681',
  '\u2682',
  '\u2683',
  '\u2684',
  '\u2685',
];

function rollDice(numberOfDice) {
  const rolledDice = [];
  for (let i = 0; i < numberOfDice; i++) {
    const dieSymbolIndex = Math.floor(Math.random() * 6);
    rolledDice.push(dieSymbolIndex);
  }
  return rolledDice;
}

while(true) {
  const userInput = promptSync('How many dice would you like to roll? ');
  const numberOfDice = parseInt(userInput);
  if (numberOfDice > 0) {
    const diceIndices = rollDice(numberOfDice);
    const diceSymbols = diceIndices.map(index => DICE_SYMBOLS[index]);
    console.log(diceSymbols.join(' '));
  }
}
