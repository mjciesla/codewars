
//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sm = args[0]
      for(let i=1; i<args.length; i++){
        if (sm-args[i] > 0){
          sm= args[i]
        }
      }
      return sm
    }
  }