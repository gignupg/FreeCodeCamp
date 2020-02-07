function truthCheck(collection, pre) {
    let myArr = Array.from(collection)
    let newArr = []

    for (let a in myArr){
        if(!collection[a][pre]){
            return false
        }
    }

    return true;
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))