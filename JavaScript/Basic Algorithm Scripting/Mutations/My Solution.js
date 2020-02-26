function mutation(str) {
    for (let i = 0; i < str[1].length; i++){
        let reg = new RegExp (str[1][i], "i")
        if (!reg.test(str[0])) return false
    }
    return true
  }
  
  console.log(mutation(["Noel", "Ole"]))