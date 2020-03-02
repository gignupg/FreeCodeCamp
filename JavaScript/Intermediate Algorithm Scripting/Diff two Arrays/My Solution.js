function diffArray(arr1, arr2) {
    var newArr = [];

    let newArr1 = arr1.filter(elem => {
        if (!arr2.includes(elem)) return true
    })

    let newArr2 = arr2.filter(elem => {
        if (!arr1.includes(elem)) return true
    })

    newArr = newArr1.concat(newArr2)
    return newArr;
  }