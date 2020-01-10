function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++){
        const char = str.charCodeAt(0)

        if (str.charCodeAt(i) !== char + i) return String.fromCharCode (char + i)
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
