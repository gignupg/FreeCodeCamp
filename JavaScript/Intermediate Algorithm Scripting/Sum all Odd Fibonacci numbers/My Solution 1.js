function sumFibs(num) {

    let fibOld = 1

    let fib = 2

    let fibArr = [1, 1]

    let sum = 0

    for (;fib <= num;){
   
        if (fib % 2) {
        fibArr.push(fib)
        }

        fib += fibOld
        fibOld = fib - fibOld
        sum = fibArr.reduce((acc, val) => acc + val)

    }
    return sum
  }
  
  console.log(sumFibs(4000000))
