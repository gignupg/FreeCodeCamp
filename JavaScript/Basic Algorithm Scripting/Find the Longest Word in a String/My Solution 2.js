function findLongestWordLength(str) {
    let arr = str.split(" ")
    let shifted = arr.shift()
    let size = shifted.length
    str = arr.join(" ")
  
    if (!str) return size
  
    return Math.max(size, findLongestWordLength(str))
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

  
// A week or so later trying myself on a recursive solution