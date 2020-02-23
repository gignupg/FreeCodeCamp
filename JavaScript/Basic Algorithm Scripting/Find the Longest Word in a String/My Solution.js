function findLongestWordLength(str) {
    str = str.split(" ")
    let biggest = 0;
    for (let i in str){
      if (str[i].length > biggest){
        biggest = str[i].length
      }
    }
    return biggest
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog")