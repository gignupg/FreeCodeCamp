function uniteUnique() {

    let args = [].slice.call(arguments)

    return args.reduce((acc, item) => { 
        item.forEach(elem => {
            if (acc.indexOf(elem) === -1) acc.push(elem)        
        })
            
        return acc
    }, [])
}
  
uniteUnique([1, 3, 2, 1], [5, 2, 1, 4], [2, 1])

// Solution 3:
// let args = Array.prototype.slice.call(arguments) or let args = [].slice.call(arguments)
// Another way to transform something into an array. Kind of long winded but good to know, in case I see it somewhere.
