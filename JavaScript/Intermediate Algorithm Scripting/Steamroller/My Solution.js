function steamrollArray(arr) {
    return arr.flat(10)
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]))