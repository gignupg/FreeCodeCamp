function telephoneCheck(str) { 
    if (/^-/.test(str)) return false

    let newStr = str.replace(/-|\s|\((?=\d{3}\))|(?<=\(\d{3})\)/g, "")
    let val = /\D/.test(newStr)

    if (val) return false

    let len = newStr.split("").length

    if (len === 10) return true
    
    if (len === 11 && /^1/.test(newStr)) return true

    return false
}
  
console.log(telephoneCheck("555-(555)55"))

