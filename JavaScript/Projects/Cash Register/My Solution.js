function checkCashRegister(price, cash, cid) {

    let change = cash - price

    let changeArr = []

    let copy = [...cid]

    let currency = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
      ]
      
      for (let i = 8; i >= 0; i--){
        if (currency[i][1] <= change){
           while(copy[i][1] >= currency[i][1] && ((change * 1000) - (currency[i][1]) * 1000) / 1000 >= 0){
            copy[i] = [cid[i][0], ((copy[i][1] * 1000) - (currency[i][1] * 1000)) / 1000]
            change = ((change * 1000) - (currency[i][1]) * 1000) / 1000
           }
           changeArr.push([cid[i][0], ((cid[i][1] * 1000) - (copy[i][1] * 1000)) / 1000])
        }
    }

    if (change == 0){
        if (copy.every(a => a[1] == 0)) {
            return {status: "CLOSED", change: cid}
        }
        return {status: "OPEN", change: changeArr}
    }

    if (change != 0){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
}
  
console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))