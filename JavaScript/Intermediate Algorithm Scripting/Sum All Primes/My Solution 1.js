function sumPrimes(num) {

    let arr = []

    for(let i = 2; i <= num; i++){
        arr.push(i)
    }

    let newArr = arr.filter(value => {
        for(let i = 2; i < value; i++) {
            if(value % i === 0) {
                return false
            }
        }
        return true
    })
    return newArr.reduce((acc, val) => acc + val)
  }

  console.log(sumPrimes(977))

// To make the calculation easier for the computer change "value" in the second for loop to "Math.sqrt(value)". Like that i
// will never get bigger than the square root of "value". Here a great/easy explenation:
// https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr
// Another comment