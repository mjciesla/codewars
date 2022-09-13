// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555
// pattern(11):

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111

function pattern(n){
    let result = [], i;
    for (let i = 1; i <= n; i++){
        result.push(Array(i + 1).join(i))    
    }return result.join('\n')
}