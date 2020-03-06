function pairElement(str) {
    
    return  str.split("").map(a => {
        switch(a){
            case "G":
                return ["G", "C"]
            case "C":
                return ["C", "G"] 
            case "A":
                return ["A", "T"]
            case "T":
                return ["T", "A"]
        }
    })
}
  
console.log(pairElement("GCG"))