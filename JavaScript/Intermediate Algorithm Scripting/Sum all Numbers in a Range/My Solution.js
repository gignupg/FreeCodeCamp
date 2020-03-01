function sumAll(arr) {
    let sorted = arr.sort((a,b) => a-b)
    let newArr = []
    for (let i = sorted[0]; i <= sorted[1]; i++){
      newArr.push(i)
    } 
    return newArr.reduce((acc,val) => acc + val)
  }
  
  console.log(sumAll([1, 4]))