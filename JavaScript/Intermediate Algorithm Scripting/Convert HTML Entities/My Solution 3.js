function convertHTML(str) {

    return str
    .replace(/\&/g, "&amp;")
    .replace(/\'/g, "&apos;")
    .replace(/\"/g, "&quot;")
    .replace(/\>/g, "&gt;")
    .replace(/\</g, "&lt;")
  }
  
console.log(convertHTML("Dolce & Gabbana"))