let coinFlip,
  heads = 0,
  tails = 0

do {
  coinFlip = Math.round(Math.random())
  // console.log(coinFlip)
  if (coinFlip == 0) {
    heads++
    console.log('HEADS\n')
    document.write(`HEADS <br>`)
  } else {
    tails++
    console.log('TAILS\n')
    document.write(`TAILS <br>`)
  }
} while (!tails)
