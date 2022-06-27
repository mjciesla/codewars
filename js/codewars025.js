// return min and max value from an array

function minMax(arr){
    return [Math.min(...arr) , Math.max(...arr)]
}


//other


// function minMax(arr){
//     var min = Math.min.apply(null, arr),
//         max = Math.max.apply(null, arr);
//     return [min, max];
//   }