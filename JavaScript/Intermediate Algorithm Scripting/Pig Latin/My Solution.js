function translatePigLatin(str) {
    let first = "";
    let fsave = "";
    if (str.match(/^[aeiou]/i) !== null){
        str += "way"
    } else {
        first = str.split("")
        for (let i = 0; i < first.length; i++){
            if (/[aeiou]/.test(str[i])){
                break
            } else {
                fsave += str[i]
            }
        }
        str = str.replace(/^[^aeiou]+/i, "")
        str += fsave + "ay"
    }
    // str = str.replace(/^./)
    console.log(str)
  }

  translatePigLatin("glove");
  translatePigLatin("algorithm");

// Using git for the first time

//This time I'm working on branch actually.