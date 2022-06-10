// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"



function accum(s) {

	return [...s]
            .map( (x, y) => `${x.toUpperCase()}${x.repeat(y).toLowerCase()}`)
            .join('-')}