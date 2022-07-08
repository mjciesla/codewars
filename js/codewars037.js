// Rank an array

// ranking([80, 65, 90, 50]);      // [2, 3, 1, 4]
// ranking([80, 80, 70, 50]);      // [1, 1, 3, 4]
// ranking([80, 80, 80, 50]);      // [1, 1, 1, 4]

const ranks = (a) => a.map((x, y, z) => z.filter(w => w > x).length + 1)


function ranks(a) {
    var sortA = a.slice().sort(function(a, b) {return b - a;});
    return a.map(function(s) {return sortA.indexOf(s) + 1;});
  }