function getIndexToIns(arr, num) {
    let pos = arr.sort((a,b) => a-b).findIndex(elem => elem >= num)
    if (arr === []) return 0
    else if (pos === -1) return arr.length
    else return pos 
  }
  
  console.log(getIndexToIns([2, 5, 10], 15))
  