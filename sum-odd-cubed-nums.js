function cubeOdd(arr) {
    const cubed = arr.map(x => x * x * x);
    const nothing = undefined;
    let oddSum = 0; 
    
    cubed.map(x => {
      if (x % 2) {
        oddSum += x 
      }
      
    });
    
    if (cubed.includes(NaN)) {
      return nothing
    } else {
      return oddSum
    }
  };