function spinalCase(str) {
    return str
        .split(/\s+|_/)
        .join("-")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase()
}
  
console.log(spinalCase("The_Andy_Griffith_Show"))