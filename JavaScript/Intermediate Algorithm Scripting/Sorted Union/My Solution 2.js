function uniteUnique(...restArr) {
    let arr = [].concat(...restArr), res = []

    for (let i = 0; i < arr.length; i++){
        if (!res.includes(arr[i])) res.push(arr[i])
    }

    return res
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) )
