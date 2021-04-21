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

// This is clearly not correct!
// Some numbers are prime!
function isPrime(number) {
  return false;
}

const primes = sieve(100);
console.log(isPrime(100));
console.log(primes.map(n => isPrime(n)));
console.log(primes);
