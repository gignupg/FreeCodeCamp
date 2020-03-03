function whatIsInAName(collection, source) {
    var arr = [];
    let sourceKeys = []

    for (let key in source){
        sourceKeys.push(key)
    }
  
    arr = collection.filter(elem => {
        for (let sourceIdx in sourceKeys){
            if (elem[sourceKeys[sourceIdx]] !== source[sourceKeys[sourceIdx]]){
                return false
            }
        }
        return true
    })
    
    return arr;
  }
  
console.log(whatIsInAName([
    {"a": 1, "b": 2, "c": 3}], 
    {"a": 1, "b": 9999, "c": 3}))
  