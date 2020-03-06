function myReplace(str, before, after) {

    let cap = /[A-Z]/.test(before[0])

    if (cap === true){
        let letter = after.split("").shift().toUpperCase()
        after = after.replace(/^\w/i, letter)
    }

    return str.replace(before,after)
  }
  
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))