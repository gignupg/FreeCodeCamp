function addTogether(arg0,arg1) {
    if (typeof arg0 === "number"){
        
        if (arg1){
            if (typeof arg1 === "number"){
                return arg0 + arg1
            }
            return undefined
        }

        return (argu) => {
            if (typeof argu === "number"){
                return arg0 + argu
            }
        }
    } 
}
  
console.log(addTogether("http://bit.ly/IqT6zt"))