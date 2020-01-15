function sumFibs(num) {

    let fibArr = [1], fib = 1, fibOld = 1

    while (fib <= num){
        fibArr.push(fib)
        fib = fib + fibOld
        fibOld = fib - fibOld
    }

    return fibArr.filter(x => x % 2).reduce((acc, val) => acc + val)
  }
  
  console.log(sumFibs(75025))

// Using filter and reduce
