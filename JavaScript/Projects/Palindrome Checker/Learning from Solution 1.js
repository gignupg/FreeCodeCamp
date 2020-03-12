function palindrome(str) {
    let cleaned = str.replace(/[\W_]/g, "").toLowerCase()
    let reversed = cleaned.split("").reverse().join("")
    return cleaned === reversed
}

console.log(palindrome("My age is 0, 0 si ega ym."))

// Using reverse() and making the regex more concise 