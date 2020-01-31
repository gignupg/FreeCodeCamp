function sumPrimes(num) {
  let primes = []
  let composites = []

  for (let i = 2; i <= num; i++) {
    if (!composites[i]) {
      primes.push(i)
      for (let k = i*2; k < num; k += i) {
        composites[k] = true
      }
    }
  }
  return primes.reduce((a, b) => a+b)

}

console.log(sumPrimes(977))

// The two main ideas:
// -Bitwise operators (I could replace i*2 with i<<1 as in the solution)
// -Making a composite array.