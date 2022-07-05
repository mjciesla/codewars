// You are given a function that is impure, and your job is to purify it. This function must return 
//a new array where each value is itself plus 2 times the "modifier", which is provided as a property of the options object.

// Example:

// Array = 1, 2, 3
// Modifier = 5

// Should return = 11, 12, 13

function solution(arr, options){
    return arr.map(n => n + 2 * options.modifier)
}


function solution2(ar, opt){
    let result = []
    for(let i = 0; i < arr.length; ++i){
        result[i] = arr[i] + 2 * options.modifier
    }
    return result
}

const solution3 = (arr,opt) => arr.map(n => n + 2 * opt.modifier)