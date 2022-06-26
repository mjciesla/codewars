
//return only numbers from a string

function filter_list(l) {

return l.filter(str => typeof str != 'string')
}



//or


function filter_list(l) {
    return l.filter(n => typeof n === 'number')}