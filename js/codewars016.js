//return a string in which each character (case-sensitive) is repeated once


function doubleChar(str) {
   return Array.from(str, s => s.repeat(2)).join('')
  }

// others solutions
//   const doubleChar = (str) => str.split("").map(c => c + c).join("");

// function doubleChar(str) {
//     var word = '';
//     for (var i = 0; i < str.length; i++){
//       word = word + str[i] + str[i];
//     };
//     return word;
//   };

// function doubleChar(str) {
//     return str.replace(/(.)/g, "$1$1")
//   }