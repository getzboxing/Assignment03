let coinFlip,
  heads = 0,
  tails = 0

let numFlips = parseInt(prompt('Enter number of coin flips: ') - 1)

for (let i = 0; i <= numFlips; i++) {
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
}
console.log(`result: HEADS has ${heads} flips vs. TAILS which has ${tails}`)
document.writeln(
  `result: HEADS has ${heads} flips vs. TAILS which has ${tails}`
)
