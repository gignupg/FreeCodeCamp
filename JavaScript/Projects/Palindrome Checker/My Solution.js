function palindrome(str) {
    let strClean = str.replace(/\W+|_/g, "").toLowerCase()
    let reverseClean = []
    let reverser = strClean.split("").forEach(a => {
        reverseClean.unshift(a)
    })
    return strClean === reverseClean.join("")
  }

console.log(palindrome("My age is 0, 0 si ega ym."))