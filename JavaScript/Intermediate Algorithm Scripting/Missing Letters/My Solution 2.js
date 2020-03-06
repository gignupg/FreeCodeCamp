function fearNotLetter(str) {
    let arr = str.split("").map((a,i) => str.charCodeAt(i))

    let compareArr = () => {
        let first = str.charCodeAt()
        let last = str.charCodeAt(str.length-1)
        let comarr = []

        for (let i = first; i < first + arr.length; i++){
            comarr.push(i)
        }
        return comarr
    }

    if (compareArr()[compareArr().length-1] === arr[arr.length-1]) return undefined

    return String.fromCharCode(compareArr().find(elem => !arr.includes(elem)))
  }
  
fearNotLetter("abc")