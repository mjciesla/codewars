// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"


function solution(pairs){
    let res = ''
    for (const key in pairs){
        res += `${key} = ${pairs[key]},`
    }return res.slice(0,-1)
}


// function solution(pairs, str=[]){
//     for (let i in pairs){
//       str.push(`${i} = ${pairs[i]}`)
//     }
//     return str.join(',')
//   }

// function solution(pairs){
//     return Object.keys(pairs).map(e=> `${e} = ${pairs[e]}`).join(',');
//   }