let columns = 6
let rows = 6

for (let i = 0; i <= rows; i++) {
  let leaf = '#'
  for (let j = 1; j <= i; j++) {
    leaf = leaf + '#'
  }
  document.write(`${leaf} <br>`)
  console.log(leaf)
}
