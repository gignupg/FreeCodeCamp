function sumFibs(num) {

    let fibOld = 1
    let fib = 1
    let sum = 1

    for (;fib <= num;){
   
        if (fib % 2) {
        sum += fib
        }

        fib += fibOld
        fibOld = fib - fibOld

    }
    return sum
  }
  
  console.log(sumFibs(75025))

// Getting rid of the array which was totally redundant
