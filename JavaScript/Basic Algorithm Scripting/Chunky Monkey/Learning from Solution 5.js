function chunkArrayInGroups(arr, size) {
    let longitude = arr.length
    let splicer = arr.splice(0, size)
    
    if (longitude <= size) return [splicer]

    return [splicer, ...chunkArrayInGroups(arr, size)]
}
  
console.log(chunkArrayInGroups([0, 1, 2, 3], 2))

//Using recursion