function bouncer(arr) {
    return arr.filter(a => !!a);
  }
  
console.log(bouncer([undefined, "ate", "", false, 9]))
  