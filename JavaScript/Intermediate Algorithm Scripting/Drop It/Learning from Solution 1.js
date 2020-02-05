function dropElements(arr, func) {
    const ROUNDS = arr.length
    for (let i = 0; i < ROUNDS; i++){
        if (func(arr[0])) break
        else arr.shift()
    }
    return arr;
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})
  

  
// Using shift and break