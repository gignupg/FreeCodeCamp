function convertHTML(str) {

    function myReplace(index, newChar){
        return str = str.substring(0, index) + newChar + str.substring(index + 1)
    }

    let i = 0

    while(str[i]){
        switch(str[i]){
            case "&": 
                myReplace(i, "&amp;")
                break
            case '"':
                myReplace(i, "&quot;")
                break
            case "<":
                myReplace(i, "&lt;")
                break
            case ">":
                myReplace(i, "&gt;")
                break
            case "'":
                myReplace(i, "&apos;")
                break
        }

        i++
    }

    return str
  }

convertHTML("Dolce & Gabbana");


// Defining a replace function & practicing the switch statement

// First time using the substring method
