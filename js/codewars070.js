// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

function closestMultiple10(num) {
 
    return Math.round(num * .1) * 10
  }