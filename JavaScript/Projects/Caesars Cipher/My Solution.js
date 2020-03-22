function rot13(str) {

    let origArr = str.split(" ")

    String.prototype.toRot = function(){
        let num = this.charCodeAt(0)
        if (num < 65 || num > 90){
            return String.fromCharCode(num)
        } else {
            num += 13
            if (num > 90){
            return String.fromCharCode(num - 90 + 64)
            }
            else return String.fromCharCode(num)
        }
    }

    let newArr = origArr.map(elem => elem.split("").map(item => item.toRot()))

    return newArr.map(elem => elem.join("")).join(" ")
}

console.log(rot13("SERR PBQR PNZC"))