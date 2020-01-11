function fearNotLetter(str) {

    let completeArr = "", realArr = new RegExp("[^" + str + "]")

    for (let i = 0; i < str.length; i++) completeArr += String.fromCharCode(str.charCodeAt(0) + i)
    
    return completeArr.match(realArr) ? completeArr.match(realArr).join() : undefined

}
  
fearNotLetter("bcef")
