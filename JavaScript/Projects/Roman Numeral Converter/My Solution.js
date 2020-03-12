function convertToRoman(num) {
    let arr = num.toString().split("")
    let col1 = arr[arr.length - 1]
    let col2 = arr[arr.length - 2]
    let col3 = arr[arr.length - 3]
    let col4 = arr[arr.length - 4]
    let res = []

    if (col1){
        switch(col1){
            case "1":
                res.unshift("I") 
                break
            case "2":
                res.unshift("II") 
                break
            case "3":
                res.unshift("III")
                break
            case "4":
                res.unshift("IV")
                break
            case "5":
                res.unshift("V")
                break
            case "6":
                res.unshift("VI")
                break
            case "7":
                res.unshift("VII")
                break
            case "8":
                res.unshift("VIII")
                break
            case "9":
                res.unshift("IX")
                break
        }
    }

    if (col2){
        switch(col2){
            case "1":
                res.unshift("X") 
                break
            case "2":
                res.unshift("XX") 
                break
            case "3":
                res.unshift("XXX")
                break
            case "4":
                res.unshift("XL")
                break
            case "5":
                res.unshift("L")
                break
            case "6":
                res.unshift("LX")
                break
            case "7":
                res.unshift("LXX")
                break
            case "8":
                res.unshift("LXXX")
                break
            case "9":
                res.unshift("XC")
                break
        }
    }

    if (col3){
        switch(col3){
            case "1":
                res.unshift("C") 
                break
            case "2":
                res.unshift("CC") 
                break
            case "3":
                res.unshift("CCC")
                break
            case "4":
                res.unshift("CD")
                break
            case "5":
                res.unshift("D")
                break
            case "6":
                res.unshift("DC")
                break
            case "7":
                res.unshift("DCC")
                break
            case "8":
                res.unshift("DCCC")
                break
            case "9":
                res.unshift("CM")
                break
        }
    }

    if (col4){
        switch(col4){
            case "1":
                res.unshift("M") 
                break
            case "2":
                res.unshift("MM") 
                break
            case "3":
                res.unshift("MMM")
                break
        }
    }

    return res.join("")
}
   
console.log(convertToRoman(3622))