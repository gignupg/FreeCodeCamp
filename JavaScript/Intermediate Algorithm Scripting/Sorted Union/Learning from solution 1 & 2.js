// Solution 1:
function uniteUnique(arr1, arr2, arr3) {
    let newArr = [], result = [], args = Array.from(arguments)
    
    args.forEach(x => x.forEach(elem => {
        if (result.indexOf(elem) === -1) result.push(elem)
    }))

    return result;
  }

  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// Solution 2:
// let args = [...arguments]


