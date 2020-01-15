function sumPrimes(num) {

    let arr = []

    for(let i = 2; i <= num; i++){
        arr.push(i)
    }

    let newArr = arr.filter(value => {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return value > 1;
    })

    return newArr.reduce((acc, val) => acc + val)

  }
  
  console.log(sumPrimes(977))
