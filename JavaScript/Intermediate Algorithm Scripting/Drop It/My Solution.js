function dropElements(arr, func) {
    // Drop them elements.
    return func([...arr]);
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  