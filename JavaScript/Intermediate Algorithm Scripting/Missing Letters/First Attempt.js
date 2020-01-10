function fearNotLetter(str) {

    for (let i = 0; i < str.length; i++){
        let char = str.charCodeAt(i)
        let charAfterReal = str.charCodeAt(i + 1)
        let charAfter = char + 1
        
        if (!isNaN(charAfterReal) && charAfterReal !== charAfter){
            return String.fromCharCode(charAfter)
            
        } 
    }
  }
  
  fearNotLetter("abcdefghijklmnoqrstuvwxyz");
