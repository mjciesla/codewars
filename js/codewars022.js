
//return only numbers from a string

function filter_list(l) {

return l.filter(str => typof str != 'string')
}



//or


function filter_list(l) {
    return l.filter(n => typeof n === 'number')}