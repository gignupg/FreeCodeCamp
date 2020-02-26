function mutation(str) {
    let word = str[0].toLowerCase()
    for (let i = 0; i < str[1].length; i++){
        let letter = str[1][i].toLowerCase()
        if (word.indexOf(letter) === -1) return false
    }
    return true
  }
  
  console.log(mutation(["Tiger", "Zebra"]))

// Using indexOf