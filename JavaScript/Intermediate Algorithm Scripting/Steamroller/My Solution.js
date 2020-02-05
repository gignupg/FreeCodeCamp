function steamrollArray(arr) {
    return arr.flat().flat().flat().flat().flat().flat()
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]))