function steamrollArray(arr) {
    arr = [].concat(...arr)
    
    return arr.some(elem => Array.isArray(elem)) ? steamrollArray(arr) : arr
}
  
steamrollArray([1, [2], [3, [[4]]]])

// Rebuilding it two weeks after looking at the recursive solution