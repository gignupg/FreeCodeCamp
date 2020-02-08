function addTogether() {
    let a = arguments[0]
    let b = arguments[1]

    if (typeof a !== "number"){
        return undefined
    }

    if (b !== undefined){
        if (typeof b !== "number"){
            return undefined
        }
        return a + b  
    }
    
    return function(c){
        if (typeof c !== "number"){
            return undefined
        }
        return a + c
    }
}
  
console.log(addTogether(2)([3]))