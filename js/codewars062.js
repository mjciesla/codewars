// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let reverseWords = str.split('').reverse().join('').split(' ').reverse().join(' ')
    return reverseWords
  }



//   function reverseWords(str) {
//     return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
//   }