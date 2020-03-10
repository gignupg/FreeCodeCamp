function addTogether(first, arg2) {
    if (typeof first !== "number") {
      return undefined;
    }
    const sum = second => typeof second === "number" ? first + second : undefined;

    return typeof arg2 === "undefined" ? bla => sum(bla) : sum(arg2);
}

console.log(addTogether(2)(3))

// Rearanging the variables to make it more readable. 
// I added arg2 which before was second, which is confusing and bla which was second too. 