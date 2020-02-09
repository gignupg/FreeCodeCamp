function orbitalPeriod(arr) {
    let GM = 398600.4418
    let earthRadius = 6367.4447
    let twoPi = 2 * Math.PI

    function periodFinder(obj){
        let newArr = []
        let a = Math.pow(earthRadius + obj.avgAlt, 3)
        obj.orbitalPeriod = Math.round(twoPi * Math.sqrt(a/GM))
        delete obj.avgAlt
    }

    for (let a in arr){
        periodFinder(arr[a])
    }

    return arr
    
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))