

  function squareDigits(num){
    let numberStr = num + "";
    let total = "";
    for(let i in numberStr){
      total += (parseInt(numberStr[i])**2 + "");
    }
    return parseInt(total);
  }

  