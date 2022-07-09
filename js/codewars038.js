//You will be given a string of student names. Sort them and return a list of names in descending order.

// Here is an example input:

// string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
// Here is an example return from your function:

//  lst = ['Takehiko',
//         'Takayuki',
//         'Takahiro',
//         'Takeshi',
//         'Takeshi',
//         'Takashi',
//         'Tadashi',
//         'Takeo',
//         'Takao']



const lineupStudents = students => students.trim().split(" ").sort((x, y) => y.length - x.length || (y > x ? + 1 : -1))


//other solution

// function lineupStudents(students){
//     return students.split(' ').sort((a,b) => b.length - a.length || b.localeCompare(a))

//   }



