function addTogether() {

    if ([...arguments].some(n => typeof n !== "number")) {
        return undefined
    } else if ([...arguments].length > 1){
        return [...arguments].reduce((acc, n) => (acc += n), 0)
    } else {
        return n => (typeof n === "number" ? n + arguments[0] : undefined)
    }
} 
  
console.log(addTogether(2, 3))