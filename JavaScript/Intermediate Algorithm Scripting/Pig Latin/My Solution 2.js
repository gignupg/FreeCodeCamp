function translatePigLatin(str) {
    let vow = new RegExp(/[aeiou]+/)
    let cons = new RegExp(/^[^aeiou]+/)
    
    if (!vow.test(str)){
        return str += "ay"
    } 
    else if (cons.test(str)){
        let matched = str.match(cons)
        return str.replace(/^[^aeiou]+/, "") + matched + "ay" 
    }
    else {
        return str + "way"
    }
    
  }
  
console.log(translatePigLatin("schwartz"))