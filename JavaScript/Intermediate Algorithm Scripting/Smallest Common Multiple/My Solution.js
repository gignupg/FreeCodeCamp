function smallestCommons(arr) {

    arr.sort((a,b) => a-b)

    let i = arr[0]
    let myArr = []

    for (i;i<=arr[1];i++){
        myArr.push(i)
    }

    let k = arr[1] * 2

    for (;; k += arr[1]){
        let sum = 0
        for (let j = 0; j < myArr.length - 1; j++){
            sum += k % myArr[j]
        }
        if (sum === 0) return k
    }
}

console.log(smallestCommons([5,1]))