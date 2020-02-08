function addTogether() {
    let a = arguments[0]
    let b = arguments[1]

    function myFunc(){
        console.log(arguments[0])
    }

    console.log(myFunc())

    return function(c){
        if (typeof c !== "number"){
            return undefined
        }
        return a + c
    }
    

    if (typeof a !== "number" || typeof b !== "number"){
        return undefined
    }
    
    return a + b
  }
  
  console.log(addTogether(2)(3))