function uniteUnique(...arr) {

    let newArr = []

    for (let i = 0; arr[i]; i++){
        newArr = newArr.concat(arr[i])
    }

    let mySet = new Set(newArr)

    return [...mySet]
  }
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// Solution 4:
// Loops with a truthy/falsy condition instead of i < myArr.length:
// console.log(!!myArr[2])
// console.log(Boolean(myArr[2]))

// Solution 5:
// Sets & creative new way of using the spread operator
