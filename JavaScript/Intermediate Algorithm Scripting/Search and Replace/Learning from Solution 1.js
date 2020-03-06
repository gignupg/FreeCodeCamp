function myReplace(str, before, after) {

    let cap = /[A-Z]/.test(before[0])

    if (cap === true){
        let letter = after.charAt(0).toUpperCase()          // That's what I was looking for! I totally forgot about
        after = after.replace(/^\w/i, letter)               // charAt(). I used split().shift() in my previous solution
    }

    return str.replace(before,after)
  }
  
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))