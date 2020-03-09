function steamrollArray(arr) {

    let newArr = []

    let flatten = function(arg){

        if (!Array.isArray(arg)){
            newArr.push(arg)
        } else {
            for (let i in arg){
                flatten(arg[i])
            }
        }
    }

    arr.forEach(flatten);

    return newArr
  }
  
console.log(steamrollArray([1, [2], [3, [[4]]]]))

// Passing in a function in forEach()
// Recursion