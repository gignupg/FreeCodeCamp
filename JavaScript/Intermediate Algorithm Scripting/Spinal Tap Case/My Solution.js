function spinalCase(str) {
    let reg = new RegExp("[a-z]")
    let regCap = new RegExp("[A-Z]")
    let temp = ""
    let arr =  []

    for (let i = 0; i < str.length; i++){
        if (i === str.length - 1){
            temp += str[i]
            arr.push(temp)
        } else if (reg.test(str[i])){
            temp += str[i]
        } else if (regCap.test(str[i])){
            arr.push(temp)
            temp = str[i]
        } else {
            arr.push(temp)
            temp = ""
        }
    }

    return arr.filter(a => /[a-z]/i.test(a)).join("-").toLowerCase()
}

console.log(spinalCase("Teletubbies say Eh-oh"))
  