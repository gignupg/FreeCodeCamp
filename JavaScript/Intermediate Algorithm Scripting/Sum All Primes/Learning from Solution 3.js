function sumPrimes(num, val) {
    // function to check if the number presented is prime

    if (num < 2) {
        return 0
    }

    function isPrime(number) {
      for (i = 2; i <= number; i++) {
        if (number % i === 0 && number != i) {
          // return true if it is divisible by any number that is not itself.
          return false
        }
      }
      // if it passes the for loops conditions it is a prime
      return true
    }
    // 1 is not a prime, so return nothing, also stops the recursive calls.
    if (val > num) {
      return 0;
    }

    // Check if your number is not prime
    if (isPrime(val) === false) {
      // for non primes check the next number down from your maximum number, do not add anything to your answer
      return sumPrimes(num, val + 1)
    }

    // Check if your number is prime
    if (isPrime(val) === true) {
      // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
      return val + sumPrimes(num, val + 1)
    }
  }
  // test here
  console.log(sumPrimes(977, 2))



// Learning from the provided solution and transforming it.