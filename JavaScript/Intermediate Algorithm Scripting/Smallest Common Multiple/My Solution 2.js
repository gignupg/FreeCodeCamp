function smallestCommons(arr) {

    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let newArr = []
    
    for (let i = min; i <= max; i++){
        newArr.push(i)
    }

    let found = false
    let k = (max - 1) * max
    let i = 1
    let num = k

    for (; ; i++, num = k * i){    
        found = newArr.every(a => {
            return num % a === 0
        })
        if (found === true) return num    
    } 
}
  
  
console.log(smallestCommons([1,5]))
