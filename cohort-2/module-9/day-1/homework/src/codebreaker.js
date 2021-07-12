export const checkGuess = (guess, secretCode) => {
    if (guess > secretCode) {
        return "too high!"
    }
    if (guess < secretCode) {
        return "too low!"
    }
    return "you cracked the code!"
}


// Part 1 (tests-later-development)
//
// Write test cases that cover all the behavior of the checkGuess function
console.log(checkGuess(100, 100) === 'you cracked the code!');
//
// write console.asserts here!
//


// Part 2
//
// Uncomment the following assertions, but don't change them!
// Change checkGuess to make this assertion pass
//
// console.assert(checkGuess("secretCode", Math.random()) === true);


// Part 3 (bonus)
//
// Uncomment this assertion, but dont change it.
// Can you figure out why checkGuess passes?
// Can you change checkGuess to return false?
//
// console.assert(checkGuess(checkGuess, 1000) === false);
