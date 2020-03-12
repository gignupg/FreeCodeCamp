function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    function calc(altitude){
        return Math.round((Math.PI * 2) * Math.sqrt(Math.pow((earthRadius + altitude), 3)/GM))
    }

    return arr.map(obj => ({name: obj.name, orbitalPeriod: calc(obj.avgAlt)}))
  }
  
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])