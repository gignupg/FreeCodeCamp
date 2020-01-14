function myReplace(str, before, after) {
    str = str.split(" ")
  
    let cap = /^[A-Z]/.test(before)
  
    if (cap === true){
      let firstLetter = after.match(/^\w/i).toString().toUpperCase()
      after = after.replace(/^\w/i, firstLetter)
    } 
  
    for (let i in str){
      if (before === str[i]){
        return (str.join(" ").replace(str[i], after))
      }
    }
  }
  
  console.log(myReplace("His name is Tom", "Tom", "john"));
