let seconds = parseInt(prompt('Enter number of seconds to count down: '))

let i

for (i = seconds; i > 0; i--) {
  document.write(`${i}...  `)
}
document.write(`Blast Off !`)
