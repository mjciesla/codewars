// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
    
  function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
   const res = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor(Math.sqrt(res.map((age) => age * age).reduce((sum, age)=> sum + age))/2)
  }


//   const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

//   const predictAge = (...args) =>
//   Math.hypot(...args) >> 1;