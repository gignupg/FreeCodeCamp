function dropElements(arr, func) {

    let newArr = []
    let adder = false
  
    for (let i = 0; i < arr.length; i++){
      if (func(arr[i]) || adder) {
        newArr.push(arr[i])
        adder = true
      }
    }
  
    return newArr
  }
  
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})