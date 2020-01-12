function uniteUnique(arr1, arr2, arr3) {
    let newArr = [], result = [], args = Array.from(arguments)
    
    args.forEach(x => newArr.concat(x).forEach(item => newArr.concat(item).forEach((elem) => {
        if (result.indexOf(elem) === -1) result.push(elem)
    })))

    return result;
  }
