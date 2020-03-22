function convertToRoman(num) {

    let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let decimalArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let temp

    if (num !== 0){
        let numeral = decimalArr.find((elem, i) => { 
        temp = romanArr[i]
        return elem <= num
        })
        
        num -= numeral
    }

    else return ""

    return temp + convertToRoman(num)
   }
   
console.log(convertToRoman(36))