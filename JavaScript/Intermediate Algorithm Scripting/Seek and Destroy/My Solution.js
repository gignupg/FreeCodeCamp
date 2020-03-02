function destroyer(...arr) {
    let newArr = arr[0].filter(elem => { 
        for (let i = 1; i < arr.length; i++){
           if (elem === arr[i]){
               return false
           }  
        }
        return true     
    })
    return newArr
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
  