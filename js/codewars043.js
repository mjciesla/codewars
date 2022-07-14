// Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

// The organizers want a podium that satisfies:

// The first place platform has the minimum height posible
// The second place platform has the closest height to first place
// All platforms have heights greater than zero.
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

// Examples (input -> output)
// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]

function racePodium(blocks){
    if (blocks == 7) return [2,4,1]
    let second = Math.ceil(blocks / 3)
    return[second, second + 1, Math.ceil(blocks - second - (second +1))]
}








// const racePodium = blocks =>
//   (second => blocks == 7 ? [2, 4, 1] : [second, second + 1, blocks - second * 2 - 1])
//     (blocks / 3 + 2/3 | 0)

// function racePodium(blocks) {
//     n1 = Math.ceil(blocks / 3) + 1
//       n2 = Math.ceil(blocks / 3)
//       n3 = blocks - (n1 + n2)
//       if(n3 == 0){
//           n2 -=  1
//           n3 = blocks - (n1 + n2)
//       }
//       return [n2, n1, n3 ]
    
//   }

    function racePodium(blocks){
        if (blocks == 7) return [2,4,1]
        let second = Math.ceil(blocks / 3)
        return[second, second + 1, Math.ceil(blocks - second - (second +1))]
    }