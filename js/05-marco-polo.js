for (i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i}  Marco Polo`)
    document.write(`${i}  Marco Polo <br>`)
  } else if (i % 3 == 0 && i % 5 != 0) {
    console.log(`${i}  Marco`)
    document.write(`${i}  Marco <br>`)
  } else if (i % 3 != 0 && i % 5 == 0) {
    console.log(`${i} Polo`)
    document.write(`${i} Polo <br>`)
  } else {
    console.log(`${i}`)
    document.write(`${i} <br>`)
  }
}
