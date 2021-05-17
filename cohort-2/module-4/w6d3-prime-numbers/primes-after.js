// Don't worry about how this works!
// It's a bunch of super clever math and JavaScript!
function sieve(maximum) {
  const primeFlags = new Array(maximum + 1).fill(true);
  primeFlags[0] = false;
  primeFlags[1] = false;
  for (let i = 2; Math.pow(i, 2) <= maximum; i += 1) {
    if (!primeFlags[i]) {
      continue;
    }
    for (let j = 2; j * i <= maximum; j += 1) {
      primeFlags[j * i] = false;
    }
  }
  return primeFlags.map((p, n) => p && n).filter(n => n);
}

// Here is where we defined our own function
// This will check if a given number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const primes = sieve(100);
console.log(isPrime(100));
console.log(primes.map(n => isPrime(n)));
console.log(primes);
