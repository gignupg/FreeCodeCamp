function whatIsInAName(collection, source) {
    var arr = [];
    let sourceKeys = Object.keys(source)
  
    arr = collection.filter(elem => {
        return sourceKeys.every(item => elem[item] === source[item])
    })

    return arr;
  }
  
console.log(whatIsInAName([
    {"a": 1, "b": 2, "c": 3}], 
    {"a": 1, "b": 9999, "c": 3}))
  