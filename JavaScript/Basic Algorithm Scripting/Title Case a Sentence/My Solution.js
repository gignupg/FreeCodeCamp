function titleCase(str) {
  let newStr = str.toLowerCase().split(" ").map(a => a.split(""))

  let result = ""

   for (let i in newStr){
     newStr[i][0] = newStr[i][0].toUpperCase()
     result += newStr[i].join("") + " "
   }

   return result
}

console.log(titleCase("sHoRt AnD sToUt"))