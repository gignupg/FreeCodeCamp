let truthCheck = (collection, pre) => collection.every(prop => !!prop[pre])
  
truthCheck([{"single": ""}, {"single": "double"}], "single")
  