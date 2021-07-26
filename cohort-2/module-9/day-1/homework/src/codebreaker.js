// if the guess is higher than the secret code, return "too high!"
// if the guess is lower than the secret code, return "too low!"
// if the guess is equal to the secret code, return "you cracked the code!"
export const checkGuess = (guess, secretCode) => {
    return "you cracked the code!";
}


// Part 1
//
// Write test cases that cover all the behavior of the checkGuess function
console.assert(checkGuess(100, 100) === "you cracked the code!");


// Part 2
//
// Uncomment the following assertion, but don't change them!
// Change the checkGuess function to make this assertion pass
//
// console.assert(checkGuess("secretCode", Math.random()) === "you cracked the code!");


// Part 3 (bonus)
//
// Uncomment this assertion, but dont change it.
// Can you figure out why checkGuess passes?
// Can you change checkGuess to return "too low!" ?
//
// Are there other edge cases where checkGuess will return "you cracked the code!" ?
//
// console.assert(checkGuess(checkGuess, 1000) === "you cracked the code!");
