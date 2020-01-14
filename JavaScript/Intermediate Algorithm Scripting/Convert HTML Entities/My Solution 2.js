function convertHTML(str) {

    if (/&/.test(str)){
        str = str.replace(/&/g, "&amp;")
    }
    if (/"/.test(str)){
        str = str.replace(/"/g, "&quot;")
    }
    if (/'/.test(str)){
        str = str.replace(/'/g, "&apos;")
    }
    if (/</.test(str)){
        str = str.replace(/</g, "&lt;")
    }
    if (/>/.test(str)){
        str = str.replace(/>/g, "&gt;")
    }

    return str
  }

console.log(convertHTML("Dolce & Gabbana"))


// Using regular expressions
