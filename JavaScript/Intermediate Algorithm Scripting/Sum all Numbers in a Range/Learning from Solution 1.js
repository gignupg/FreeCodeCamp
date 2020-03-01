function sumAll(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let res = 0
    for (let i = min; i <= max; i++){
      res += i
    } 
    return res
  }
  
  console.log(sumAll([1, 4]))