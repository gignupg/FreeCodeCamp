function pairElement(str) {
    str = str.split("")
    let newArr = []

    for (let i in str){
        newArr.push([str[i]])
        switch(str[i]){
            case "T":
                newArr[i].push("A")
                break
            case "A":
                newArr[i].push("T")
                break
            case "G":
                newArr[i].push("C")
                break
            case "C":
                newArr[i].push("G")
                break    
        }
        
    }
    return newArr
  }
  
  pairElement("GCG")

//   just a comment
