function myReplace(str, before, after) {

  let cap = /^[A-Z]/.test(before)

  if(cap) after = after.charAt(0).toUpperCase() + after.slice(1)

  return (str.replace(before, after))

}

console.log(myReplace("His name is Tom", "Tom", "john"));
