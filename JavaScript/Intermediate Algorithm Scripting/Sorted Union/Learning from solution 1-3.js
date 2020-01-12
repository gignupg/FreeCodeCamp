// Solution 1:
function uniteUnique(arr1, arr2, arr3) {
    let newArr = [], result = [], args = Array.from(arguments)
    
    args.forEach(x => newArr.concat(x).forEach(item => newArr.concat(item).forEach((elem) => {
        if (result.indexOf(elem) === -1) result.push(elem)
    })))

    return result;
  }

// Solution 2:
// let args = args = [...arguments]
// That's a really nice way too, especially because there are no arguments required. If I wanted I could delete arr1 arr2 and arr3.

// Solution 3:
// let args = Array.prototype.slice.call(arguments) or let args = [].slice.call(arguments)
// Another way to transform something into an array. Kind of long winded but good to know, in case I see it somewhere. 
// 
// 
