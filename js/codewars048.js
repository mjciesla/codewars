// Your task is to remove all duplicate words from a string, 
//leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    // your perfect code...
   const duplicate = new Set(s.split(' '))
   return[...duplicate].join(' ')
 }

 //const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')