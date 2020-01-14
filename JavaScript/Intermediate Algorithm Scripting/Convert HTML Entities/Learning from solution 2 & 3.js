function convertHTML(str) {

    const converter = {
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
        "<": "&lt;",
        ">": "&gt;"
    }

return str.replace(/[&'"<>]/g, x => converter[x])
}
  
console.log(convertHTML("Hamburgers < Pizza < Tacos"))

// Solution 2
// Using replace() with a replacement function in combination with an object

// Solution 3
// return str.split("").map(x => converter[x] || x).join("")
// Apparently when map tries to use converter[x] and gets undefined, it looks if it can get a value from the other return statement after the "or"
