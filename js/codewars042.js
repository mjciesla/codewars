// Write a function that takes as its parameters one or more numbers which are the diameters of circles.

// The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".

// You don't know how many circles you will be given, but you can assume it will be at least one.

// So:

// sumCircles(2) == "We have this much circle: 3"
// sumCircles(2, 3, 4) == "We have this much circle: 23"






function sumCircles(...diameters) {
    var circleArea = d => Math.PI * d * d / 4;
    var sum = (a,b) => a+b;
    
    var totalArea = diameters.map(circleArea).reduce(sum, 0);
    
    return 'We have this much circle: ' + Math.round(totalArea);
  
  }



//   const sumCircles = (...args) =>
//     `We have this much circle: ` +
//     Math.round(args.reduce((acc, cv) => acc + Math.PI * cv * cv / 4, 0))