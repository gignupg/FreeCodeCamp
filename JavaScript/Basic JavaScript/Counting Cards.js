var count = 0;

function cc(card) {

  if (card >= 2 && card <= 6) count += 1
  if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") count += -1

  return (count <= 0) ? count + " Hold" : count + " Bet"

}

cc(2); cc(3); cc(7); cc('K'); console.log(cc('A'))