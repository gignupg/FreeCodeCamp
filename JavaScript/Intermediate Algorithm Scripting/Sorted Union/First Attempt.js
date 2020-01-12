function uniteUnique(...arr) {
    let newArr = [], result = []

    arr.forEach(item => newArr.concat(item).forEach((elem) => {
        if (result.indexOf(elem) === -1) result.push(elem)
    }))

    return result;
  }
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
