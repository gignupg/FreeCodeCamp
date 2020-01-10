function pairElement(str) {
    let myArr = str.split("")

    const obj = {
        A: "T",
        T: "A",
        G: "C",
        C: "G"
    }

    return myArr.map(item => [item, obj[item]])

  }
  
  pairElement("GCG")
