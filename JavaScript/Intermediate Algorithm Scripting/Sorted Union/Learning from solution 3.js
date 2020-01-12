function uniteUnique() {

    let args = [...arguments]

    return args.reduce((acc, item) => { 
        item.forEach(elem => {
            if (acc.indexOf(elem) === -1) acc.push(elem)        
        })
            
        return acc
    }, [])
}
  
uniteUnique([1, 3, 2, 1], [5, 2, 1, 4], [2, 1])

//Utilizing reduce()
