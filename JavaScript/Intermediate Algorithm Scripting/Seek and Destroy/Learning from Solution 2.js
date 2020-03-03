function destroyer(arr, ...restArr) {
    return arr.filter(item => !restArr.includes(item));
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

// Doing it a day later using include of which I hadn't thought the first time around