function convertHTML(str) {

    const converter = {
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
        "<": "&lt;",
        ">": "&gt;"
    }

    str = str.replace(/[&'"<>]/g, x => converter[x])

    return str
}
  
console.log(convertHTML("Hamburgers < Pizza < Tacos"))

// Using replace with a replacement function in combination with an object
