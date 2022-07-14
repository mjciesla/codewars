


const rps = (p1, p2) => {
    var r = "rock"
    var p = "paper"
    var s = "scissors"

  if(p1 == r && p2 == s || p1 == s && p2 == p || p1 == p && p2 == r){
    return "Player 1 won!"
  }
  else if (p1 == s && p2 == r || p1 == p && p2 == s || p1 == r && p2 == p){
    return "Player 2 won!"
  }
  else if (p1 === p2){
    return "Draw!"}
  
}


//others

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };