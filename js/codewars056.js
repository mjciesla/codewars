// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    let x = 1
    for (let i=1; i <= n/2; i++){
       n % i === 0 ? x++ : null
    } return x
   }  
   
   //others 
//    function getDivisorsCnt(n) {
//     for (var d = 0, i = n; i > 0; i--) {
//       if (n % i == 0) d++;
//     }
    
//     return d;
//   }

// function getDivisorsCnt(n){
//     var count = 0, i = 0;
    
//     while( i++ <= n ) {
//       (n % i !== 0 ) || count++; 
//     }
    
//     return count;
//   }