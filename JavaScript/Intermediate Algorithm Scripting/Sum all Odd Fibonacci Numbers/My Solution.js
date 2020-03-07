function sumFibs(num) {
    let arr = [1,1]
    let i = 1
    
    while (arr[i] + arr[i-1] <= num){
        arr.push(arr[i] + arr[i-1])
        i++
    }
    return arr.filter(a => a % 2).reduce((acc,val) => acc + val)
}
  
console.log(sumFibs(10))