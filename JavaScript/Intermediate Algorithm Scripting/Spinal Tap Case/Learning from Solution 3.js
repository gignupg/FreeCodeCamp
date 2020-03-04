function spinalCase(str) {
    return str
    .split(/\s+|_+|(?=[A-Z])/g)
    .join("-")
    .toLowerCase()
}
  
console.log(spinalCase('This Is Spinal Tap'))