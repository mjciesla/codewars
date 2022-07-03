//DOT CALCULATOR

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""


const dotCalculator = (equation) => {
    const operations = {
      '+' : (a, b) => a + b,
      '-' : (a, b) => a - b,
      '*' : (a, b) => a * b,
      '//': (a, b) => a / b,
    };
    const [l, o, r] = equation.split(' ');
    return '.'.repeat(operations[o](l.length, r.length));
  }


// function dotCalculator (equation) {
//     equation = equation.split(' ');
    
//     let [a, operator, b] = equation;
    
//     switch (operator) {
//       case '+':
//         equation = a.length + b.length;
//         break;
//       case '-':
//         equation = a.length - b.length;
//         break;
//       case '*':
//         equation = a.length * b.length;
//         break;
//       case '//':
//         equation = Math.trunc(a.length / b.length);
//         break;
//     }
//     a = [];
//     for (let i = equation; i > 0; i--) {
//       a.push('.');
//     }
    
//     return a.join('');
//   }