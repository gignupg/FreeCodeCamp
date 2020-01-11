function fearNotLetter(str) {
    let missing = "";
    let finder = str.split("").some((elem, i) => {
        if (elem.charCodeAt(0) > str.charCodeAt(0) + i){
            missing = String.fromCharCode(str.charCodeAt(0) + i)
            return true
        }
    })

    if (!finder) return

    return missing

  }

console.log(fearNotLetter("abc"))
