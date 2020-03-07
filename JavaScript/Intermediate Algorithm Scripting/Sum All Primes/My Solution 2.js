function sumPrimes(num) {
    let primes = []
    let gateKeeper = "composite"

    for (let i = 2; i <= num; i++){
        for (let k = 2; k <= Math.sqrt(num); k++){
            if (i % k === 0 && i !== k){           //if i is not prime
                gateKeeper = "composite"        
                break
            } else {
                gateKeeper = "prime"
            }
        }
        if (gateKeeper === "prime") primes.push(i)
    }
    return primes.reduce((acc, val) => acc + val)
  }
  
console.log(sumPrimes(10))