// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// with the above data your function gps(s, x)should return 74




const gps = (s, x) => {
    if (x.length <= 1) {
       return 0
     }
     let output = [];
     for (let i = 0; i < x.length-1; i++) { 
       output.push((x [i + 1] -x [i]) * 3600/s)
     }
     return Math.max(...output)
   }

   //const gps = (s, x) => Math.floor(3600 * x.slice(1).reduce((m, d, i) => Math.max(m, d - x[i]), 0) / s);

   