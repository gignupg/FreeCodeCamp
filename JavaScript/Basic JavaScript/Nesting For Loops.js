function multiplyAll(arr) {
    var product = 1;

    return arr.flat().reduce((acc, elem) => acc * elem, product)
  }
  
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])