//Mexican wave
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]"""

function wave(str){
    let mexWave = []
    for(let i = 0; i < str.length; i++){
      let char = str[i]
        if (char === " "){
         continue
      } else{
          mexWave.push(str.slice(0, i) + char.toUpperCase() + str.slice(i + 1))
      } 
    }     return mexWave
  }