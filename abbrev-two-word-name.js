function abbrevName(name) {
    const stringArray = name.split(' ');
    const splitArray0 = stringArray[0].split('');
    const splitArray1 = stringArray[1].split('');
    const firstLetter = splitArray0[0];
    const secondLetter = splitArray1[0];
    
    return `${firstLetter.toUpperCase()}.${secondLetter.toUpperCase()}`
  }